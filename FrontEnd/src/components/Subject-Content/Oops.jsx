// import React from 'react';
// import Timestamp from '../Timestamp'; // Component for showing the timestamp

// // For code snippets
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

// // For prop validation
// import PropTypes from 'prop-types';

// const Oops = ({ topic }) => {
//   const content = {
//    "Introduction to OOP": (
//   <div>
//     <Timestamp />
//     <h1>What is Object-Oriented Programming (OOP)?</h1>
//     <p>
//       Object-Oriented Programming (OOP) is a programming paradigm that uses the concept of "objects". An object is an instance of a class, and it can contain data in the form of fields (also known as attributes or properties) and methods (functions or behaviors). OOP helps to model real-world scenarios in a more structured and modular way, making it easier to write, maintain, and scale large programs.
//     </p>
//     <p>
//       OOP is widely used in many programming languages, including Java, Python, C++, and JavaScript. It allows developers to organize code into logical structures that can be reused and extended, leading to more efficient development and less code duplication.
//     </p>
//     <h2>Key Concepts of OOP:</h2>
//     <ul>
//       <li><b>Encapsulation:</b> Encapsulation is the concept of bundling data (attributes) and methods (functions) that operate on the data within one unit, usually a class. This allows you to restrict direct access to some of the object's components and ensures data integrity. Access to the data is provided through methods, often called getters and setters, which control how data is accessed or modified.</li>
//       <li><b>Inheritance:</b> Inheritance allows one class (child class) to inherit the properties and methods of another class (parent class). This promotes code reuse and helps establish a relationship between the parent and child classes. The child class can also override or extend the functionality of the parent class as needed.</li>
//       <li><b>Polymorphism:</b> Polymorphism allows objects of different classes to be treated as objects of a common superclass. This means that you can use a single interface (method or function) to represent different underlying forms (objects). Polymorphism can be achieved through method overriding or method overloading.</li>
//       <li><b>Abstraction:</b> Abstraction is the concept of hiding the internal workings of an object and exposing only the essential features. This allows a programmer to interact with the object at a higher level without worrying about the underlying implementation details. Abstraction is implemented using abstract classes and interfaces in some languages.</li>
//     </ul>
//     <p>
//       OOP provides a powerful way to structure software by organizing it into logical units and minimizing complexity through encapsulation, inheritance, polymorphism, and abstraction.
//     </p>
//   </div>
// ),
// "Classes and Objects": (
//   <div>
//     <Timestamp />
//     <h1>Classes and Objects</h1>
//     <p>
//       A class is essentially a blueprint or template for creating objects (instances). It defines the properties (attributes) and methods (functions) that the objects created from it will have. Objects are the actual instances of a class, and they contain real values for the properties defined in the class.
//     </p>
//     <p>
//       In most object-oriented programming languages, a class defines both the structure and behavior of the objects. When an object is created from a class, it is said to be an "instance" of that class.
//     </p>
//     <h2>Example:</h2>
//     <SyntaxHighlighter language="javascript" style={coy}>
//       {`// Defining a class
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     return \`Hello, \${this.name}!\`;
//   }
// }

// // Creating an object (instance of the class)
// const person1 = new Person("Alice", 25);
// console.log(person1.greet()); // Output: Hello, Alice!`}
//     </SyntaxHighlighter>
//     <p>
//       In the example above, the <code>Person</code> class defines two attributes: <code>name</code> and <code>age</code>, and one method: <code>greet</code>. The <code>Person</code> class is used to create an object, <code>person1</code>, with specific values for <code>name</code> and <code>age</code>. The method <code>greet</code> is then called on the object <code>person1</code>, and it prints a personalized greeting.
//     </p>
//     <p>
//       Classes are used to model real-world entities in a more organized and modular way. By defining attributes and behaviors in a class, we can easily create multiple instances (objects) with different attributes. Each object has its own set of data, but they all share the same structure and behavior as defined in the class.
//     </p>
//   </div>
// )
// ,
//     "Encapsulation": (
//   <div>
//     <Timestamp />
//     <h1>Encapsulation</h1>
//     <p>
//       Encapsulation is one of the core principles of Object-Oriented Programming (OOP). It refers to the technique of hiding the internal state of an object and only allowing access to it through a well-defined set of methods. The goal is to protect the object's data from unintended or harmful modifications. By restricting access to certain properties and methods, encapsulation enhances data integrity, improves security, and reduces complexity.
//     </p>
//     <p>
//       In encapsulation, there are typically two main types of access control:
//     </p>
//     <ul>
//       <li><b>Private Data:</b> Data that is hidden and cannot be accessed directly from outside the object. The private data is accessed and modified only through methods that are specifically designed for those operations.</li>
//       <li><b>Public Methods:</b> Methods that provide controlled access to the private data. These methods allow external code to interact with the object in a controlled way without directly altering the object's internal state.</li>
//     </ul>
//     <h2>Why Encapsulation is Important:</h2>
//     <ul>
//       <li><b>Data Protection:</b> By hiding the internal data of an object, encapsulation prevents direct modification of sensitive attributes and protects them from unintended changes.</li>
//       <li><b>Modular Code:</b> Encapsulation allows developers to change or optimize the internal implementation of a class without affecting its external interface. This modularity makes code maintenance easier and less error-prone.</li>
//       <li><b>Abstraction:</b> Encapsulation enables abstraction by allowing only necessary information to be exposed to the outside world, keeping internal details hidden and simplifying the interface for users of the object.</li>
//     </ul>
//     <h2>Example:</h2>
//     <SyntaxHighlighter language="javascript" style={coy}>
//       {`class BankAccount {
//   #balance = 0; // private property

//   deposit(amount) {
//     if (amount > 0) {
//       this.#balance += amount;
//     }
//   }

//   getBalance() {
//     return this.#balance;
//   }
// }

// const account = new BankAccount();
// account.deposit(100);
// console.log(account.getBalance()); // Output: 100`}
//     </SyntaxHighlighter>
//     <p>
//       In the example above, the <code>BankAccount</code> class uses encapsulation to restrict direct access to the <code>#balance</code> property by marking it as private (using the <code>#</code> symbol). The only way to interact with this balance is through the <code>deposit</code> and <code>getBalance</code> methods. This ensures that the balance cannot be arbitrarily modified from outside the class and that it can only be increased via the <code>deposit</code> method, which performs validation.
//     </p>
//     <p>
//       Encapsulation can be implemented using private variables and getter/setter methods in languages that support them. In JavaScript, as shown in the example, private class fields are indicated by the <code>#</code> symbol. Other programming languages, such as Java or C++, use keywords like <code>private</code> and <code>protected</code> to define the visibility of attributes and methods within a class.
//     </p>
//     <h2>Best Practices for Encapsulation:</h2>
//     <ul>
//       <li><b>Keep Data Private:</b> Whenever possible, make class properties private and provide public getter and setter methods to access or modify them. This ensures that the internal state of the object cannot be tampered with directly.</li>
//       <li><b>Validate Inputs:</b> Use setter methods or functions to perform validation on the data before modifying any private properties. For example, in the <code>deposit</code> method of the <code>BankAccount</code> class, validation is performed to ensure that only positive amounts are added to the balance.</li>
//       <li><b>Expose Essential Information:</b> Only expose methods that provide essential functionality for interacting with the object. This keeps the class interface simple and easy to use.</li>
//     </ul>
//     <p>
//       Encapsulation is a key part of creating clean, maintainable, and secure code. By hiding an object's internal details and allowing controlled access to its data, encapsulation enhances the modularity, flexibility, and robustness of your software.
//     </p>
//   </div>
// )
// ,
//     "Inheritance": (
//   <div>
//     <Timestamp />
//     <h1>Inheritance</h1>
//     <p>
//       Inheritance is one of the four fundamental principles of Object-Oriented Programming (OOP). It allows a class (child class or subclass) to inherit properties and methods from another class (parent class or superclass). This not only promotes code reuse but also helps in organizing and managing large codebases by establishing a clear hierarchy of classes. Inheritance creates a relationship between classes, enabling child classes to extend the functionality of parent classes while maintaining the base features.
//     </p>
//     <h2>How Inheritance Works:</h2>
//     <p>
//       The child class inherits all the public and protected properties and methods of the parent class, and it can also define its own unique properties and methods. However, the child class can also override the inherited methods from the parent class to provide more specific or customized behavior. This allows for flexibility and adaptability in your code.
//     </p>
//     <h2>Why Use Inheritance?</h2>
//     <ul>
//       <li><b>Code Reusability:</b> Inheritance promotes the reuse of common code, preventing the need for duplicating functionality across multiple classes.</li>
//       <li><b>Extensibility:</b> It allows you to extend the functionality of a class without modifying its original implementation. This makes the code easier to maintain and update.</li>
//       <li><b>Organizing Code:</b> It creates a natural hierarchy between classes, making the code more understandable and manageable, especially in large projects.</li>
//     </ul>
//     <h2>Types of Inheritance:</h2>
//     <ul>
//       <li><b>Single Inheritance:</b> A class inherits from only one parent class. This is the most basic form of inheritance and is supported by many programming languages, including JavaScript.</li>
//       <li><b>Multiple Inheritance:</b> A class can inherit from more than one parent class. This is not directly supported by JavaScript but can be achieved through mixins or other design patterns. Some other languages like Python support multiple inheritance.</li>
//       <li><b>Multilevel Inheritance:</b> A class inherits from a parent class, and then another class inherits from the child class. This creates a chain of inheritance.</li>
//       <li><b>Hierarchical Inheritance:</b> Multiple child classes inherit from a single parent class. This is useful when several classes share common behavior.</li>
//     </ul>
//     <h2>Example:</h2>
//     <SyntaxHighlighter language="javascript" style={coy}>
//       {`// Parent Class
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(\`\${this.name} makes a sound.\`);
//   }
// }

// // Child Class
// class Dog extends Animal {
//   speak() {
//     console.log(\`\${this.name} barks.\`);
//   }
// }

// const dog = new Dog("Rex");
// dog.speak(); // Output: Rex barks.`}
//     </SyntaxHighlighter>
//     <p>
//       In this example, the <code>Dog</code> class is a child of the <code>Animal</code> class. The <code>Dog</code> class inherits the <code>speak</code> method from the parent class but overrides it to provide its own behavior. The child class <code>Dog</code> calls the inherited constructor from the parent class <code>Animal</code> to initialize the <code>name</code> property.
//     </p>
//     <h2>Overriding Methods:</h2>
//     <p>
//       When a child class defines a method with the same name as a method in the parent class, it overrides the parent class method. This allows the child class to implement specific behavior while still inheriting the functionality from the parent class. Overriding methods is a key feature of inheritance and provides flexibility in designing object-oriented systems.
//     </p>
//     <h2>Example of Overriding Methods:</h2>
//     <SyntaxHighlighter language="javascript" style={coy}>
//       {`// Parent Class
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(\`\${this.name} makes a sound.\`);
//   }
// }

// // Child Class
// class Dog extends Animal {
//   speak() {
//     console.log(\`\${this.name} barks.\`);
//   }
// }

// // Another Child Class
// class Cat extends Animal {
//   speak() {
//     console.log(\`\${this.name} meows.\`);
//   }
// }

// const dog = new Dog("Rex");
// const cat = new Cat("Whiskers");

// dog.speak(); // Output: Rex barks.
// cat.speak(); // Output: Whiskers meows.`}
//     </SyntaxHighlighter>
//     <p>
//       In this example, both the <code>Dog</code> and <code>Cat</code> classes override the <code>speak</code> method to provide their own behavior, while still inheriting the <code>name</code> property from the <code>Animal</code> class. Each class has a specific implementation of the <code>speak</code> method, demonstrating how inheritance can be combined with method overriding to create flexible and reusable code.
//     </p>
//     <h2>Best Practices for Inheritance:</h2>
//     <ul>
//       <li><b>Avoid Overusing Inheritance:</b> While inheritance is powerful, overusing it can lead to complex and difficult-to-maintain code. In some cases, composition (including one object within another) might be a better choice.</li>
//       <li><b>Use Polymorphism:</b> When using inheritance, polymorphism allows you to treat objects of different classes in a uniform way, as long as they implement the same interface or method signature.</li>
//       <li><b>Encapsulate Inherited Behavior:</b> Use encapsulation to ensure that inherited behaviors do not expose sensitive details of the parent class. This helps in protecting the integrity of the parent class's functionality.</li>
//     </ul>
//     <p>
//       Inheritance, when used correctly, can be a powerful tool in creating structured, reusable, and maintainable code. It helps in building a hierarchy of classes where common behaviors are inherited, reducing redundancy and ensuring that changes to the parent class are automatically reflected in the child classes.
//     </p>
//   </div>
// )
// ,
//     "Polymorphism": (
//       <div>
//          <Timestamp />
//         <h1>Polymorphism</h1>
//         <p>
//           Polymorphism allows objects of different classes to be treated as objects of a common superclass. The behavior of polymorphic objects can be defined differently depending on the class type.
//         </p>
//         <h2>Example:</h2>
//         <SyntaxHighlighter language="javascript" style={coy}>
//           {`class Shape {
//   draw() {
//     console.log("Drawing a shape");
//   }
// }

// class Circle extends Shape {
//   draw() {
//     console.log("Drawing a circle");
//   }
// }

// class Square extends Shape {
//   draw() {
//     console.log("Drawing a square");
//   }
// }

// const shapes = [new Circle(), new Square()];

// shapes.forEach(shape => shape.draw()); // Output: Drawing a circle, Drawing a square`}
//         </SyntaxHighlighter>
//       </div>
//     ),
//     "Abstraction": (
//       <div>
//          <Timestamp />
//         <h1>Abstraction</h1>
//         <p>
//           Abstraction allows the user to focus on essential features while hiding unnecessary implementation details. It can be achieved using abstract classes or interfaces in JavaScript.
//         </p>
//         <h2>Example:</h2>
//         <SyntaxHighlighter language="javascript" style={coy}>
//           {`// Abstract Class
// class Vehicle {
//   constructor(brand) {
//     this.brand = brand;
//   }

//   // Abstract method
//   start() {
//     throw new Error("Method 'start()' must be implemented.");
//   }
// }

// class Car extends Vehicle {
//   start() {
//     console.log(\`\${this.brand} car starts.\`);
//   }
// }

// const car = new Car("Toyota");
// car.start(); // Output: Toyota car starts.`}
//         </SyntaxHighlighter>
//       </div>
//     )
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
// Oops.propTypes = {
//   topic: PropTypes.string.isRequired,
// };

// export default Oops;


import React from 'react';
import Timestamp from '../Timestamp';

// For code snippets
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

// For prop validation
import PropTypes from 'prop-types';

const Oops = ({ topic }) => {
  const content = {
    "Introduction to OOP": (
      <div className="notes-container">
        <Timestamp />
        <h1>Introduction to Object-Oriented Programming</h1>
        <p>
          OOP is a programming paradigm that organizes software design around data and objects.
        </p>
        <h2>Four Pillars of OOP</h2>
        <ul>
          <li><b>Encapsulation:</b> Restricting direct access to data.</li>
          <li><b>Inheritance:</b> Enabling code reusability.</li>
          <li><b>Polymorphism:</b> Same interface, different implementations.</li>
          <li><b>Abstraction:</b> Hiding complex implementation details.</li>
        </ul>
      </div>
    ),
    // More OOP topics like "Classes and Objects", "Encapsulation", etc.
  };

  return <div>{content[topic] || <p style={{ color: 'red' }}>Topic not found.</p>}</div>;
};

Oops.propTypes = {
  topic: PropTypes.string.isRequired,
};

export default Oops;

