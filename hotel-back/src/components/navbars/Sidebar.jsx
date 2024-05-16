import React from "react";
import "../styles/Sidebar.css"; // Import the CSS file for component styling

export const Sidebar = () => {
    // Dummy data for programmers
    const allProgrammers = [
        {
            id: 1,
            username: "eramirez",
            isOnline: true,
            skills: ["React", "JavaScript", "HTML", "CSS"]
        },
        {
            id: 2,
            username: "jsanchez",
            isOnline: false,
            skills: ["Python", "Django", "SQL"]
        },
        {
            id: 3,
            username: "jrevolorio",
            isOnline: true,
            skills: ["Node.js", "Express", "MongoDB"]
        },
        // Add more programmers here...
    ];

    return (
        <div className="sidebar-container">
            <h2 className="sidebar-title">Programmers</h2>
            <div className="sidebar-content">
                {allProgrammers.map((programmer) => {
                    return (
                        <div key={programmer.id} className="sidebar-list-item">
                            <span className={`sidebar-list-username ${programmer.isOnline ? 'online' : 'offline'}`}>
                                {programmer.username}
                            </span>
                            <span className={`sidebar-list-status ${programmer.isOnline ? 'online' : 'offline'}`}>
                                {programmer.isOnline ? 'Online' : 'Offline'}
                            </span>
                            <div className="sidebar-skills">
                                <span className="sidebar-skills-title">Skills:</span>
                                <ul className="sidebar-skills-list">
                                    {programmer.skills.map((skill, index) => (
                                        <li key={index} className="sidebar-skill">{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
