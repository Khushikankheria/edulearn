import React from "react";
import "../Css/Blog.css";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      date: "20 Jan, 2024",
      title: "Data, Scripts, and Python Wonders",
      description: "Dive into the world of data, scripts, and Python—where simplicity meets power to create endless possibilities in future.",
      image: "https://media.istockphoto.com/id/1486288371/photo/python-snake-and-laptop-computer-concept-of-using-high-level-programming-language-for.jpg?s=612x612&w=0&k=20&c=njmoJ2cEefGNaM9cueDvIDJuIMJn7ULg8jOK8Tiaryk=",
    },
    {
      id: 2,
      date: "20 Jan, 2024",
      title: "From Objects to Operational Excellence",
      description: "Transforming objects into seamless operations—explore the journey from OOP concepts to building efficient, scalable solutions.",
      image: "https://thumbs.dreamstime.com/b/oop-object-oriented-programming-based-concept-objects-which-can-contain-data-code-acronym-text-stamp-background-254135502.jpg",
    },
    {
      id: 3,
      date: "20 Jan, 2024",
      title: "Crafting Dynamic Web with JavaScript",
      description: "JavaScript is the heartbeat of dynamic web experiences—let's explore how it brings interactivity and life to the digital world",
      image: "https://media.istockphoto.com/id/1156837650/photo/javascript-code-computer-language-programming-internet-text-editor-components-display-screen.jpg?s=612x612&w=0&k=20&c=pMRRYB9XwMF2M5Z5cfgprREyZf6xo5Li-jP0qDrFF-Y=",
    },
    {
      id: 4,
      date: "20 Jan, 2024",
      title: "Pythonic Precision: The Code Revolution",
      description: "In the age of innovation, Python stands as a symbol of precision and power, driving a revolution in how we code and create.",
      image: "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZGV8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 5,
      date: "20 Jan, 2024",
      title: "The Infinite Loop of C++ Wisdom",
      description: "C++ is more than just a language—it's a toolkit for transforming syntax into powerful, real-world solutions.",
      image: "https://net-informations.com/csharp/statements/img/break.png",
    },
    {
      id: 6,
      date: "20 Jan, 2024",
      title: "Keys, Queries, and Connections",
      description: "Behind every powerful database lies a world of keys, queries, and connections—unlocking the true potential of structured data.",
      image: "https://media.istockphoto.com/id/1335466803/photo/sql-programming-languages-concept-the-hand-makes-an-inscription.jpg?s=612x612&w=0&k=20&c=CoV1fQy_hMiwJ3evy-Ojt_H3OElyr9jVfOsAfKjutew=",
    },
    {
      id: 7,
      date: "20 Jan, 2024",
      title: "Sorting Through the Chaos",
      description: "In a world full of data, sorting through the chaos is where algorithms shine—bringing order, efficiency, and clarity to complexity.",
      image: "https://media.istockphoto.com/id/844535726/photo/presentation-about-machine-learning-technology-scientist-touching-screen-artificial.jpg?s=612x612&w=0&k=20&c=zPVl1sUnQisKrcKgBaMUUl6yFr7ybOne9UPHDnIizL8=",
    },
    {
      id: 8,
      date: "20 Jan, 2024",
      title: "From Tables to Transactions",
      description: "From organizing data in tables to executing seamless transactions, discover how databases power the engines of modern technology.",
      image: "https://media.istockphoto.com/id/1985354200/photo/developer-or-programmers-text-editor-showing-sql-code-on-computer-monitors-sql-programming.jpg?s=612x612&w=0&k=20&c=nAg9R6Zv0FV1TYI1h03eOhYJ3D3QuJjAHyBf-AiPUrI=",
    },
    {
      id: 9,
      date: "20 Jan, 2024",
      title: "The Art of Algorithms and Systems",
      description: "Algorithms and systems are the silent architects behind every innovation, blending logic with design to solve complex problems",
      image: "https://media.istockphoto.com/id/888477728/photo/abstract-digital-network-communication.webp?a=1&b=1&s=612x612&w=0&k=20&c=OnODnu3E-T8fsvYao_3TRMr_IBh9iSQBXkc2CfZ2zFU="
    },
    {
      id: 10,
      date: "20 Jan, 2024",
      title: "Think in Objects, Code in Style",
      description: "Programming isn't just about writing code; it's about thinking in objects and crafting solutions with style and precision.Welcome to a smarter way of coding!",
      image: "https://media.istockphoto.com/id/1500238408/photo/program-code-development-icon-on-a-digital-lcd-display-with-reflection.webp?a=1&b=1&s=612x612&w=0&k=20&c=uTjfgbLtEA4-jBhCz_tV5txb7FcmNlSUiIzqC2LgXnY=",
    },
    {
      id: 11,
      date: "20 Jan, 2024",
      title: "From Syntax to Solutions in C++",
      description: "C++ is more than just a language—it's a toolkit for transforming syntax into powerful, real-world solutions.Let's embark on this journey from code to creation!",
      image: "https://media.istockphoto.com/id/1149101430/photo/c-text.jpg?s=612x612&w=0&k=20&c=flfyHjGDhRHp7nPYZerpIA7_k1EW2D93wqbgrII7LqY=",
    },
    {
      id: 12,
      date: "20 Jan, 2024",
      title: "The Realm of Relational Databases",
      description: "Step into the realm of relational databases, where structured data meets powerful queries to build the backbone of modern applications.",
      image: "https://media.istockphoto.com/id/177814709/photo/a-picture-of-words-symbolizing-database.webp?a=1&b=1&s=612x612&w=0&k=20&c=-gzxB21-u3hIBEJc-kZb4mbNGigHdlK13qNjaFtHweI=",
    },
    
  ];

  return (
    <div className="blog-section">
      <h2 className="blog-title">OUR BLOGS</h2>
      <div className="blog-container">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <div className="blog-image">
              <img src={blog.image} alt={blog.title} />
            </div>
            <div className="blog-content">
              <span className="blog-date">{blog.date}</span>
              <h3 className="blog-heading">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <button className="blog-read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
