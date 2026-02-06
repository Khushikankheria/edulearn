const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

/**
 * POST /api/contact
 * Submit a new contact message
 */
router.post("/", async (req, res) => {
  try {
    const { name, email, message, address } = req.body;

    // Create and validate contact using mongoose schema validation
    const contact = new Contact({
      name,
      email,
      message,
      address,
    });

    // Save to database
    const savedContact = await contact.save();

    return res.status(201).json({
      success: true,
      message: "Your message has been sent successfully!",
      data: {
        id: savedContact._id,
        name: savedContact.name,
        email: savedContact.email,
        createdAt: savedContact.createdAt,
      },
    });
  } catch (error) {
    console.error("Error submitting contact:", error.message);

    // Handle validation errors
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({
        success: false,
        error: "Validation failed",
        details: messages,
      });
    }

    // Handle duplicate email
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        error: "Email already exists",
      });
    }

    return res.status(500).json({
      success: false,
      error: "Server error. Please try again later.",
    });
  }
});

/**
 * GET /api/contact
 * Retrieve all contacts (admin only)
 */
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find()
      .sort({ createdAt: -1 })
      .select("-__v");

    return res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    console.error("Error retrieving contacts:", error.message);
    return res.status(500).json({
      success: false,
      error: "Server error. Please try again later.",
    });
  }
});

/**
 * GET /api/contact/:id
 * Retrieve a specific contact by ID
 */
router.get("/:id", async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        error: "Contact not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    console.error("Error retrieving contact:", error.message);
    if (error.kind === "ObjectId") {
      return res.status(400).json({
        success: false,
        error: "Invalid contact ID",
      });
    }
    return res.status(500).json({
      success: false,
      error: "Server error. Please try again later.",
    });
  }
});

module.exports = router;
