import React, { useState } from "react";
import "../Css/Blog.css";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogs = [
    {
      id: 1,
      date: "20 Jan, 2024",
      title: "Data, Scripts, and Python Wonders",
      description: "Dive into the world of data, scripts, and Python—where simplicity meets power to create endless possibilities in future.",
      category: "python",
      author: "Sarah Chen",
      readTime: "5 min read",
      image: "https://media.istockphoto.com/id/1486288371/photo/python-snake-and-laptop-computer-concept-of-using-high-level-programming-language-for.jpg?s=612x612&w=0&k=20&c=njmoJ2cEefGNaM9cueDvIDJuIMJn7ULg8jOK8Tiaryk=",
      content: "Python has revolutionized the way we write code. With its simple syntax and powerful libraries, Python makes it easy to work with data, create scripts, and build complex applications. In this article, we'll explore the wonders of Python and how it's changing the landscape of programming. From web development to data science, Python is everywhere. Let's dive deeper into what makes Python so special and how you can harness its power for your projects.",
    },
    {
      id: 2,
      date: "20 Jan, 2024",
      title: "From Objects to Operational Excellence",
      description: "Transforming objects into seamless operations—explore the journey from OOP concepts to building efficient, scalable solutions.",
      category: "oops",
      author: "John Doe",
      readTime: "7 min read",
      image: "https://thumbs.dreamstime.com/b/oop-object-oriented-programming-based-concept-objects-which-can-contain-data-code-acronym-text-stamp-background-254135502.jpg",
      content: "Object-Oriented Programming (OOP) is a fundamental paradigm in software development. It teaches us to think about problems in terms of objects and their interactions. Understanding classes, inheritance, interfaces, and polymorphism is crucial for writing scalable code. This comprehensive guide will help you master OOP concepts and apply them to real-world scenarios.",
    },
    {
      id: 3,
      date: "20 Jan, 2024",
      title: "Crafting Dynamic Web with JavaScript",
      description: "JavaScript is the heartbeat of dynamic web experiences—let's explore how it brings interactivity and life to the digital world",
      category: "javascript",
      author: "Emma Wilson",
      readTime: "6 min read",
      image: "https://media.istockphoto.com/id/1156837650/photo/javascript-code-computer-language-programming-internet-text-editor-components-display-screen.jpg?s=612x612&w=0&k=20&c=pMRRYB9XwMF2M5Z5cfgprREyZf6xo5Li-jP0qDrFF-Y=",
      content: "JavaScript has evolved from a simple scripting language to a powerful tool that powers modern web applications. Learn about ES6+ features, async/await, promises, and DOM manipulation. This article covers everything you need to know to become a JavaScript expert and build stunning interactive web experiences.",
    },
    {
      id: 4,
      date: "20 Jan, 2024",
      title: "Pythonic Precision: The Code Revolution",
      description: "In the age of innovation, Python stands as a symbol of precision and power, driving a revolution in how we code and create.",
      category: "python",
      author: "Mike Johnson",
      readTime: "8 min read",
      image: "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZGV8ZW58MHx8MHx8fDA%3D",
      content: "Python's elegant syntax and powerful libraries make it the language of choice for data scientists and developers worldwide. Explore how Python is revolutionizing machine learning, artificial intelligence, and data analysis. This deep dive covers best practices, design patterns, and optimization techniques.",
    },
    {
      id: 5,
      date: "20 Jan, 2024",
      title: "The Infinite Loop of C++ Wisdom",
      description: "C++ is more than just a language—it's a toolkit for transforming syntax into powerful, real-world solutions.",
      category: "cpp",
      author: "Alex Kumar",
      readTime: "9 min read",
      image: "https://net-informations.com/csharp/statements/img/break.png",
      content: "C++ remains one of the most powerful programming languages for system-level programming and performance-critical applications. Discover the intricacies of memory management, pointers, templates, and modern C++ features. This guide will transform your understanding of efficient code development.",
    },
    {
      id: 6,
      date: "20 Jan, 2024",
      title: "Keys, Queries, and Connections",
      description: "Behind every powerful database lies a world of keys, queries, and connections—unlocking the true potential of structured data.",
      category: "dbms",
      author: "Lisa Chen",
      readTime: "7 min read",
      image: "https://media.istockphoto.com/id/1335466803/photo/sql-programming-languages-concept-the-hand-makes-an-inscription.jpg?s=612x612&w=0&k=20&c=CoV1fQy_hMiwJ3evy-Ojt_H3OElyr9jVfOsAfKjutew=",
      content: "Database management systems are the backbone of modern applications. Learn about relational databases, SQL queries, indexes, transactions, and optimization. This comprehensive guide covers everything from basic concepts to advanced querying techniques.",
    },
    {
      id: 7,
      date: "20 Jan, 2024",
      title: "Sorting Through the Chaos",
      description: "In a world full of data, sorting through the chaos is where algorithms shine—bringing order, efficiency, and clarity to complexity.",
      category: "dsa",
      author: "David Brown",
      readTime: "8 min read",
      image: "https://media.istockphoto.com/id/844535726/photo/presentation-about-machine-learning-technology-scientist-touching-screen-artificial.jpg?s=612x612&w=0&k=20&c=zPVl1sUnQisKrcKgBaMUUl6yFr7ybOne9UPHDnIizL8=",
      content: "Data Structures and Algorithms (DSA) form the foundation of computer science. Master sorting algorithms, searching techniques, tree structures, and graph algorithms. This detailed walkthrough will help you solve complex problems efficiently.",
    },
    {
      id: 8,
      date: "20 Jan, 2024",
      title: "From Tables to Transactions",
      description: "From organizing data in tables to executing seamless transactions, discover how databases power the engines of modern technology.",
      category: "dbms",
      author: "Nina Patel",
      readTime: "6 min read",
      image: "https://media.istockphoto.com/id/1985354200/photo/developer-or-programmers-text-editor-showing-sql-code-on-computer-monitors-sql-programming.jpg?s=612x612&w=0&k=20&c=nAg9R6Zv0FV1TYI1h03eOhYJ3D3QuJjAHyBf-AiPUrI=",
      content: "Understanding database transactions is crucial for building reliable applications. Learn about ACID properties, transaction isolation levels, and handling concurrent access. This guide will elevate your database design skills.",
    },
    {
      id: 9,
      date: "20 Jan, 2024",
      title: "The Art of Algorithms and Systems",
      description: "Algorithms and systems are the silent architects behind every innovation, blending logic with design to solve complex problems",
      category: "dsa",
      author: "Chris Lee",
      readTime: "10 min read",
      image: "https://media.istockphoto.com/id/888477728/photo/abstract-digital-network-communication.webp?a=1&b=1&s=612x612&w=0&k=20&c=OnODnu3E-T8fsvYao_3TRMr_IBh9iSQBXkc2CfZ2zFU=",
      content: "Master the art of designing efficient algorithms and systems architecture. Learn about complexity analysis, design patterns, and system optimization. This comprehensive guide covers everything from algorithm analysis to practical implementation strategies.",
    },
  ];

  const categories = [
    { value: "all", label: "All Posts" },
    { value: "python", label: "Python" },
    { value: "javascript", label: "JavaScript" },
    { value: "cpp", label: "C++" },
    { value: "oops", label: "OOPS" },
    { value: "dbms", label: "DBMS" },
    { value: "dsa", label: "DSA" },
  ];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getRelatedBlogs = (currentBlog) => {
    return blogs
      .filter(
        (blog) =>
          blog.category === currentBlog.category && blog.id !== currentBlog.id
      )
      .slice(0, 3);
  };

  const handleReadMore = (blog) => {
    setSelectedBlog(blog);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedBlog(null);
    document.body.style.overflow = "auto";
  };

  const handleSelectRelated = (blog) => {
    setSelectedBlog(blog);
  };

  return (
    <div className="blog-wrapper">
      {/* Header Section */}
      <div className="blog-header">
        <h1 className="blog-title">Our Latest Articles</h1>
        <p className="blog-subtitle">Explore insights, tutorials, and tips from our experts</p>
      </div>

      {/* Search and Filter Section */}
      <div className="blog-controls">
        <div className="search-box">
          <input
            type="text"
            placeholder="🔍 Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category.value}
              className={`filter-btn ${selectedCategory === category.value ? "active" : ""}`}
              onClick={() => setSelectedCategory(category.value)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="blog-container">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <article key={blog.id} className="blog-card">
              <div className="blog-image-wrapper">
                <img src={blog.image} alt={blog.title} className="blog-image" />
                <span className="blog-category">{blog.category.toUpperCase()}</span>
              </div>

              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">📅 {blog.date}</span>
                  <span className="blog-read-time">⏱️ {blog.readTime}</span>
                </div>

                <h3 className="blog-heading">{blog.title}</h3>

                <p className="blog-description">{blog.description}</p>

                <div className="blog-author">
                  <span className="author-name">✍️ By {blog.author}</span>
                </div>

                <div className="blog-actions">
                  <button 
                    className="blog-read-more"
                    onClick={() => handleReadMore(blog)}
                  >
                    Read Full Article
                  </button>
                  <button className="blog-share">Share</button>
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="no-results">
            <p>No articles found matching your search.</p>
            <button 
              className="reset-btn"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Results Count */}
      {filteredBlogs.length > 0 && (
        <div className="results-count">
          Showing {filteredBlogs.length} of {blogs.length} articles
        </div>
      )}

      {/* Blog Detail Modal */}
      {selectedBlog && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>✕</button>

            <div className="modal-header">
              <img src={selectedBlog.image} alt={selectedBlog.title} className="modal-image" />
              <span className="modal-category">{selectedBlog.category.toUpperCase()}</span>
            </div>

            <div className="modal-body">
              <h1 className="modal-title">{selectedBlog.title}</h1>

              <div className="modal-meta">
                <span>📅 {selectedBlog.date}</span>
                <span>⏱️ {selectedBlog.readTime}</span>
                <span>✍️ By {selectedBlog.author}</span>
              </div>

              <div className="modal-text">
                <p>{selectedBlog.description}</p>
                <p>{selectedBlog.content}</p>
              </div>

              {/* Related Articles */}
              <div className="related-articles">
                <h3>Related Articles</h3>
                <div className="related-grid">
                  {getRelatedBlogs(selectedBlog).length > 0 ? (
                    getRelatedBlogs(selectedBlog).map((relatedBlog) => (
                      <div 
                        key={relatedBlog.id} 
                        className="related-card"
                        onClick={() => handleSelectRelated(relatedBlog)}
                      >
                        <img src={relatedBlog.image} alt={relatedBlog.title} />
                        <div className="related-content">
                          <h4>{relatedBlog.title}</h4>
                          <p className="related-meta">{relatedBlog.readTime}</p>
                          <button className="related-link">Read Article →</button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="no-related">No related articles found.</p>
                  )}
                </div>
              </div>

              <div className="modal-actions">
                <button className="btn-share">📤 Share Article</button>
                <button className="btn-close" onClick={handleCloseModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
