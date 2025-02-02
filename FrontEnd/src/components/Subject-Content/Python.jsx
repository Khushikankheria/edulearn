// import React from 'react';
// import Timestamp from '../Timestamp'; // Component for showing the timestamp

// // For code snippets
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

// // For prop validation
// import PropTypes from 'prop-types';

// const Python = ({ topic }) => {
//   const content = {
//     "Introduction to Python": (
//   <div>
//     <Timestamp />
//     <h1>Introduction to Python</h1>
//     <p>
//       Python is a high-level, interpreted, and dynamically-typed programming language known for its simplicity and readability. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming.
//     </p>
//     <h2>Key Features:</h2>
//     <ul>
//       <li>Easy to learn and use</li>
//       <li>Extensive standard library</li>
//       <li>Supports third-party libraries</li>
//       <li>Great for rapid development and prototyping</li>
//     </ul>
//     <h2>Applications of Python:</h2>
//     <ul>
//       <li>Web Development (e.g., Flask, Django)</li>
//       <li>Data Science and Machine Learning (e.g., NumPy, pandas, TensorFlow)</li>
//       <li>Game Development (e.g., Pygame)</li>
//       <li>Scientific Computing and Simulations</li>
//       <li>Automation and Scripting</li>
//     </ul>
//     <h2>Why Choose Python?</h2>
//     <p>
//       Python is popular among developers because of its vast ecosystem and strong community support. Its versatility allows it to be used in various industries, from finance to artificial intelligence.
//     </p>
//     <h2>Getting Started:</h2>
//     <p>
//       To start programming with Python, you need to install it on your system. You can download it from the <a href="https://www.python.org/downloads/">official Python website</a>. Once installed, you can write Python code using a text editor or an Integrated Development Environment (IDE) like PyCharm, VS Code, or Jupyter Notebook.
//     </p>
//     <h2>Basic Syntax:</h2>
//     <p>
//       Here's a simple example of Python code:
//     </p>
//     <pre>
//       <code>
// # Print "Hello, World!"
// print("Hello, World!")

// # Declare a variable
// x = 5

// # Create a function
// def greet(name):
//     return f"Hello, {name}!"

// # Call the function
// print(greet("Python"))
//       </code>
//     </pre>
//     <p>
//       Python's syntax is clean and intuitive, making it an excellent choice for beginners and experts alike.
//     </p>
//   </div>
// )
// ,
//     "Basic Syntax": (
//   <div>
//     <Timestamp />
//     <h1>Python Basic Syntax</h1>
//     <p>
//       Python has a simple and clean syntax that is easy to read and write. Here's an example of a basic Python program:
//     </p>
//     <SyntaxHighlighter language="python" style={coy}>
//       {`# Hello World in Python
// print("Hello, World!")`}
//     </SyntaxHighlighter>
//     <p>
//       Python uses indentation to define blocks of code, unlike braces ({}) used in many other programming languages. This makes the code visually clear and easier to maintain.
//     </p>
//     <h2>Variable Declaration:</h2>
//     <SyntaxHighlighter language="python" style={coy}>
//       {`# Declare variables
// x = 10
// name = "Alice"

// # Print variables
// print(x)
// print(name)`}
//     </SyntaxHighlighter>
//     <p>
//       Python variables are dynamically typed, meaning you don't need to specify the data type explicitly.
//     </p>
//     <h2>Conditional Statements:</h2>
//     <SyntaxHighlighter language="python" style={coy}>
//       {`# Example of if-else statement
// age = 18
// if age >= 18:
//     print("You are an adult.")
// else:
//     print("You are a minor.")`}
//     </SyntaxHighlighter>
//     <h2>Loops:</h2>
//     <SyntaxHighlighter language="python" style={coy}>
//       {`# Example of a for loop
// for i in range(5):
//     print(i)

// # Example of a while loop
// count = 0
// while count < 5:
//     print(count)
//     count += 1`}
//     </SyntaxHighlighter>
//     <h2>Functions:</h2>
//     <SyntaxHighlighter language="python" style={coy}>
//       {`# Define a function
// def greet(name):
//     return f"Hello, {name}!"

// # Call the function
// print(greet("Python"))`}
//     </SyntaxHighlighter>
//     <p>
//       Functions in Python are defined using the <code>def</code> keyword, followed by the function name and parameters in parentheses.
//     </p>
//     <h2>Comments:</h2>
//     <SyntaxHighlighter language="python" style={coy}>
//       {`# This is a single-line comment

// '''
// This is a 
// multi-line comment
// '''`}
//     </SyntaxHighlighter>
//     <p>
//       Comments help document your code and are ignored during execution.
//     </p>
//     <h2>Conclusion:</h2>
//     <p>
//       Python's basic syntax is straightforward and intuitive, making it an excellent choice for beginners while remaining powerful enough for advanced developers.
//     </p>
//   </div>
// )
// ,
//     "Data Types": (
//       <div>
//          <Timestamp />
//         <h1>Python Data Types</h1>
//         <p>Python has several built-in data types, including:</p>
//         <ul>
//           <li><b>Numeric:</b> int, float, complex</li>
//           <li><b>Sequence:</b> list, tuple, range</li>
//           <li><b>Text:</b> str</li>
//           <li><b>Mapping:</b> dict</li>
//           <li><b>Set:</b> set, frozenset</li>
//           <li><b>Boolean:</b> bool</li>
//         </ul>
//         <h2>Example:</h2>
//         <SyntaxHighlighter language="python" style={coy}>
//           {`# Different data types
// x = 5          # int
// y = 3.14       # float
// z = "Python"   # str
// lst = [1, 2, 3] # list
// d = {"key": "value"} # dict
// `}
//         </SyntaxHighlighter>
//       </div>
//     ),
//     "Control Structures": (
//   <div>
//     <Timestamp />
//     <h1>Control Structures in Python</h1>
//     <p>
//       Python provides various control structures like conditional statements and loops to control the flow of the program. These structures help execute different code blocks based on certain conditions or repeat code execution.
//     </p>
//     <h2>Conditional Statements:</h2>
//     <p>
//       Conditional statements are used to execute code selectively based on certain conditions.
//     </p>
//     <SyntaxHighlighter language="python" style={coy}>
//       {`# If-Else Example
// x = 10
// if x > 5:
//     print("x is greater than 5")
// else:
//     print("x is 5 or less")`}
//     </SyntaxHighlighter>
//     <h3>Elif Statement:</h3>
//     <SyntaxHighlighter language="python" style={coy}>
//       {`# Elif Example
// x = 15
// if x < 10:
//     print("x is less than 10")
// elif x < 20:
//     print("x is between 10 and 20")
// else:
//     print("x is 20 or more")`}
//     </SyntaxHighlighter>
//     <h3>Nested If:</h3>
//     <SyntaxHighlighter language="python" style={coy}>
//       {`# Nested If Example
// x = 10
// if x > 5:
//     if x % 2 == 0:
//         print("x is even and greater than 5")`}
//     </SyntaxHighlighter>
//     <h2>Loops:</h2>
//     <p>
//       Loops are used to execute a block of code multiple times. Python supports <code>for</code> and <code>while</code> loops.
//     </p>
//     <h3>For Loop:</h3>
//     <SyntaxHighlighter language="python" style={coy}>
//       {`# For Loop Example
// for i in range(5):
//     print(i)`}
//     </SyntaxHighlighter>
//     <p>
//       The <code>range</code> function generates a sequence of numbers, which can be used to iterate in a loop.
//     </p>
//     <h3>While Loop:</h3>
//     <SyntaxHighlighter language="python" style={coy}>
//       {`# While Loop Example
// count = 0
// while count < 5:
//     print(count)
//     count += 1`}
//     </SyntaxHighlighter>
//     <h3>Break and Continue:</h3>
//     <p>
//       The <code>break</code> statement is used to exit a loop prematurely, while <code>continue</code> skips the rest of the code in the current iteration and moves to the next iteration.
//     </p>
//     <SyntaxHighlighter language="python" style={coy}>
//       {`# Break and Continue Example
// for i in range(5):
//     if i == 3:
//         break
//     print(i)

// for i in range(5):
//     if i == 3:
//         continue
//     print(i)`}
//     </SyntaxHighlighter>
//     <h2>Conclusion:</h2>
//     <p>
//       Control structures like conditional statements and loops are fundamental to creating dynamic and efficient Python programs. Understanding and using them effectively can significantly enhance your coding skills.
//     </p>
//   </div>
// )
// ,
//     "Functions": (
//   <div>
//     <Timestamp />
//     <h1>Functions in Python</h1>
//     <p>
//       Functions are blocks of reusable code that perform a specific task. Functions are defined using the <code>def</code> keyword and can accept parameters to process values.
//     </p>
//     <h2>Function Example:</h2>
//     <SyntaxHighlighter language="python" style={coy}>
//       {`# Function Example
// def greet(name):
//     return f"Hello, {name}!"

// print(greet("Alice"))  # Output: Hello, Alice!`}
//     </SyntaxHighlighter>
//     <p>
//       In this example, the function <code>greet</code> accepts a parameter <code>name</code> and returns a formatted greeting message.
//     </p>
//     <h2>Default Arguments:</h2>
//     <p>
//       Functions in Python can have default values for arguments. If the caller doesn't provide a value, the default value will be used.
//     </p>
//     <SyntaxHighlighter language="python" style={coy}>
//       {`# Function with Default Argument
// def greet(name="Guest"):
//     return f"Hello, {name}!"

// print(greet())         # Output: Hello, Guest!
// print(greet("Alice"))  # Output: Hello, Alice!`}
//     </SyntaxHighlighter>
//     <h2>Return Values:</h2>
//     <p>
//       A function can return a value using the <code>return</code> statement. If no return value is specified, Python returns <code>None</code> by default.
//     </p>
//     <SyntaxHighlighter language="python" style={coy}>
//       {`# Function with Return Value
// def add(a, b):
//     return a + b

// result = add(5, 3)
// print(result)  # Output: 8`}
//     </SyntaxHighlighter>
//     <h2>Lambda Functions:</h2>
//     <p>
//       Lambda functions are small anonymous functions defined using the <code>lambda</code> keyword. They are often used for short, throwaway functions.
//     </p>
//     <SyntaxHighlighter language="python" style={coy}>
//       {`# Lambda Function Example
// add = lambda a, b: a + b
// print(add(5, 3))  # Output: 8`}
//     </SyntaxHighlighter>
//   </div>
// ),

// "Classes and Objects": (
//   <div>
//     <Timestamp />
//     <h1>Classes and Objects in Python</h1>
//     <p>
//       Python supports Object-Oriented Programming (OOP). Classes are blueprints for creating objects, which are instances of classes. A class defines attributes (variables) and methods (functions) that the object can use.
//     </p>
//     <h2>Class Example:</h2>
//     <SyntaxHighlighter language="python" style={coy}>
//       {`# Class and Object Example
// class Person:
//     def __init__(self, name, age):
//         self.name = name
//         self.age = age

//     def greet(self):
//         return f"Hello, my name is {self.name} and I am {self.age} years old."

// person1 = Person("Alice", 25)
// print(person1.greet())  # Output: Hello, my name is Alice and I am 25 years old.`}
//     </SyntaxHighlighter>
//     <p>
//       In this example, the <code>Person</code> class has an initializer method <code>__init__</code> that sets the initial values of the <code>name</code> and <code>age</code> attributes. The <code>greet</code> method is used to return a greeting message.
//     </p>
//     <h2>Instance and Class Variables:</h2>
//     <p>
//       Instance variables are specific to an object, while class variables are shared across all instances of a class.
//     </p>
//     <SyntaxHighlighter language="python" style={coy}>
//       {`# Class and Instance Variables
// class Dog:
//     species = "Canine"  # Class variable

//     def __init__(self, name, age):
//         self.name = name  # Instance variable
//         self.age = age  # Instance variable

// dog1 = Dog("Buddy", 4)
// dog2 = Dog("Max", 7)

// print(dog1.species)  # Output: Canine
// print(dog2.name)     # Output: Max`}
//     </SyntaxHighlighter>
//     <h2>Inheritance:</h2>
//     <p>
//       Inheritance allows a new class to take on properties and methods of an existing class. The new class is called a subclass, and the existing class is called a superclass.
//     </p>
//     <SyntaxHighlighter language="python" style={coy}>
//       {`# Inheritance Example
// class Animal:
//     def speak(self):
//         print("Animal speaks")

// class Dog(Animal):
//     def speak(self):
//         print("Woof! Woof!")

// dog = Dog()
// dog.speak()  # Output: Woof! Woof!`}
//     </SyntaxHighlighter>
//   </div>
// )

//   };

//   return (
//     <div>
//       {/* <Timestamp /> */}
//       {content[topic] || (
//         <p style={{ color: 'red' }}>Topic not found. Please select a valid topic.</p>
//       )}
//     </div>
//   );
// };

// // Prop validation
// Python.propTypes = {
//   topic: PropTypes.string.isRequired,
// };

// export default Python;


import React from 'react';
import Timestamp from '../Timestamp';

// For code snippets
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

// For prop validation
import PropTypes from 'prop-types';

const Python = ({ topic }) => {
  const content = {
    "Introduction to Python": (
      <div className="notes-container">
        <Timestamp />
        <h1>Introduction to Python</h1>
        <p>
          Python is a high-level, interpreted programming language known for its simplicity.
        </p>
        <h2>Key Features</h2>
        <ul>
          <li>Easy to learn and use</li>
          <li>Extensive standard libraries</li>
          <li>Supports multiple programming paradigms</li>
        </ul>
        <h2>Basic Syntax</h2>
        <SyntaxHighlighter language="python" style={coy}>
          {`print("Hello, World!")\nname = "Alice"\nprint(f"Hello, {name}")`}
        </SyntaxHighlighter>
      </div>
    ),
    // More Python topics like "Data Types", "Functions", "OOP in Python"
  };

  return <div>{content[topic] || <p style={{ color: 'red' }}>Topic not found.</p>}</div>;
};

Python.propTypes = {
  topic: PropTypes.string.isRequired,
};

export default Python;
