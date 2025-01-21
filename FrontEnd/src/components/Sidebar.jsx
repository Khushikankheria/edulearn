import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import '../Css/Sidebar.css';

const Sidebar = ({ subject, closeSidebar, onTopicClick }) => {
    const [activeTopic, setActiveTopic] = useState(null); // Track the active topic
    const content = {
        "C++": [
            "Introduction to C++",
            "Basic Syntax",
            "Data Types",
            "Control Structures",
            "Functions",
            "Object-Oriented Programming",
        ],
        "DBMS": [
            "Introduction to DBMS",
            "Data Models",
            "SQL Basics",
            "Normalization",
            "ER Model",
            "Transactions",
        ],
        "DSA": [
            "Introduction to DSA",
            "Array",
            "Linked List",
            "Stack and Queue",
            "Binary Tree",
            "Sorting Algorithms",
        ],
        "JavaScript": [
            "Introduction to JavaScript",
            "Variables and Data Types",
            "Functions",
            "Objects and Arrays",
            "Functions",
            "Promises and Async/Await",
        ],
        "OOPS": [
            "Introduction to OOP",
            "Classes and Objects",
            "Encapsulation",
            "Inheritance",
            "Polymorphism",
            "Abstraction",
        ],
        "Python": [
            "Introduction to Python",
            "Basic Syntax",
            "Data Types",
            "Control Structures",
            "Functions",
            "Classes and Objects",
        ]
    };

    // Handle topic click
    const handleTopicClick = (item) => {
        setActiveTopic(item); // Set clicked topic as active
        onTopicClick(item); // Pass topic to parent for updating content
    };

    // Handle sidebar close
    const handleCloseSidebar = () => {
        closeSidebar(); // Close the sidebar when the close button is clicked
    };

    useEffect(() => {
        // Reset active topic when the subject changes
        setActiveTopic(null);
    }, [subject]); // Reset active topic when subject changes

    return (
        <div className="sidebar">
            <button className="close-btn" onClick={handleCloseSidebar}>X</button>
            <h2>{subject}</h2>
            <ul>
                {content[subject]?.map((item, index) => (
                    <li key={index}>
                        <div
                            onClick={() => handleTopicClick(item)} // Handle topic click
                            className={activeTopic === item ? 'active' : ''} // Highlight active topic
                        >
                            {item}
                        </div>
                    </li>
                )) || <p>No content available</p>}
            </ul>
        </div>
    );
};

Sidebar.propTypes = {
    subject: PropTypes.string.isRequired,
    closeSidebar: PropTypes.func.isRequired,
    onTopicClick: PropTypes.func.isRequired,
};

Sidebar.defaultProps = {
    subject: "No Subject",
    closeSidebar: () => {},
    onTopicClick: () => {},
};

export default Sidebar;
