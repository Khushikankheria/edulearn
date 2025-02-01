import React from 'react';
import Timestamp from '../Timestamp'; // Component for showing the timestamp
import "../../Css/SubStyle.css";
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

// For prop validation
import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const Cpp = ({ topic }) => {
  const content = {
    "Introduction to C++": (
      <div className="content">
        <div className="timestamp" style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#555' }}>
          <Timestamp />
        </div>

        <h2 className="heading" style={{ color: '#1a1a1a', borderBottom: '3px solid #333' }}>
          What is C++?
        </h2>
        <p className="text"style={{ fontFamily: 'Open Sans, sans-serif' }}>
          C++ is a cross-platform programming language primarily used for developing high-performance applications. It was created by Bjarne Stroustrup in 1979 as an extension to the C programming language, adding object-oriented features like classes and objects.
        </p>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190430122723/cpp-program-compilation3-1024x375.png"
            alt="C++ flowchart"
            style={{
              maxWidth: "100%",
              width: "500px",
              margin: "auto",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          />
        </div>

        <h2 className="heading" style={{ color: '#1a1a1a', borderBottom: '3px solid #FFD700' }}>
          C++ Syntax Basics
        </h2>
        <p className="text" style={{ fontFamily: 'Open Sans, sans-serif' }}>Here's a simple C++ program demonstrating basic syntax:</p>

        <div className="snippet-container">
          <SyntaxHighlighter language="cpp" style={coy}>
            {`
#include <iostream>
using namespace std;

class HelloWorld {
public:
    void displayMessage() {
        cout << "Hello, World!" << endl;
    }
};

int main() {
    HelloWorld obj;
    obj.displayMessage();
    return 0;
}
            `}
          </SyntaxHighlighter>
        </div>

        <h2 className="heading" style={{ color: '#1a1a1a', borderBottom: '3px solid #FFD700' }}>
          Why Use C++?
        </h2>
        <ul className="list">
          <li>Widely used in operating systems, GUIs, and embedded systems.</li>
          <li>Offers object-oriented programming features for clear and reusable code.</li>
          <li>Highly portable across platforms.</li>
          <li>Fun and relatively easy to learn for those familiar with languages like C, C#, or Java.</li>
        </ul>

        <h2 className="heading" style={{ color: '#1a1a1a', borderBottom: '3px solid #FFD700' }}>
          Key Features of C++
        </h2>
        <ul className="list">
          <li>
            <strong>Object-Oriented Programming (OOP):</strong> C++ supports concepts like classes, objects, inheritance, polymorphism, encapsulation, and abstraction.
          </li>
          <li>
            <strong>Low-Level Manipulation:</strong> Offers access to low-level memory manipulation through pointers.
          </li>
          <li>
            <strong>Standard Template Library (STL):</strong> Provides a rich set of template-based libraries for data structures and algorithms, like vectors, lists, stacks, queues, and maps.
          </li>
          <li>
            <strong>Multi-Paradigm:</strong> Supports procedural, functional, and object-oriented programming styles.
          </li>
        </ul>

        <h2 className="heading" style={{ color: '#1a1a1a', borderBottom: '3px solid #FFD700' }}>
          Basic C++ Concepts
        </h2>
        <ul className="list">
          <li><strong>Variables and Data Types:</strong> C++ supports several data types like int, float, char, and bool. You can also define your custom types using classes.</li>
          <li><strong>Control Structures:</strong> Includes conditional statements (if, else, switch) and loops (for, while, do-while) to control the flow of the program.</li>
          <li><strong>Functions:</strong> Functions are blocks of code that can be called to perform specific tasks. C++ allows function overloading and default arguments.</li>
          <li><strong>Memory Management:</strong> C++ allows direct memory manipulation using pointers, which can enhance performance but also adds complexity.</li>
        </ul>

        <h2 className="heading" style={{ color: '#1a1a1a', borderBottom: '3px solid #FFD700' }}>
          C++ in Modern Development
        </h2>
        <p className="text" style={{ fontFamily: 'Open Sans, sans-serif' }}>
          C++ is used extensively in areas where performance is critical. It powers everything from game engines, operating systems, to real-time systems like robotics. Some of the most well-known game engines, such as Unreal Engine, are built using C++ due to its speed and low-level system control.
        </p>

        <h2 className="heading" style={{ color: '#1a1a1a', borderBottom: '3px solid #FFD700' }}>
          Conclusion
        </h2>
        <p className="text" style={{ fontFamily: 'Open Sans, sans-serif' }}>
          C++ remains a powerful and versatile programming language, offering unparalleled control and performance. While it has its challenges, mastering C++ provides a strong foundation for developing robust and efficient applications in a wide range of domains, from embedded systems to complex software applications.
        </p>
      </div>
    ),

"Data Types": (
<div className="data-types-section">
<div className="timestamp" style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#555' }}>
          <Timestamp />
        </div>
        <h2 className="heading" style={{ color: '#1a1a1a', borderBottom: '3px solid #333' }}>
          DATA TYPES IN C++
        </h2>
      <p style={{ fontFamily:'arial' }}>
        Data types define the type of data a variable can hold. C++ includes:
      </p>
      <table style={{ borderCollapse: "collapse", maxWidth: "fit-content" }}>
        <thead>
          <tr>
            <th
              style={{
                border: "1px solid black",
                padding: "8px",
                textAlign: "left",
              }}
            >
              Data Type
            </th>
            <th
              style={{
                border: "1px solid black",
                padding: "8px",
                textAlign: "left",
              }}
            >
              Size
            </th>
            <th
              style={{
                border: "1px solid black",
                padding: "8px",
                textAlign: "left",
              }}
            >
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>int</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              2 or 4 bytes
            </td>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              Stores whole numbers, without decimals
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>float</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>4 bytes</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              Stores fractional numbers, containing one or more decimals
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>double</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>8 bytes</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              Stores fractional numbers, containing one or more decimals
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>char</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>1 byte</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              Stores a single character/letter/number, or ASCII values
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>boolean</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>1 byte</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              Stores true or false values
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <ul>
        <li>
          <b>int:</b> For integers (e.g., 1, -2).
        </li>
        <li>
          <b>float:</b> For decimal numbers (e.g., 3.14).
        </li>
        <li>
          <b>double:</b> For large floating-point numbers (e.g., 3.141592653).
        </li>
        <li>
          <b>char:</b> For single characters (e.g., 'A').
        </li>
        <li>
          <b>bool:</b> For boolean values (<code>true</code> or <code>false</code>).
        </li>
        <li>
          <b>string:</b> For sequences of characters (e.g., "Hello").
        </li>
        <li>
          <b>long:</b> For extended-range integers (e.g., 123456789L).
        </li>
        <li>
          <b>short:</b> For smaller range integers (e.g., 32767).
        </li>
        <li>
          <b>unsigned:</b> For non-negative integers only (e.g., 0 to 65535).
        </li>
      </ul>

        
      <h3>Primitive Data Types Example:</h3>
      <div className="snippet-container">
          <SyntaxHighlighter language="cpp" style={coy}>

        {`#include <iostream>
using namespace std;

int main() {
    int number = 42;
    float pi = 3.14;
    double largeNumber = 1.23456789;
    char letter = 'C';
    bool isCorrect = true;

    cout << "Number: " << number << endl;
    cout << "Pi: " << pi << endl;
    cout << "Large Number: " << largeNumber << endl;
    cout << "Letter: " << letter << endl;
    cout << "Is Correct: " << isCorrect << endl;

    return 0;
}`}

</SyntaxHighlighter>
</div>
      <h3>Strings Example:</h3>
      <div className="snippet-container">
          <SyntaxHighlighter language="cpp" style={coy}>
        {`#include <iostream>
#include <string>
using namespace std;

int main() {
    string greeting = "Hello, World!";
    cout << "Greeting: " << greeting << endl;

    string firstName = "John";
    string lastName = "Doe";
    string fullName = firstName + " " + lastName;
    cout << "Full Name: " << fullName << endl;

    return 0;
}`}
</SyntaxHighlighter>
</div>

      <h3>Size of Data Types:</h3>
      <div className="snippet-container">
      <SyntaxHighlighter language="cpp" style={coy}>
        {`#include <iostream>
using namespace std;

int main() {
    cout << "Size of int: " << sizeof(int) << " bytes" << endl;
    cout << "Size of float: " << sizeof(float) << " bytes" << endl;
    cout << "Size of double: " << sizeof(double) << " bytes" << endl;
    cout << "Size of char: " << sizeof(char) << " byte" << endl;
    cout << "Size of bool: " << sizeof(bool) << " byte" << endl;

    return 0;
}`}

      </SyntaxHighlighter>
</div>
      <h3>Explanation:</h3>
      <p>
        <b>Primitive Data Types:</b> Cover basic types like <code>int</code>, <code>float</code>, and <code>char</code>. <br />
        <b>Strings:</b> A <code>string</code> in C++ is part of the Standard Template Library (STL). You can concatenate strings using the <code>+</code> operator. <br />
        <b>Size of Data Types:</b> The <code>sizeof()</code> operator returns the size of a type in bytes, which may vary by system.
      </p>

      <h3>Working with Constants:</h3>
      <div className="snippet-container">
      <SyntaxHighlighter language="cpp" style={coy}>
        {`#include <iostream>
using namespace std;

int main() {
    const float PI = 3.14159;
    cout << "The value of PI is: " << PI << endl;

    // Uncommenting the following line will cause a compilation error:
    // PI = 3.14;

    return 0;
    }`}
      </SyntaxHighlighter>
    </div>
      <h3>Explanation:</h3>
      <p>
        <b>Constants:</b> Declared using the <code>const</code> keyword. They cannot be changed once initialized. <br />
        Constants help prevent accidental changes to critical values in a program.
      </p>
    </div>

)
,
    "Functions": (
      <div className='data-types-section'>
        <div className="timestamp" style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#555' }}>
          <Timestamp />
        </div>
        <h1 className='heading'>Functions in C++</h1>
        <p style={{fontFamily:"arial"}}>
          A function is a block of code that performs a specific task. Functions help organize and
          reuse code efficiently.
        </p>
        <br/>
  <div style={{ textAlign: "center" }}>
      <img src="https://media.geeksforgeeks.org/wp-content/uploads/20220719123136/FunctionPrototypeincppmin-660x330.png" alt="C++ flowchart" style={{ width: '100%', maxWidth: '500px',margin:"auto"}} />
  </div>
  <br/> 
        <h2>Types of Functions:</h2>
        <ul>
          <li style={{fontFamily:"arial"}}><b>Built-in functions:</b> Provided by libraries (e.g., <code>sqrt()</code>, <code>abs()</code>).</li>
          <li><b>User-defined functions:</b> Created by the programmer.</li>
        </ul>
        <h3>Example of a User-Defined Function:</h3>
      <div className="snippet-container">
        <SyntaxHighlighter language="cpp" style={coy}>
          {`#include <iostream>
using namespace std;

// Function Declaration
int add(int a, int b) {
    return a + b;
}

int main() {
    int num1 = 5, num2 = 10;
    cout << "Sum: " << add(num1, num2) << endl;
    return 0;
}`}
        </SyntaxHighlighter>
</div>
        <h3>Explanation:</h3>
        <p>
          <b  style={{fontFamily:"arial"}}>Function Declaration:</b> <code>int add(int a, int b)</code> declares a function that takes two integers and returns their sum.<br />
          <b  style={{fontFamily:"arial"}}>Function Call:</b> <code>add(num1, num2)</code> passes the values to the function.
        </p>

        <h2>Call by Value vs Call by Reference</h2>
  <table style={{ border: "1px solid black", borderCollapse: "collapse", width: "100%" }}>
    <thead>
      <tr>
        <th style={{ border: "1px solid black", padding: "8px", textAlign: "left" }}>Call by Value</th>
        <th style={{ border: "1px solid black", padding: "8px", textAlign: "left" }}>Call by Reference</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ border: "1px solid black", padding: "8px" }}>A copy of the value is passed to the function</td>
        <td style={{ border: "1px solid black", padding: "8px" }}>An address of value is passed to the function</td>
      </tr>
      <tr>
        <td style={{ border: "1px solid black", padding: "8px" }}>
          Changes made inside the function are not reflected on other functions
        </td>
        <td style={{ border: "1px solid black", padding: "8px" }}>
          Changes made inside the function are reflected outside the function as well
        </td>
      </tr>
      <tr>
        <td style={{ border: "1px solid black", padding: "8px" }}>
          Actual and formal arguments will be created at different memory locations
        </td>
        <td style={{ border: "1px solid black", padding: "8px" }}>
          Actual and formal arguments will be created at the same memory location
        </td>
      </tr>
    </tbody>
  </table>
        
      </div>
    ),
  "Object-Oriented Programming": (
  <div className='data-types-section'>
    <div className="timestamp" style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#555' }}>
          <Timestamp />
        </div>
    <h1 className='heading'>Object-Oriented Programming in C++</h1>
    <p style={{fontFamily:"arial"}}>
      OOP is a paradigm that organizes code using objects, which are instances of classes. It provides a structured approach to software development by focusing on objects and their interactions.
    </p>
    <br/>
  <div style={{ textAlign: "center" }}>
      <img src="https://media.geeksforgeeks.org/wp-content/uploads/OOPs-Concepts.jpg" alt="oops" style={{ width: '100%',height:"22rem", maxWidth: '500px',margin:"auto",className:"responsive-image"}} />
  </div>
  <br/>
    <h2>1. Classes and Objects:</h2>
    <p>
      A <b>class</b> is a blueprint for creating objects. An <b>object</b> is an instance of a class, representing real-world entities.
    </p>
    <div className="snippet-container">
    <SyntaxHighlighter language="cpp" style={coy}>
      {`#include <iostream>
using namespace std;

class Car {
public:
    string brand;
    int year;

    void displayInfo() {
        cout << "Brand: " << brand << ", Year: " << year << endl;
    }
};

int main() {
    Car car1;
    car1.brand = "Toyota";
    car1.year = 2020;
    car1.displayInfo();

    return 0;
}`}
    </SyntaxHighlighter>
</div>
    <h2>2. Encapsulation:</h2>
    <p style={{fontFamily:"arial"}}>
      Encapsulation bundles data and methods together, restricting access using access specifiers (<code>public</code>, <code>private</code>, <code>protected</code>).
    </p>
    <br/>
  <div style={{ textAlign: "center" }}>
      <img src="https://media.geeksforgeeks.org/wp-content/uploads/Encapsulation-in-C-1.jpg" alt="oops" style={{ width: '100%',height:"17rem", maxWidth: '500px',margin:"auto"}} />
  </div>
  <br/>
  <div className="snippet-container">
    <SyntaxHighlighter language="cpp" style={coy}>
      {`#include <iostream>
using namespace std;

class BankAccount {
private:
    int balance;

public:
    BankAccount() : balance(0) {}

    void deposit(int amount) {
        balance += amount;
    }

    int getBalance() {
        return balance;
    }
};

int main() {
    BankAccount account;
    account.deposit(100);
    cout << "Balance: $" << account.getBalance() << endl;

    return 0;
}`}
    </SyntaxHighlighter>
    </div>
    <p>
      <b>Explanation:</b> The variable <code>balance</code> is private, so it can only be accessed and modified using public methods like <code>deposit</code> and <code>getBalance</code>.
    </p>

    <h2>3. Inheritance:</h2>
    <p>
      Inheritance allows one class (child class) to derive properties and methods from another class (parent class).
    </p>
    <br/>
  <div style={{ textAlign: "center" }}>
      <img src="https://media.geeksforgeeks.org/wp-content/uploads/20220817100609/inheritance-660x454.png" alt="oops" style={{ width: '100%',height:"18rem", maxWidth: '500px',margin:"auto"}} />
  </div>
  <br/>
  <div className="snippet-container">
    <SyntaxHighlighter language="cpp" style={coy}>
      {`#include <iostream>
using namespace std;

class Vehicle {
public:
    void startEngine() {
        cout << "Engine started" << endl;
    }
};

class Car : public Vehicle {
public:
    void drive() {
        cout << "Car is driving" << endl;
    }
};

int main() {
    Car myCar;
    myCar.startEngine(); // Inherited method
    myCar.drive();

    return 0;
}`}
    </SyntaxHighlighter>
    </div>
    <p>
      <b style={{fontFamily:"arial"}}>Explanation:</b> The <code>Car</code> class inherits the <code>startEngine</code> method from the <code>Vehicle</code> class.
    </p>

    <h2>4. Polymorphism:</h2>
    <p style={{fontFamily:"arial"}}>
      Polymorphism allows methods to have different behaviors based on the object or context.
    </p>
    <br/>
  <div style={{ textAlign: "center" }}>
      <img src="https://media.geeksforgeeks.org/wp-content/uploads/20220817100454/polymorphismexample-660x460.png" alt="oops" style={{ width: '100%',height:"19rem", maxWidth: '500px',margin:"auto"}} />
  </div>
  <br/>
    <h3>Example of Method Overriding:</h3>
    <div className="snippet-container">
    <SyntaxHighlighter language="cpp" style={coy}>
      {`#include <iostream>
using namespace std;

class Animal {
public:
    virtual void sound() {
        cout << "Animal makes a sound" << endl;
    }
};

class Dog : public Animal {
public:
    void sound() override {
        cout << "Dog barks" << endl;
    }
};

int main() {
    Animal* animal;
    Dog dog;

    animal = &dog;
    animal->sound(); // Calls the overridden method in Dog class

    return 0;
}`}
    </SyntaxHighlighter>
    </div>
    <p>
      <b>Explanation:</b> The <code>sound</code> method is overridden in the <code>Dog</code> class. The base class pointer calls the derived class's method due to polymorphism.
    </p>

    <h2 style={{fontFamily:"arial"}}>5. Abstraction:</h2>
    <p style={{fontFamily:"arial"}}>
      Abstraction hides implementation details and shows only essential features.
    </p>
    <br/>
  <div style={{ textAlign: "center" }}>
      <img src="https://media.geeksforgeeks.org/wp-content/uploads/20220927121207/AbstractioninC-282x300.png" alt="oops" style={{ width: '100%',height:"18rem", maxWidth: '500px',margin:"auto"}} />
  </div>
  <br/>
  <div className="snippet-container">
    <SyntaxHighlighter language="cpp" style={coy}>
      {`#include <iostream>
using namespace std;

class AbstractShape {
public:
    virtual void area() = 0; // Pure virtual function
};

class Rectangle : public AbstractShape {
public:
    void area() override {
        cout << "Area of Rectangle: length * breadth" << endl;
    }
};

int main() {
    Rectangle rect;
    rect.area();

    return 0;
}`}
    </SyntaxHighlighter>
    </div>
    <p>
      <b style={{fontFamily:"arial"}}>Explanation:</b> The <code style={{fontFamily:"arial"}}>AbstractShape</code> class defines a pure virtual function, making it an abstract class. Derived classes must implement the <code style={{fontFamily:"arial"}}>area</code> method.
    </p>

    <h2>6. Key Features of OOP:</h2>
    <ul>
      <li><b>Reusability:</b> Inheritance allows code reuse across multiple classes.</li>
      <li><b>Modularity:</b> Classes and objects make code easier to understand and manage.</li>
      <li><b>Security:</b> Encapsulation hides data from external access.</li>
    </ul>
  </div>
)
,
  "Control Structures": (
  <div className="data-types-section">
    <div className="timestamp" style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#555' }}>
          <Timestamp />
        </div>
    <h1 className='heading'>Control Structures</h1>
    <p style={{ fontFamily:'arial' }}>
      Control structures manage the flow of a program. Key types include:
    </p>
    <div style={{ textAlign: "center" }}>

    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240115114549/cpp-conditional-statements.webp" alt="decision making statments" style={{ width: '100%', maxWidth: '500px' }} />
    </div>
    
    <h2>1. Conditional Statements:</h2>
    <ul>
      <li><b>if:</b> Executes code if a condition is true.</li>
      <div style={{ textAlign: "center" }}>
      <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230310131453/flowchart-of-if-in-c.png" alt="if flowchart" style={{ width: '100%', maxWidth: '500px',margin:"auto"}} />
      </div>
      <br/>
      <li><b>if-else:</b> Executes one block if true, another if false.</li>
      <div style={{ textAlign: "center" }}>
      <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230220123250/flowchart_of_if_else_in_c.png" alt="if flowchart" style={{ width: '100%', maxWidth: '500px' }} />
      </div>
      <br/>
      <li><b>if-else if:</b> Allows multiple conditions.</li>
      <div style={{ textAlign: "center" }}>
      <img src="https://media.geeksforgeeks.org/wp-content/uploads/20231115161215/flowchart-of-if-else-if-in-c.png" alt="if flowchart" style={{ width: '100%', maxWidth: '500px' }} />
      </div>
      <br/>
      <li><b>switch:</b> Executes one block of code based on a specific value.</li>
      <div style={{ textAlign: "center" }}>
      <img src="https://media.geeksforgeeks.org/wp-content/uploads/20231115161034/flow-diagram-of-switch-in-c.png" alt="if flowchart" style={{ width: '100%', maxWidth: '500px' }} />
      </div>
    </ul>
    <div className="snippet-container">
          <SyntaxHighlighter language="cpp" style={coy}>
      {`#include <iostream>
using namespace std;

int main() {
    int number = 5;

    if (number > 0) {
        cout << "Positive number" << endl;
    } else if (number == 0) {
        cout << "Zero" << endl;
    } else {
        cout << "Negative number" << endl;
    }

    // Switch Example
    char grade = 'A';
    switch (grade) {
        case 'A':
            cout << "Excellent!" << endl;
            break;
        case 'B':
            cout << "Good" << endl;
            break;
        default:
            cout << "Needs Improvement" << endl;
    }

    return 0;
}`}
    </SyntaxHighlighter>
</div>
    <h2>2. Loops:</h2>
    <ul>
      <li><b>for:</b> Repeats code for a set number of times.</li>
      <li><b>while:</b> Repeats code while a condition is true.</li>
      <li><b>do-while:</b> Executes code at least once, then checks the condition.</li>
    </ul>
    <div className="snippet-container">
          <SyntaxHighlighter language="cpp" style={coy}>
      {`#include <iostream>
using namespace std;

int main() {
    // For loop
    for (int i = 0; i < 5; i++) {
        cout << "i = " << i << endl;
    }

    // While loop
    int count = 3;
    while (count > 0) {
        cout << "Count: " << count << endl;
        count--;
    }

    // Do-while loop
    int x = 0;
    do {
        cout << "This will run at least once!" << endl;
    } while (x != 0);

    return 0;
}`}
    </SyntaxHighlighter>
</div>
    <h2>3. Jump Statements:</h2>
    <ul>
      <li><b>break:</b> Exits a loop or switch.</li>
      <li><b>continue:</b> Skips the current iteration of a loop.</li>
      <li><b>goto:</b> Jumps to a labeled statement (not recommended for structured programming).</li>
    </ul>
    <div className="snippet-container">
    <SyntaxHighlighter language="cpp" style={coy}>
      {`#include <iostream>
using namespace std;

int main() {
    // Break example
    for (int i = 1; i <= 5; i++) {
        if (i == 3) break;
        cout << i << " ";
    }
    cout << endl;

    // Continue example
    for (int i = 1; i <= 5; i++) {
        if (i == 3) continue;
        cout << i << " ";
    }
    cout << endl;

    // Goto example
    int num = 1;
label:
    if (num <= 3) {
        cout << "Goto example, num = " << num << endl;
        num++;
        goto label;
    }

    return 0;
}`}
    </SyntaxHighlighter>
    </div>

    <h3>Explanation:</h3>
    <p>
      <b>Conditional Statements:</b> Enable decision-making based on conditions. The <code>switch</code> statement is an efficient alternative to multiple <code>if-else</code> blocks. <br />
      <b>Loops:</b> Allow repetitive execution. The <code>do-while</code> loop ensures the body executes at least once. <br />
      <b>Jump Statements:</b> Modify the flow of loops or switch statements. Use <code>goto</code> sparingly as it can make code hard to read and maintain.
    </p>
  </div>
)
,
    "Basic Syntax": (
      <div className="basic-syntax-container">
        <div className="timestamp" style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#555' }}>
          <Timestamp />
        </div>
      <h2 className="basic-syntax-heading">Basic Syntax</h2>
      <p className="basic-syntax-text">Here's an example of a simple C++ program:</p>
      <div className="syntax-snippet-container">
        <SyntaxHighlighter language="cpp" style={coy}>
          {`#include <iostream>
    int main() {
        std::cout << "Hello, World!";
        return 0;
    }`}
        </SyntaxHighlighter>
      </div>
      <h3 className="basic-syntax-subheading">Explanation:</h3>
      <p className="basic-syntax-text">
        <b>Line 1:</b> <code>#include &lt;iostream&gt;</code> includes the library for input/output. <br />
        <b>Line 2:</b> <code>int main()</code> is the program's entry point. <br />
        <b>Line 3:</b> <code>std::cout</code> prints "Hello, World!" to the screen. <br />
        <b>Line 4:</b> <code>return 0;</code> signals successful program termination.
      </p>
    
      <h3 className="basic-syntax-subheading">Basic Input/Output Example:</h3>
      <div className="syntax-snippet-container">
        <SyntaxHighlighter language="cpp" style={coy}>
          {`#include <iostream>
    using namespace std;
    
    int main() {
        int age;
        cout << "Enter your age: ";
        cin >> age;
        cout << "You are " << age << " years old.";
        return 0;
    }`}
        </SyntaxHighlighter>
      </div>
      <h3 className="basic-syntax-subheading">Explanation:</h3>
      <p className="basic-syntax-text">
        <b>Line 1:</b> <code>using namespace std;</code> allows you to use standard library names without prefixing with <code>std::</code>. <br />
        <b>Line 2:</b> <code>int age;</code> declares an integer variable. <br />
        <b>Line 3:</b> <code>cin</code> takes user input and stores it in the variable <code>age</code>. <br />
        <b>Line 4:</b> <code>cout</code> prints a message using the input value.
      </p>
    
      <h3 className="basic-syntax-subheading">Conditional Statements:</h3>
      <div className="syntax-snippet-container">
        <SyntaxHighlighter language="cpp" style={coy}>
          {`#include <iostream>
    using namespace std;
    
    int main() {
        int number;
        cout << "Enter a number: ";
        cin >> number;
    
        if (number > 0) {
            cout << "The number is positive.";
        } else if (number < 0) {
            cout << "The number is negative.";
        } else {
            cout << "The number is zero.";
        }
        return 0;
    }`}
        </SyntaxHighlighter>
      </div>
      <h3 className="basic-syntax-subheading">Explanation:</h3>
      <p className="basic-syntax-text">
        <b>Line 1:</b> <code>if</code> checks if the number is greater than 0. <br />
        <b>Line 2:</b> <code>else if</code> checks if the number is less than 0. <br />
        <b>Line 3:</b> <code>else</code> handles the case where the number is 0.
      </p>
    
      <h3 className="basic-syntax-subheading">Loops Example:</h3>
      <div className="syntax-snippet-container">
        <SyntaxHighlighter language="cpp" style={coy}>
          {`#include <iostream>
    using namespace std;
    
    int main() {
        for (int i = 1; i <= 5; i++) {
            cout << "Count: " << i << endl;
        }
        return 0;
    }`}
        </SyntaxHighlighter>
      </div>
      <h3 className="basic-syntax-subheading">Explanation:</h3>
      <p className="basic-syntax-text">
        <b>Line 1:</b> <code>for</code> loop iterates from 1 to 5. <br />
        <b>Line 2:</b> <code>cout</code> prints the current count in each iteration. <br />
        <b>Line 3:</b> <code>endl</code> inserts a newline after each output.
      </p>
    
      <h3 className="basic-syntax-subheading">Functions Example:</h3>
      <div className="syntax-snippet-container">
        <SyntaxHighlighter language="cpp" style={coy}>
          {`#include <iostream>
    using namespace std;
    
    int add(int a, int b) {
        return a + b;
    }
    
    int main() {
        int result = add(5, 3);
        cout << "The sum is: " << result;
        return 0;
    }`}
        </SyntaxHighlighter>
      </div>
      <h3 className="basic-syntax-subheading">Explanation:</h3>
      <p className="basic-syntax-text">
        <b>Line 1:</b> <code>int add(int a, int b)</code> defines a function that takes two integers and returns their sum. <br />
        <b>Line 2:</b> <code>add(5, 3)</code> calls the function with arguments 5 and 3. <br />
        <b>Line 3:</b> <code>result</code> stores the function's return value.
      </p>
    </div>
    
)

  };

  return (
   <div>
      {/* Display error message with warning icon and animation if topic not found */}
      {content[topic] || (
        <div className="warning-message">
          <p>Topic not found. Please select a valid topic.</p>
        </div>
      )}
    </div>
  );
};

// Prop validation
Cpp.propTypes = {
  topic: PropTypes.string.isRequired,
};

export default Cpp;







