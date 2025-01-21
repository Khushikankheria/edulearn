import React from 'react';
import Timestamp from '../Timestamp'; // Component for showing the timestamp

// For code snippets
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

// For prop validation
import PropTypes from 'prop-types';

const Dbms = ({ topic }) => {
  const content = {
   "Introduction to DBMS": (
  <div>
    <Timestamp />
    <h1>What is DBMS?</h1>
    <p>
      DBMS stands for Database Management System. It is a software system that provides an interface for users to interact with a database, ensuring that data is stored, organized, and managed efficiently. A DBMS allows for operations like data retrieval, insertion, deletion, and updating while maintaining consistency, security, and integrity.
    </p>
    <h2>Key Components of a DBMS:</h2>
    <ul>
      <li><strong>Database Engine:</strong> Responsible for data storage, manipulation, and retrieval.</li>
      <li><strong>Database Schema:</strong> Defines the structure of the database, including tables, relationships, and constraints.</li>
      <li><strong>Query Processor:</strong> Interprets and executes database queries, typically using SQL.</li>
      <li><strong>Transaction Manager:</strong> Ensures that database transactions are processed reliably.</li>
      <li><strong>Security Manager:</strong> Handles user authentication, access control, and authorization.</li>
    </ul>
    <h2>Why Use a DBMS?</h2>
    <ul>
      <li>Efficient data management and organization.</li>
      <li>Eliminates data redundancy and inconsistency, ensuring the data is only stored once.</li>
      <li>Ensures data security and integrity through encryption, user permissions, and constraints.</li>
      <li>Supports concurrent access by multiple users, allowing seamless data manipulation without conflicts.</li>
      <li>Provides backup and recovery mechanisms to prevent data loss and ensure data availability.</li>
    </ul>
    <h2>Types of DBMS:</h2>
    <p>
      DBMSs can be categorized based on their data models:
    </p>
    <ul>
      <li><strong>Hierarchical DBMS:</strong> Data is organized in a tree-like structure, where each record has a parent-child relationship.</li>
      <li><strong>Network DBMS:</strong> More complex than hierarchical, allowing many-to-many relationships between records.</li>
      <li><strong>Relational DBMS (RDBMS):</strong> Uses tables (relations) to store data and is the most common type of DBMS (e.g., MySQL, PostgreSQL, Oracle).</li>
      <li><strong>Object-oriented DBMS:</strong> Stores data in objects, similar to object-oriented programming languages.</li>
      <li><strong>NoSQL DBMS:</strong> Designed for large-scale data storage and high-performance needs, often used for unstructured or semi-structured data (e.g., MongoDB, Cassandra).</li>
    </ul>
  </div>
)
,
    "Data Models": (
      <div>
         <Timestamp />
        <h1>Data Models in DBMS</h1>
        <p>
          A data model defines the logical structure of a database and how data is stored,
          organized, and manipulated. Common types include:
        </p>
        <ul>
          <li><b>Hierarchical Model:</b> Data is organized in a tree-like structure.</li>
          <li><b>Network Model:</b> Data is represented using graphs with nodes and edges.</li>
          <li><b>Relational Model:</b> Data is stored in tables (relations).</li>
          <li><b>Object-Oriented Model:</b> Data is stored as objects, similar to OOP.</li>
        </ul>
        <h3>Example of a Relational Model:</h3>
        <SyntaxHighlighter language="sql" style={coy}>
          {`CREATE TABLE Students (
    ID INT PRIMARY KEY,
    Name VARCHAR(50),
    Age INT,
    Grade CHAR(1)
);

INSERT INTO Students (ID, Name, Age, Grade)
VALUES (1, 'Alice', 20, 'A');`}
        </SyntaxHighlighter>
      </div>
    ),
    "SQL Basics": (
  <div>
    <Timestamp />
    <h1>SQL Basics</h1>
    <p>
      SQL (Structured Query Language) is a standard language used for managing and manipulating relational databases. It allows users to query, insert, update, and delete data in a database. The key components of SQL are:
    </p>
    <h2>Data Manipulation Language (DML):</h2>
    <ul>
      <li><b>SELECT:</b> Retrieves data from a table.</li>
      <li><b>INSERT:</b> Adds new records into a table.</li>
      <li><b>UPDATE:</b> Modifies existing records in a table.</li>
      <li><b>DELETE:</b> Removes records from a table.</li>
    </ul>
    <h2>Example SQL Queries:</h2>
    <SyntaxHighlighter language="sql" style={coy}>
      {`-- Retrieve all data from the Students table
SELECT * FROM Students;

-- Insert a new record into the Students table
INSERT INTO Students (ID, Name, Age, Grade)
VALUES (2, 'Bob', 22, 'B');

-- Update the grade of the student named Bob
UPDATE Students
SET Grade = 'A'
WHERE Name = 'Bob';

-- Delete the record of the student with ID 2
DELETE FROM Students
WHERE ID = 2;`}
    </SyntaxHighlighter>
    <h2>Additional SQL Clauses:</h2>
    <p>SQL also provides several important clauses to manipulate and filter data more efficiently:</p>
    <ul>
      <li><b>WHERE:</b> Used to specify conditions for filtering records.</li>
      <li><b>ORDER BY:</b> Sorts the result set by one or more columns.</li>
      <li><b>GROUP BY:</b> Groups rows that have the same values into summary rows.</li>
      <li><b>HAVING:</b> Sets a condition on grouped records, used with <code>GROUP BY</code>.</li>
      <li><b>LIMIT:</b> Restricts the number of records returned by a query.</li>
    </ul>
    <h3>Example with Additional Clauses:</h3>
    <SyntaxHighlighter language="sql" style={coy}>
      {`-- Retrieve all students whose age is greater than 20, sorted by grade
SELECT * FROM Students
WHERE Age > 20
ORDER BY Grade;

-- Count the number of students in each grade group
SELECT Grade, COUNT(*) AS Total
FROM Students
GROUP BY Grade
HAVING COUNT(*) > 1;`}
    </SyntaxHighlighter>
  </div>
)
,
    "Normalization": (
      <div>
         <Timestamp />
        <h1>Normalization in DBMS</h1>
        <p>
          Normalization is the process of organizing data to reduce redundancy and improve
          efficiency. It involves dividing a database into smaller tables and defining relationships
          between them.
        </p>
        <h2>Normal Forms:</h2>
        <ul>
          <li><b>1NF:</b> Removes duplicate columns and ensures each column contains atomic values.</li>
          <li><b>2NF:</b> Ensures 1NF and removes partial dependencies.</li>
          <li><b>3NF:</b> Ensures 2NF and removes transitive dependencies.</li>
          <li><b>BCNF:</b> A stricter version of 3NF.</li>
        </ul>
        <h3>Example:</h3>
        <p>
          Consider a table with student details and course details in one table. Splitting them into
          separate tables eliminates redundancy and improves efficiency.
        </p>
      </div>
    ),
    "ER Model": (
  <div>
    <Timestamp />
    <h1>Entity-Relationship (ER) Model</h1>
    <p>
      The ER Model is a high-level conceptual data model used to represent the structure of a database. It defines the data elements and their relationships using a set of symbols. The ER model helps in designing the logical structure of databases in a way that is understandable to both developers and users.
    </p>
    <h2>Key Components of the ER Model:</h2>
    <ul>
      <li><b>Entities:</b> Represent real-world objects or concepts. Examples: <code>Student</code>, <code>Course</code>, <code>Employee</code>.</li>
      <li><b>Attributes:</b> Describe properties of entities. For example, a <code>Student</code> entity might have attributes like <code>Name</code>, <code>Age</code>, <code>ID</code>.</li>
      <li><b>Relationships:</b> Define associations between two or more entities. For example, a <code>Student</code> "Enrolls" in a <code>Course</code>.</li>
      <li><b>Primary Key:</b> A unique identifier for each entity instance (e.g., <code>StudentID</code>).</li>
      <li><b>Foreign Key:</b> A field in one entity that references the primary key of another entity to establish a relationship.</li>
    </ul>
    <h2>Types of Relationships:</h2>
    <ul>
      <li><b>One-to-One:</b> One instance of an entity is related to one instance of another entity. For example, each <code>Student</code> has one <code>StudentID</code>.</li>
      <li><b>One-to-Many:</b> One instance of an entity is related to multiple instances of another entity. For example, a <code>Teacher</code> teaches multiple <code>Courses</code>.</li>
      <li><b>Many-to-Many:</b> Multiple instances of an entity are related to multiple instances of another entity. For example, <code>Students</code> can enroll in multiple <code>Courses</code>, and each <code>Course</code> can have multiple <code>Students</code>.</li>
    </ul>
    <h3>Example ER Diagram:</h3>
    <p>
      Imagine a simple scenario where we have two entities: <code>Students</code> and <code>Courses</code>. The <code>Student</code> entity has attributes like <code>StudentID</code>, <code>Name</code>, <code>Age</code>. The <code>Course</code> entity has attributes like <code>CourseID</code>, <code>CourseName</code>. The relationship between these entities is "Enrolls", indicating that a student can enroll in multiple courses.
    </p>
    <p>Below is a textual representation of the ER diagram:</p>
    <ul>
      <li><b>Entities:</b> 
        <ul>
          <li><code>Student</code> (StudentID, Name, Age)</li>
          <li><code>Course</code> (CourseID, CourseName)</li>
        </ul>
      </li>
      <li><b>Relationship:</b> 
        <ul>
          <li><code>Enrolls</code> (a student enrolls in a course)</li>
        </ul>
      </li>
    </ul>
    <h3>ER Diagram Representation:</h3>
    <p>A graphical ER diagram would show the <code>Student</code> and <code>Course</code> entities as rectangles, the attributes as ovals, and the relationship "Enrolls" as a diamond connecting the two entities.</p>
  </div>
)
,
    "Transactions": (
      <div>
         <Timestamp />
        <h1>Transactions in DBMS</h1>
        <p>
          A transaction is a sequence of operations performed as a single logical unit of work. Key
          properties of transactions (ACID) include:
        </p>
        <ul>
          <li><b>Atomicity:</b> Ensures all operations are completed or none are.</li>
          <li><b>Consistency:</b> Maintains database consistency before and after the transaction.</li>
          <li><b>Isolation:</b> Ensures transactions do not interfere with each other.</li>
          <li><b>Durability:</b> Guarantees the results persist after the transaction is complete.</li>
        </ul>
        <h3>Example:</h3>
        <SyntaxHighlighter language="sql" style={coy}>
          {`BEGIN TRANSACTION;
UPDATE Accounts
SET Balance = Balance - 100
WHERE AccountID = 1;

UPDATE Accounts
SET Balance = Balance + 100
WHERE AccountID = 2;

COMMIT;`}
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
Dbms.propTypes = {
  topic: PropTypes.string.isRequired,
};

export default Dbms;
