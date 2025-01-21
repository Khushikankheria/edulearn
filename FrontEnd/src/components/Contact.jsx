import React, { useState } from "react";
import "../Css/Contact.css"; // Your CSS file for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    address: "", // Added address field
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage(""); // Clear previous messages

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "", address: "" }); // Reset form
      } else {
        setResponseMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setResponseMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div id="contac-head">    
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            placeholder="Enter your address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Write your message here"
          ></textarea>
        </div>
        <button type="submit" className="btn-submit">
          Send Message
        </button>
      </form>
      {responseMessage && (
        <p className="response-message">{responseMessage}</p>
      )}
    </div>
    </div>
  );
};

export default Contact;
