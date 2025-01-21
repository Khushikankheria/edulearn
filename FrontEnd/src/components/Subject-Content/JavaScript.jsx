import React from 'react';
import Timestamp from '../Timestamp'; // Component for showing the timestamp

// For code snippets
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

// For prop validation
import PropTypes from 'prop-types';

const JavaScript = ({ topic }) => {
  const content = {
    "Introduction to JavaScript": (
  <div>
    <Timestamp />
    <h1>What is JavaScript?</h1>
    <p>
      JavaScript is a versatile programming language used for creating dynamic and interactive web applications. It is one of the core technologies of the web, alongside HTML and CSS. Initially developed as a client-side language, JavaScript now supports server-side development with environments like Node.js.
    </p>
    
    <h2>Features of JavaScript:</h2>
    <ul>
      <li>Client-side and server-side execution.</li>
      <li>Supports object-oriented, functional, and event-driven programming.</li>
      <li>Used extensively with modern frameworks like React, Angular, and Vue.</li>
      <li>Lightweight and easy to learn.</li>
      <li>Supports asynchronous programming with features like Promises, async/await, and callbacks.</li>
    </ul>

    <h2>JavaScript Basics:</h2>
    <p>
      Here are some foundational concepts and syntax of JavaScript:
    </p>
    <SyntaxHighlighter language="javascript" style={coy}>
      {`// Variables
let name = "John";
const PI = 3.14;

// Functions
function greet() {
    console.log("Hello, World!");
}
greet();

// Conditional Statements
if (PI > 3) {
    console.log("PI is greater than 3");
}

// Loops
for (let i = 0; i < 5; i++) {
    console.log(i);
}`}
    </SyntaxHighlighter>

    <h2>Key Concepts:</h2>
    <h3>1. Variables and Data Types:</h3>
    <p>
      JavaScript supports dynamic typing and different data types like <code>string</code>, <code>number</code>, <code>boolean</code>, <code>object</code>, and <code>undefined</code>.
    </p>
    <SyntaxHighlighter language="javascript" style={coy}>
      {`// Example of variables and data types
let age = 25; // number
let isStudent = true; // boolean
let person = { name: "Alice", age: 22 }; // object
console.log(person.name);`}
    </SyntaxHighlighter>

    <h3>2. Functions:</h3>
    <p>
      Functions allow you to encapsulate code into reusable blocks. They can be declared in different ways, such as regular functions, arrow functions, or as methods inside objects.
    </p>
    <SyntaxHighlighter language="javascript" style={coy}>
      {`// Arrow function
const add = (a, b) => a + b;
console.log(add(5, 10));`}
    </SyntaxHighlighter>

    <h3>3. DOM Manipulation:</h3>
    <p>
      JavaScript enables developers to manipulate the Document Object Model (DOM) to create interactive web pages.
    </p>
    <SyntaxHighlighter language="javascript" style={coy}>
      {`// Example of DOM manipulation
document.querySelector("button").addEventListener("click", () => {
    document.body.style.backgroundColor = "lightblue";
});`}
    </SyntaxHighlighter>

    <h2>Advanced Features:</h2>
    <h3>1. Asynchronous JavaScript:</h3>
    <p>
      JavaScript supports asynchronous programming to handle tasks like API calls or fetching data.
    </p>
    <SyntaxHighlighter language="javascript" style={coy}>
      {`// Fetching data from an API
fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));`}
    </SyntaxHighlighter>

    <h3>2. ES6+ Features:</h3>
    <p>
      Modern JavaScript (ES6 and beyond) includes features like template literals, destructuring, modules, and classes.
    </p>
    <SyntaxHighlighter language="javascript" style={coy}>
      {`// Example of ES6 features
const student = { name: "Mike", age: 21 };
const { name, age } = student;
console.log(\`Name: \${name}, Age: \${age}\`);`}
    </SyntaxHighlighter>

    <h2>Applications of JavaScript:</h2>
    <ul>
      <li><b>Web Development:</b> Frontend and backend development using frameworks like React and Node.js.</li>
      <li><b>Mobile Development:</b> Creating mobile apps using frameworks like React Native.</li>
      <li><b>Game Development:</b> Developing browser-based games with libraries like Phaser.</li>
      <li><b>Server-Side Programming:</b> Building APIs and handling server logic using Node.js.</li>
    </ul>
  </div>
)
,
    "Variables and Data Types": (
  <div>
    <Timestamp />
    <h1>Variables and Data Types</h1>
    <p>
      In JavaScript, variables are containers for storing data values. The <code>let</code>, <code>const</code>, and <code>var</code> keywords are used to declare variables.
    </p>
    
    <h2>Declaring Variables:</h2>
    <ul>
      <li><code>let</code>: Block-scoped and can be updated but not redeclared in the same scope.</li>
      <li><code>const</code>: Block-scoped and cannot be updated or redeclared. It must be initialized during declaration.</li>
      <li><code>var</code>: Function-scoped and can be updated and redeclared.</li>
    </ul>
    <SyntaxHighlighter language="javascript" style={coy}>
      {`let name = "Alice";
const age = 25;
var isStudent = true;

console.log(name, age, isStudent);`}
    </SyntaxHighlighter>

    <h2>Data Types:</h2>
    <p>
      JavaScript variables can hold different data types, which are broadly categorized into <b>primitive</b> and <b>non-primitive</b> types.
    </p>

    <h3>1. Primitive Data Types:</h3>
    <ul>
      <li><b>Number:</b> Represents numeric values (e.g., <code>42</code>, <code>3.14</code>).</li>
      <li><b>String:</b> Represents text values enclosed in quotes (e.g., <code>"Hello"</code>, <code>'World'</code>).</li>
      <li><b>Boolean:</b> Represents <code>true</code> or <code>false</code>.</li>
      <li><b>Null:</b> Represents an intentional absence of any object value.</li>
      <li><b>Undefined:</b> Represents a variable that has been declared but not assigned a value.</li>
      <li><b>Symbol:</b> Represents a unique and immutable identifier (introduced in ES6).</li>
      <li><b>BigInt:</b> Used to represent integers larger than the <code>Number</code> type can safely handle (introduced in ES11).</li>
    </ul>

    <h3>2. Non-Primitive Data Types:</h3>
    <ul>
      <li><b>Object:</b> A collection of key-value pairs.</li>
      <li><b>Array:</b> A special type of object used to store ordered collections of values.</li>
      <li><b>Function:</b> A block of reusable code.</li>
    </ul>

    <h3>Examples of Data Types:</h3>
    <SyntaxHighlighter language="javascript" style={coy}>
      {`// Primitive types
let num = 42; // Number
let str = "Hello"; // String
let isValid = true; // Boolean
let emptyValue = null; // Null
let notDefined; // Undefined
let uniqueID = Symbol("id"); // Symbol
let largeNum = 123456789012345678901234567890n; // BigInt

// Non-primitive types
let obj = { name: "Alice", age: 25 }; // Object
let arr = [1, 2, 3, 4]; // Array
function greet() {
    console.log("Hi there!");
} // Function

console.log(num, str, isValid, emptyValue, notDefined, uniqueID, largeNum);
console.log(obj, arr);
greet();`}
    </SyntaxHighlighter>

    <h2>Dynamic Typing:</h2>
    <p>
      JavaScript is dynamically typed, meaning a variable's type can change during runtime.
    </p>
    <SyntaxHighlighter language="javascript" style={coy}>
      {`let value = "Hello"; // Initially a string
value = 42; // Now a number
console.log(value);`}
    </SyntaxHighlighter>

    <h2>Scope of Variables:</h2>
    <ul>
      <li><b>Global Scope:</b> Variables declared outside any function or block.</li>
      <li><b>Function Scope:</b> Variables declared with <code>var</code> inside a function.</li>
      <li><b>Block Scope:</b> Variables declared with <code>let</code> or <code>const</code> inside a block (<code>{`{}`}</code>).</li>
    </ul>
    <SyntaxHighlighter language="javascript" style={coy}>
      {`{
    let blockScoped = "I exist only in this block";
    var functionScoped = "I exist in the whole function";
}
console.log(functionScoped); // Works
console.log(blockScoped); // Error: blockScoped is not defined`}
    </SyntaxHighlighter>
  </div>
)
,
   "Functions": (
  <div>
    <Timestamp />
    <h1>Functions in JavaScript</h1>
    <p>
      Functions are reusable blocks of code designed to perform a particular task. They help improve code organization and reduce redundancy. Functions can be defined using the <code>function</code> keyword, arrow functions, or as methods in objects.
    </p>

    <h2>Types of Functions:</h2>
    <ul>
      <li><b>Function Declaration:</b> Declares a function with the <code>function</code> keyword.</li>
      <li><b>Function Expression:</b> Assigns a function to a variable.</li>
      <li><b>Arrow Functions:</b> A concise way to write functions introduced in ES6.</li>
      <li><b>Anonymous Functions:</b> Functions without a name, often used in callbacks.</li>
    </ul>

    <h3>Examples:</h3>
    <SyntaxHighlighter language="javascript" style={coy}>
      {`// Function Declaration
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Function Expression
const multiply = function(a, b) {
  return a * b;
};

// Arrow Function
const add = (a, b) => a + b;

// Anonymous Function (used in callbacks)
setTimeout(function() {
  console.log("This runs after 2 seconds.");
}, 2000);

console.log(greet("Alice")); // Output: Hello, Alice!
console.log(multiply(4, 5)); // Output: 20
console.log(add(3, 7)); // Output: 10`}
    </SyntaxHighlighter>

    <h2>Parameters and Arguments:</h2>
    <p>
      Functions can take input values called <b>parameters</b> and use them in the function body. <b>Arguments</b> are the values passed when calling the function.
    </p>
    <SyntaxHighlighter language="javascript" style={coy}>
      {`function sayHello(name) {
  console.log(\`Hello, \${name}!\`);
}

sayHello("Bob"); // 'Bob' is the argument`}
    </SyntaxHighlighter>

    <h2>Default Parameters:</h2>
    <p>
      Default parameter values can be specified to handle cases where arguments are missing.
    </p>
    <SyntaxHighlighter language="javascript" style={coy}>
      {`function greet(name = "Guest") {
  console.log(\`Hello, \${name}!\`);
}

greet(); // Output: Hello, Guest!
greet("Charlie"); // Output: Hello, Charlie!`}
    </SyntaxHighlighter>

    <h2>Return Statement:</h2>
    <p>
      The <code>return</code> statement specifies the value a function returns. If no <code>return</code> is used, the function returns <code>undefined</code>.
    </p>
    <SyntaxHighlighter language="javascript" style={coy}>
      {`function square(num) {
  return num * num;
}

console.log(square(4)); // Output: 16`}
    </SyntaxHighlighter>

    <h2>Higher-Order Functions:</h2>
    <p>
      Functions that take other functions as arguments or return functions are called higher-order functions.
    </p>
    <SyntaxHighlighter language="javascript" style={coy}>
      {`function operate(a, b, operation) {
  return operation(a, b);
}

const result = operate(5, 3, (x, y) => x + y); // Passing an arrow function as an argument
console.log(result); // Output: 8`}
    </SyntaxHighlighter>

    <h2>Immediately Invoked Function Expressions (IIFE):</h2>
    <p>
      IIFEs are functions that execute immediately after being defined.
    </p>
    <SyntaxHighlighter language="javascript" style={coy}>
      {`(function() {
  console.log("This function runs immediately!");
})();`}
    </SyntaxHighlighter>

    <h2>Function Scope:</h2>
    <p>
      Variables declared inside a function are only accessible within that function (local scope).
    </p>
    <SyntaxHighlighter language="javascript" style={coy}>
      {`function testScope() {
  let localVar = "I'm local";
  console.log(localVar); // Works
}

testScope();
console.log(localVar); // Error: localVar is not defined`}
    </SyntaxHighlighter>
  </div>
)
,
    "Objects and Arrays": (
  <div>
    <Timestamp />
    <h1>Objects and Arrays</h1>
    <p>
      Objects and arrays are non-primitive data types in JavaScript. Objects store data in key-value pairs, while arrays store ordered collections of data.
    </p>

    <h2>Objects:</h2>
    <p>
      An object is a collection of properties, where each property is a key-value pair. Properties can hold values of any data type, including other objects and functions.
    </p>
    <h3>Examples:</h3>
    <SyntaxHighlighter language="javascript" style={coy}>
      {`// Defining an Object
const person = {
  name: "Alice",
  age: 25,
  greet() {
    return \`Hello, \${this.name}!\`;
  }
};

// Accessing Properties
console.log(person.name); // Output: Alice
console.log(person["age"]); // Output: 25

// Calling a Method
console.log(person.greet()); // Output: Hello, Alice!

// Adding a New Property
person.city = "New York";
console.log(person.city); // Output: New York`}
    </SyntaxHighlighter>

    <h2>Arrays:</h2>
    <p>
      An array is an ordered collection of elements, which can be of any data type. Arrays are zero-indexed, meaning the first element has an index of <code>0</code>.
    </p>
    <h3>Examples:</h3>
    <SyntaxHighlighter language="javascript" style={coy}>
      {`// Defining an Array
const numbers = [1, 2, 3, 4, 5];

// Accessing Elements
console.log(numbers[2]); // Output: 3

// Adding Elements
numbers.push(6); // Adds 6 to the end of the array
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]

// Removing Elements
numbers.pop(); // Removes the last element
console.log(numbers); // Output: [1, 2, 3, 4, 5]`}
    </SyntaxHighlighter>

    <h2>Common Array Methods:</h2>
    <ul>
      <li><code>map()</code>: Creates a new array by applying a function to each element.</li>
      <li><code>filter()</code>: Creates a new array with elements that satisfy a condition.</li>
      <li><code>reduce()</code>: Reduces an array to a single value by applying a function.</li>
      <li><code>forEach()</code>: Executes a function for each element (does not return a new array).</li>
    </ul>
    <h3>Examples:</h3>
    <SyntaxHighlighter language="javascript" style={coy}>
      {`const numbers = [1, 2, 3, 4, 5];

// Using map()
const squares = numbers.map(num => num * num);
console.log(squares); // Output: [1, 4, 9, 16, 25]

// Using filter()
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// Using reduce()
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // Output: 15`}
    </SyntaxHighlighter>

    <h2>Combining Objects and Arrays:</h2>
    <p>
      Objects and arrays can be combined to create complex data structures. For example, an array of objects:
    </p>
    <SyntaxHighlighter language="javascript" style={coy}>
      {`const students = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 23 }
];

// Accessing Object Properties in an Array
console.log(students[1].name); // Output: Bob`}
    </SyntaxHighlighter>

    <h2>Spread Operator:</h2>
    <p>
      The spread operator (<code>...</code>) allows you to copy and combine arrays or objects.
    </p>
    <SyntaxHighlighter language="javascript" style={coy}>
      {`// Copying Arrays
const newNumbers = [...numbers];
console.log(newNumbers); // Output: [1, 2, 3, 4, 5]

// Merging Objects
const student = { name: "Alice", age: 25 };
const updatedStudent = { ...student, city: "New York" };
console.log(updatedStudent); // Output: { name: 'Alice', age: 25, city: 'New York' }`}
    </SyntaxHighlighter>
  </div>
)
,
    "Promises and Async/Await": (
      <div>
         <Timestamp />
        <h1>Promises and Async/Await</h1>
        <p>
          Promises are used to handle asynchronous operations in JavaScript. The <code>async/await</code> syntax simplifies working with promises and makes asynchronous code easier to read.
        </p>
        <h2>Example:</h2>
        <SyntaxHighlighter language="javascript" style={coy}>
          {`// Using Promises
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data fetched"), 2000);
  });
};

fetchData().then((data) => console.log(data)); // Output: Data fetched (after 2 seconds)

// Using Async/Await
const fetchAsyncData = async () => {
  const data = await fetchData();
  console.log(data);
};

fetchAsyncData();`}
        </SyntaxHighlighter>
      </div>
    ),
    "DOM Manipulation": (
  <div>
    <Timestamp />
    <h1>DOM Manipulation</h1>
    <p>
      The Document Object Model (DOM) is an interface that allows JavaScript to interact with and manipulate the structure and content of web pages. It represents the HTML as a tree structure of nodes, enabling dynamic updates.
    </p>

    <h2>1. Selecting Elements:</h2>
    <p>
      You can use various methods to select elements in the DOM.
    </p>
    <SyntaxHighlighter language="javascript" style={coy}>
      {`// Selecting by ID
const heading = document.getElementById("title");

// Selecting by Class
const items = document.getElementsByClassName("item");

// Selecting by Tag
const paragraphs = document.getElementsByTagName("p");

// Using querySelector (for single element)
const firstItem = document.querySelector(".item");

// Using querySelectorAll (for multiple elements)
const allItems = document.querySelectorAll(".item");`}
    </SyntaxHighlighter>

    <h2>2. Manipulating Content:</h2>
    <p>
      Modify text, HTML, or attributes of elements.
    </p>
    <SyntaxHighlighter language="javascript" style={coy}>
      {`// Changing Text Content
heading.textContent = "Updated Title";

// Changing HTML Content
heading.innerHTML = "<span>Updated Title with HTML</span>";

// Changing Attributes
heading.setAttribute("class", "new-class");
heading.id = "new-id";`}
    </SyntaxHighlighter>

    <h2>3. Adding and Removing Elements:</h2>
    <p>
      You can dynamically add or remove elements in the DOM.
    </p>
    <SyntaxHighlighter language="javascript" style={coy}>
      {`// Creating a New Element
const newElement = document.createElement("div");
newElement.textContent = "Hello, World!";
document.body.appendChild(newElement);

// Removing an Element
const elementToRemove = document.getElementById("remove-me");
elementToRemove.remove();`}
    </SyntaxHighlighter>

    <h2>4. Event Listeners:</h2>
    <p>
      Add interactivity by attaching event listeners to elements.
    </p>
    <SyntaxHighlighter language="javascript" style={coy}>
      {`// Adding a Click Event Listener
document.getElementById("button").addEventListener("click", () => {
  alert("Button Clicked!");
});

// Adding a Mouseover Event Listener
const box = document.getElementById("box");
box.addEventListener("mouseover", () => {
  box.style.backgroundColor = "blue";
});`}
    </SyntaxHighlighter>

    <h2>5. Traversing the DOM:</h2>
    <p>
      Navigate between parent, child, and sibling nodes.
    </p>
    <SyntaxHighlighter language="javascript" style={coy}>
      {`// Parent Node
const parent = heading.parentElement;

// Child Nodes
const children = document.getElementById("list").children;

// Next and Previous Siblings
const next = heading.nextElementSibling;
const previous = heading.previousElementSibling;`}
    </SyntaxHighlighter>

    <h2>6. Styling Elements:</h2>
    <p>
      Modify CSS styles directly using JavaScript.
    </p>
    <SyntaxHighlighter language="javascript" style={coy}>
      {`// Changing Style
heading.style.color = "red";
heading.style.fontSize = "24px";

// Adding/Removing Classes
heading.classList.add("highlight");
heading.classList.remove("highlight");`}
    </SyntaxHighlighter>

    <h2>7. Combining Examples:</h2>
    <p>
      A practical example that combines multiple DOM manipulation techniques.
    </p>
    <SyntaxHighlighter language="javascript" style={coy}>
      {`document.querySelector("#add-item").addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = "New List Item";
  document.querySelector("#list").appendChild(newItem);
});`}
    </SyntaxHighlighter>
  </div>
)
,
    "ES6 Features": (
      <div>
         <Timestamp />
        <h1>ES6 Features</h1>
        <p>
          ES6 (ECMAScript 2015) introduced several new features to JavaScript, including arrow functions, template literals, destructuring, and more.
        </p>
        <h2>Key Features:</h2>
        <ul>
          <li><b>Arrow Functions:</b> Shorter syntax for functions.</li>
          <li><b>Template Literals:</b> Interpolation with backticks.</li>
          <li><b>Destructuring:</b> Extract values from arrays or objects.</li>
          <li><b>Modules:</b> Import and export functionality.</li>
        </ul>
        <h3>Example:</h3>
        <SyntaxHighlighter language="javascript" style={coy}>
          {`// Template Literals
const name = "Alice";
console.log(\`Hello, \${name}!\`); // Output: Hello, Alice!

// Destructuring
const [a, b] = [1, 2];
console.log(a, b); // Output: 1 2`}
        </SyntaxHighlighter>
      </div>
    )
  };

  return (
    <div>
      {/* <Timestamp /> */}
      {content[topic] || (
        <p style={{ color: 'red' }}>Topic not found. Please select a valid topic.</p>
      )}
    </div>
  );
};

// Prop validation
JavaScript.propTypes = {
  topic: PropTypes.string.isRequired,
};

export default JavaScript;
