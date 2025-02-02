// import React from 'react';
// import Timestamp from '../Timestamp'; // Component for showing the timestamp

// // For code snippets
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

// // For prop validation
// import PropTypes from 'prop-types';

// const Dsa = ({ topic }) => {
//   const content = {
//    "Introduction to DSA": (
//   <div>
//     <Timestamp />
//     <h1>What is DSA?</h1>
//     <p>
//       DSA stands for Data Structures and Algorithms. It is a fundamental concept in computer science and programming that involves organizing, processing, and storing data efficiently, along with solving problems using step-by-step procedures (algorithms).
//     </p>

//     <h2>Why Learn DSA?</h2>
//     <ul>
//       <li>Helps in writing optimized and efficient code.</li>
//       <li>Enhances problem-solving and analytical thinking skills.</li>
//       <li>Forms the backbone of technical interviews and competitive programming.</li>
//       <li>Enables better understanding of how systems work under the hood.</li>
//     </ul>

//     <h2>Core Components of DSA:</h2>
//     <p>
//       DSA is broadly divided into two components: Data Structures and Algorithms.
//     </p>

//     <h3>1. Data Structures:</h3>
//     <p>
//       Data structures are ways to organize and store data for efficient access and modification. Common types include:
//     </p>
//     <ul>
//       <li><b>Arrays:</b> A collection of elements stored in contiguous memory locations.</li>
//       <li><b>Linked Lists:</b> A sequential collection of elements connected via pointers.</li>
//       <li><b>Stacks:</b> A LIFO (Last In, First Out) data structure.</li>
//       <li><b>Queues:</b> A FIFO (First In, First Out) data structure.</li>
//       <li><b>Hash Tables:</b> A structure that maps keys to values for efficient lookups.</li>
//       <li><b>Trees:</b> A hierarchical structure, such as binary trees and binary search trees.</li>
//       <li><b>Graphs:</b> A set of nodes connected by edges, used to model networks.</li>
//     </ul>

//     <h3>2. Algorithms:</h3>
//     <p>
//       Algorithms are step-by-step instructions to solve specific problems. Common types include:
//     </p>
//     <ul>
//       <li><b>Searching:</b> Algorithms like Binary Search and Linear Search.</li>
//       <li><b>Sorting:</b> Algorithms like Merge Sort, Quick Sort, and Bubble Sort.</li>
//       <li><b>Greedy Algorithms:</b> Algorithms that make the best choice at each step.</li>
//       <li><b>Dynamic Programming:</b> Solving problems by breaking them into subproblems and storing intermediate results.</li>
//       <li><b>Backtracking:</b> Trying different solutions and undoing steps when necessary.</li>
//       <li><b>Graph Algorithms:</b> Dijkstra's Algorithm, BFS, DFS, etc.</li>
//     </ul>

//     <h2>Applications of DSA:</h2>
//     <ul>
//       <li>Building scalable applications and systems.</li>
//       <li>Optimizing software performance and resource usage.</li>
//       <li>Solving real-world problems like route optimization, recommendation systems, etc.</li>
//     </ul>

//     <h2>Getting Started with DSA:</h2>
//     <ol>
//       <li>Start with basic data structures like Arrays, Stacks, and Queues.</li>
//       <li>Understand time and space complexity analysis.</li>
//       <li>Learn algorithms like Sorting, Searching, and Recursion.</li>
//       <li>Practice problems on platforms like LeetCode, HackerRank, and Codeforces.</li>
//     </ol>
//   </div>
// )
// ,
//     "Array": (
//   <div>
//     <Timestamp />
//     <h1>Array in DSA</h1>
//     <p>
//       An array is a linear data structure that stores elements of the same type in contiguous memory locations. It is one of the simplest and most commonly used data structures.
//     </p>

//     <h2>Key Points:</h2>
//     <ul>
//       <li><b>Index-based:</b> Elements can be accessed directly using their index, allowing for fast retrieval.</li>
//       <li><b>Fixed Size:</b> The size of the array is determined at the time of declaration and cannot be changed dynamically.</li>
//       <li><b>Efficient for Iteration:</b> Arrays allow easy traversal and iteration of elements.</li>
//     </ul>

//     <h2>Operations on Arrays:</h2>
//     <ul>
//       <li><b>Traversal:</b> Accessing each element of the array sequentially.</li>
//       <li><b>Insertion:</b> Adding an element at a specific index (may require shifting other elements).</li>
//       <li><b>Deletion:</b> Removing an element from a specific index (may require shifting other elements).</li>
//       <li><b>Searching:</b> Finding an element in the array (Linear or Binary Search).</li>
//       <li><b>Updating:</b> Modifying the value of an element at a specific index.</li>
//     </ul>

//     <h2>Advantages:</h2>
//     <ul>
//       <li>Direct access to elements using their index.</li>
//       <li>Efficient for storing and accessing data of the same type.</li>
//     </ul>

//     <h2>Disadvantages:</h2>
//     <ul>
//       <li>Fixed size can lead to wastage of memory or insufficient space.</li>
//       <li>Insertion and deletion can be time-consuming due to shifting of elements.</li>
//     </ul>

//     <h2>Example:</h2>
//     <SyntaxHighlighter language="cpp" style={coy}>
//       {`#include <iostream>
// using namespace std;

// int main() {
//     // Declare and initialize an array
//     int arr[5] = {10, 20, 30, 40, 50};

//     // Traversing the array
//     cout << "Array elements: ";
//     for (int i = 0; i < 5; i++) {
//         cout << arr[i] << " ";
//     }
//     cout << endl;

//     // Accessing elements
//     cout << "Element at index 2: " << arr[2] << endl;

//     // Updating an element
//     arr[2] = 35;
//     cout << "Updated element at index 2: " << arr[2] << endl;

//     return 0;
// }`}
//     </SyntaxHighlighter>

//     <h2>Applications:</h2>
//     <ul>
//       <li>Used in implementing other data structures like Stacks, Queues, and Heaps.</li>
//       <li>Commonly used for storing data in programs and algorithms.</li>
//     </ul>

//     <h2>Practice Problems:</h2>
//     <ol>
//       <li>Find the largest and smallest elements in an array.</li>
//       <li>Reverse an array in place.</li>
//       <li>Find the second largest element in an array.</li>
//       <li>Rotate an array by a given number of positions.</li>
//     </ol>
//   </div>
// )
// ,
//     "Linked List": (
//       <div>
//          <Timestamp />
//         <h1>Linked List</h1>
//         <p>
//           A linked list is a linear data structure where elements are stored in nodes, and each node points to the next node in the sequence.
//         </p>
//         <h2>Types of Linked Lists:</h2>
//         <ul>
//           <li><b>Singly Linked List:</b> Nodes have a data part and a pointer to the next node.</li>
//           <li><b>Doubly Linked List:</b> Nodes have pointers to both the next and previous nodes.</li>
//           <li><b>Circular Linked List:</b> The last node points back to the first node.</li>
//         </ul>
//         <h3>Example:</h3>
//         <SyntaxHighlighter language="cpp" style={coy}>
//           {`#include <iostream>
// using namespace std;

// struct Node {
//     int data;
//     Node* next;
// };

// int main() {
//     Node* head = new Node();
//     head->data = 1;
//     head->next = nullptr;

//     cout << "Data: " << head->data << endl;
//     delete head;

//     return 0;
// }`}
//         </SyntaxHighlighter>
//       </div>
//     ),
//     "Stack and Queue": (
//   <div>
//     <Timestamp />
//     <h1>Stack and Queue</h1>
//     <p>
//       Both stack and queue are linear data structures, but they differ in how elements are accessed, added, and removed.
//     </p>

//     <h2>Stack:</h2>
//     <ul>
//       <li><b>LIFO:</b> Last In, First Out. The most recently added element is removed first.</li>
//       <li><b>Operations:</b> 
//         <ul>
//           <li><code>push()</code>: Adds an element to the top of the stack.</li>
//           <li><code>pop()</code>: Removes the top element from the stack.</li>
//           <li><code>peek()</code>: Retrieves the top element without removing it.</li>
//         </ul>
//       </li>
//       <li><b>Applications:</b> 
//         <ul>
//           <li>Managing function calls (recursion).</li>
//           <li>Expression evaluation and conversion (infix to postfix).</li>
//           <li>Undo/Redo functionality in applications.</li>
//         </ul>
//       </li>
//     </ul>

//     <h2>Queue:</h2>
//     <ul>
//       <li><b>FIFO:</b> First In, First Out. The first added element is removed first.</li>
//       <li><b>Operations:</b> 
//         <ul>
//           <li><code>enqueue()</code>: Adds an element to the rear of the queue.</li>
//           <li><code>dequeue()</code>: Removes an element from the front of the queue.</li>
//           <li><code>front()</code>: Retrieves the front element without removing it.</li>
//         </ul>
//       </li>
//       <li><b>Applications:</b> 
//         <ul>
//           <li>Task scheduling (e.g., CPU scheduling).</li>
//           <li>Breadth-First Search (BFS) in graphs.</li>
//           <li>Data buffering in asynchronous systems.</li>
//         </ul>
//       </li>
//     </ul>
//   </div>
// ),

// "Binary Tree": (
//   <div>
//     <Timestamp />
//     <h1>Binary Tree</h1>
//     <p>
//       A binary tree is a hierarchical data structure where each node has at most two children, referred to as the left and right child.
//     </p>

//     <h2>Key Concepts:</h2>
//     <ul>
//       <li><b>Node:</b> A single element in the tree containing data.</li>
//       <li><b>Edge:</b> The connection between parent and child nodes.</li>
//       <li><b>Traversal:</b> Methods to visit nodes:
//         <ul>
//           <li>Inorder (Left, Root, Right)</li>
//           <li>Preorder (Root, Left, Right)</li>
//           <li>Postorder (Left, Right, Root)</li>
//           <li>Level-order (Breadth-first traversal)</li>
//         </ul>
//       </li>
//       <li><b>Binary Search Tree (BST):</b> A binary tree where the left subtree contains nodes with smaller values, and the right subtree contains nodes with larger values.</li>
//     </ul>

//     <h2>Applications:</h2>
//     <ul>
//       <li>Hierarchical data representation (e.g., file systems).</li>
//       <li>Efficient searching and sorting (Binary Search Tree).</li>
//       <li>Expression trees in compilers.</li>
//     </ul>
//   </div>
// ),

// "Sorting Algorithms": (
//   <div>
//     <Timestamp />
//     <h1>Sorting Algorithms</h1>
//     <p>
//       Sorting algorithms are used to arrange data in a specific order, typically ascending or descending.
//     </p>

//     <h2>Common Sorting Algorithms:</h2>
//     <ul>
//       <li><b>Bubble Sort:</b> Repeatedly swaps adjacent elements if they are in the wrong order.
//         <SyntaxHighlighter language="cpp" style={coy}>
//           {`void bubbleSort(int arr[], int n) {
//   for (int i = 0; i < n - 1; i++) {
//     for (int j = 0; j < n - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap(arr[j], arr[j + 1]);
//       }
//     }
//   }
// }`}
//         </SyntaxHighlighter>
//       </li>
//       <li><b>Merge Sort:</b> Divides the array into halves and merges them in sorted order.
//         <SyntaxHighlighter language="cpp" style={coy}>
//           {`void mergeSort(int arr[], int left, int right) {
//   if (left < right) {
//     int mid = left + (right - left) / 2;
//     mergeSort(arr, left, mid);
//     mergeSort(arr, mid + 1, right);
//     merge(arr, left, mid, right);
//   }
// }`}
//         </SyntaxHighlighter>
//       </li>
//       <li><b>Quick Sort:</b> Picks a pivot and partitions the array around it.
//         <SyntaxHighlighter language="cpp" style={coy}>
//           {`void quickSort(int arr[], int low, int high) {
//   if (low < high) {
//     int pi = partition(arr, low, high);
//     quickSort(arr, low, pi - 1);
//     quickSort(arr, pi + 1, high);
//   }
// }`}
//         </SyntaxHighlighter>
//       </li>
//     </ul>

//     <h2>Applications:</h2>
//     <ul>
//       <li>Optimizing search algorithms.</li>
//       <li>Data preprocessing in machine learning.</li>
//       <li>Database indexing.</li>
//     </ul>
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
// Dsa.propTypes = {
//   topic: PropTypes.string.isRequired,
// };

// export default Dsa;


import React from "react";
import Timestamp from "../Timestamp";
import "../../Css/SubStyle.css";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const Dsa = ({ topic }) => {
  const content = {
    "Introduction to DSA": (
      <div className="content">
        <div className="timestamp">
          <Timestamp />
        </div>

        <h1 className="heading">What is DSA?</h1>
        <p className="text">
          <b>DSA</b> stands for <u>Data Structures and Algorithms</u>. It is a fundamental concept in computer science and programming that involves organizing, processing, and storing data efficiently, along with solving problems using step-by-step procedures (algorithms).
        </p>

        <h2 className="heading">Why Learn DSA?</h2>
        <ul className="list">
          <li>Helps in writing optimized and efficient code.</li>
          <li>Enhances problem-solving and analytical thinking skills.</li>
          <li>Forms the backbone of technical interviews and competitive programming.</li>
          <li>Enables better understanding of how systems work under the hood.</li>
        </ul>
        <h2 className="heading">Core Components of DSA</h2>
        <p className="text">
          DSA is broadly divided into two components: Data Structures and Algorithms.
        </p>
        <h3><strong>1. Data Structures:</strong></h3>
        <p className="text">
          Data structures are ways to organize and store data for efficient access and modification. Common types include:
        </p>
        <ul className="list">
          <li><b>Arrays:</b> A collection of elements stored in contiguous memory locations.</li>
          <li><b>Linked Lists:</b> A sequential collection of elements connected via pointers.</li>
          <li><b>Stacks:</b> A LIFO (Last In, First Out) data structure.</li>
          <li><b>Queues:</b> A FIFO (First In, First Out) data structure.</li>
          <li><b>Hash Tables:</b> A structure that maps keys to values for efficient lookups.</li>
          <li><b>Trees:</b> A hierarchical structure, such as binary trees and binary search trees.</li>
          <li><b>Graphs:</b> A set of nodes connected by edges, used to model networks.</li>
        </ul>
        <h3><strong>2. Algorithms:</strong></h3>
        <p className="text">
          Algorithms are step-by-step instructions to solve specific problems. Common types include:
        </p>
        <ul className="list">
          <li><b>Searching:</b> Algorithms like Binary Search and Linear Search.</li>
          <li><b>Sorting:</b> Algorithms like Merge Sort, Quick Sort, and Bubble Sort.</li>
          <li><b>Greedy Algorithms:</b> Algorithms that make the best choice at each step.</li>
          <li><b>Dynamic Programming:</b> Solving problems by breaking them into subproblems and storing intermediate results.</li>
          <li><b>Backtracking:</b> Trying different solutions and undoing steps when necessary.</li>
          <li><b>Graph Algorithms:</b> Dijkstra's Algorithm, BFS, DFS, etc.</li>
        </ul>
        <h2 className="heading">Applications of DSA:</h2>
        <ul className="list">
          <li>Building scalable applications and systems.</li>
          <li>Optimizing software performance and resource usage.</li>
          <li>Solving real-world problems like route optimization, recommendation systems, etc.</li>
        </ul>
        <h2 className="heading">Getting Started with DSA:</h2>
        <ol className="list">
          <li>Start with basic data structures like Arrays, Stacks, and Queues.</li>
          <li>Understand time and space complexity analysis.</li>
          <li>Learn algorithms like Sorting, Searching, and Recursion.</li>
          <li>Practice problems on platforms like LeetCode, HackerRank, and Codeforces.</li>
        </ol>
      </div>
    ),
    "Array": (
      <div className="content">
        <div className="timestamp">
          <Timestamp />
        </div>
        <h1 className="heading">Array in DSA</h1>
        <p className="text">
          An array is a linear data structure that stores elements of the same type in contiguous memory locations. It is one of the simplest and most commonly used data structures.
        </p>

        <h2 className="heading">Key Points:</h2>
        <ul className="list">
          <li><b>Index-based:</b> Elements can be accessed directly using their index, allowing for fast retrieval.</li>
          <li><b>Fixed Size:</b> The size of the array is determined at the time of declaration and cannot be changed dynamically.</li>
          <li><b>Efficient for Iteration:</b> Arrays allow easy traversal and iteration of elements.</li>
        </ul>

        <h2 className="heading">Operations on Arrays:</h2>
        <ul className="list">
          <li><b>Traversal:</b> Accessing each element of the array sequentially.</li>
          <li><b>Insertion:</b> Adding an element at a specific index (may require shifting other elements).</li>
          <li><b>Deletion:</b> Removing an element from a specific index (may require shifting other elements).</li>
          <li><b>Searching:</b> Finding an element in the array (Linear or Binary Search).</li>
          <li><b>Updating:</b> Modifying the value of an element at a specific index.</li>
        </ul>

        <h2 className="heading">Advantages:</h2>
        <ul className="list">
          <li>Direct access to elements using their index.</li>
          <li>Efficient for storing and accessing data of the same type.</li>
        </ul>

        <h2 className="heading">Disadvantages:</h2>
        <ul className="list">
          <li>Fixed size can lead to wastage of memory or insufficient space.</li>
          <li>Insertion and deletion can be time-consuming due to shifting of elements.</li>
        </ul>

        <h2 className="heading">Example:</h2>
        <div className="snippet-container">
          <SyntaxHighlighter language="cpp" style={coy}>
            {`#include <iostream>
using namespace std;


int main() {
    // Declare and initialize an array
    int arr[5] = {10, 20, 30, 40, 50};


    // Traversing the array
    cout << "Array elements: ";
    for (int i = 0; i < 5; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;


    // Accessing elements
    cout << "Element at index 2: " << arr[2] << endl;


    // Updating an element
    arr[2] = 35;
    cout << "Updated element at index 2: " << arr[2] << endl;


    return 0;
}`}
          </SyntaxHighlighter>
        </div>

        <h2 className="heading">Applications:</h2>
        <ul className="list">
          <li>Used in implementing other data structures like Stacks, Queues, and Heaps.</li>
          <li>Commonly used for storing data in programs and algorithms.</li>
        </ul>

        <h2 className="heading">Practice Problems:</h2>
        <ol className="list">
          <li>Find the largest and smallest elements in an array.</li>
          <li>Reverse an array in place.</li>
          <li>Find the second largest element in an array.</li>
          <li>Rotate an array by a given number of positions.</li>
        </ol>
      </div>
    ),
    "Linked List": (
      <div className="content">
        <div className="timestamp">
          <Timestamp />
        </div>
        <h1 className="heading">Linked List</h1>
        <p className="text">
          A linked list is a linear data structure where elements are stored in nodes, and each node points to the next node in the sequence.
        </p>
        <h2 className="heading">Types of Linked Lists:</h2>
        <ul className="list">
          <li><b>Singly Linked List:</b> Nodes have a data part and a pointer to the next node.</li>
          <li><b>Doubly Linked List:</b> Nodes have pointers to both the next and previous nodes.</li>
          <li><b>Circular Linked List:</b> The last node points back to the first node.</li>
        </ul>
        <h3><strong>Example:</strong></h3>
        <div className="snippet-container">
          <SyntaxHighlighter language="cpp" style={coy}>
            {`#include <iostream>
using namespace std;


struct Node {
    int data;
    Node* next;
};


int main() {
    Node* head = new Node();
    head->data = 1;
    head->next = nullptr;


    cout << "Data: " << head->data << endl;
    delete head;


    return 0;
}`}
          </SyntaxHighlighter>
        </div>
      </div>
    ),

    "Stack and Queue": (
      <div className="content">
        <div className="timestamp">
          <Timestamp />
        </div>
        <h1 className="heading">Stack and Queue</h1>
        <p className="text">
          Both stack and queue are linear data structures, but they differ in how elements are accessed, added, and removed.
        </p>

        <h2 className="heading">Stack:</h2>
        <ul className="list">
          <li><b>LIFO:</b> Last In, First Out. The most recently added element is removed first.</li>
          <li><b>Operations:</b>
            <ul className="list">
              <li><code>push()</code>: Adds an element to the top of the stack.</li>
              <li><code>pop()</code>: Removes the top element from the stack.</li>
              <li><code>peek()</code>: Retrieves the top element without removing it.</li>
            </ul>
          </li>
          <li><b>Applications:</b>
            <ul className="list">
              <li>Managing function calls (recursion).</li>
              <li>Expression evaluation and conversion (infix to postfix).</li>
              <li>Undo/Redo functionality in applications.</li>
            </ul>
          </li>
        </ul>

        <h2 className="heading">Queue:</h2>
        <ul className="list">
          <li><b>FIFO:</b> First In, First Out. The first added element is removed first.</li>
          <li><b>Operations:</b>
            <ul className="list">
              <li><code>enqueue()</code>: Adds an element to the rear of the queue.</li>
              <li><code>dequeue()</code>: Removes an element from the front of the queue.</li>
              <li><code>front()</code>: Retrieves the front element without removing it.</li>
            </ul>
          </li>
          <li><b>Applications:</b>
            <ul className="list">
              <li>Task scheduling (e.g., CPU scheduling).</li>
              <li>Breadth-First Search (BFS) in graphs.</li>
              <li>Data buffering in asynchronous systems.</li>
            </ul>
          </li>
        </ul>
      </div>
    ),

    "Binary Tree": (
      <div className="content">
        <div className="timestamp">
          <Timestamp />
        </div>
        <h1 className="heading">Binary Tree</h1>
        <p className="text">
          A binary tree is a hierarchical data structure where each node has at most two children, referred to as the left and right child.
        </p>

        <h2 className="heading">Key Concepts:</h2>
        <ul className="list">
          <li><b>Node:</b> A single element in the tree containing data.</li>
          <li><b>Edge:</b> The connection between parent and child nodes.</li>
          <li><b>Traversal:</b> Methods to visit nodes:
            <ul className="list">
              <li>Inorder (Left, Root, Right)</li>
              <li>Preorder (Root, Left, Right)</li>
              <li>Postorder (Left, Right, Root)</li>
              <li>Level-order (Breadth-first traversal)</li>
            </ul>
          </li>
          <li><b>Binary Search Tree (BST):</b> A binary tree where the left subtree contains nodes with smaller values, and the right subtree contains nodes with larger values.</li>
        </ul>

        <h2 className="heading">Applications:</h2>
        <ul className="list">
          <li>Hierarchical data representation (e.g., file systems).</li>
          <li>Efficient searching and sorting (Binary Search Tree).</li>
          <li>Expression trees in compilers.</li>
        </ul>
      </div>
    ),

    "Sorting Algorithms": (
      <div className="content">
        <div className="timestamp">
          <Timestamp />
        </div>
        <h1 className="heading">Sorting Algorithms</h1>
        <p className="text">
          Sorting algorithms are used to arrange data in a specific order, typically ascending or descending.
        </p>

        <h2 className="heading">Common Sorting Algorithms:</h2>
        <ul className="list">
          <li><b>Bubble Sort:</b> Repeatedly swaps adjacent elements if they are in the wrong order.
            <div className="snippet-container">
              <SyntaxHighlighter language="cpp" style={coy}>
                {`void bubbleSort(int arr[], int n) {
  for (int i = 0; i < n - 1; i++) {
    for (int j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr[j], arr[j + 1]);
      }
    }
  }
}`}
              </SyntaxHighlighter>
            </div>
          </li>
          <li><b>Merge Sort:</b> Divides the array into halves and merges them in sorted order.
            <div className="snippet-container">
              <SyntaxHighlighter language="cpp" style={coy}>
                {`void mergeSort(int arr[], int left, int right) {
  if (left < right) {
    int mid = left + (right - left) / 2;
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
  }
}`}
              </SyntaxHighlighter>
            </div>
          </li>
          <li><b>Quick Sort:</b> Picks a pivot and partitions the array around it.
            <div className="snippet-container">
              <SyntaxHighlighter language="cpp" style={coy}>
                {`void quickSort(int arr[], int low, int high) {
  if (low < high) {
    int pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}`}
              </SyntaxHighlighter>
            </div>
          </li>
        </ul>


        <h2 className="heading">Applications:</h2>
        <ul className="list">
          <li>Optimizing search algorithms.</li>
          <li>Data preprocessing in machine learning.</li>
          <li>Database indexing.</li>
        </ul>
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


Dsa.propTypes = {
  topic: PropTypes.string.isRequired,
};

export default Dsa;


