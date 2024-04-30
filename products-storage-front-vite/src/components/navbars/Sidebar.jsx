import React from "react";
import "../styles/Sidebar.css"; // Importa el archivo CSS para los estilos del componente

export const Sidebar = () => {
    // Datos quemados de programadores
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
        // Agrega más programadores aquí...
    ];

    return (
        <div className="sidebar-container">
            <h2 className="sidebar-title">Programadores</h2>
            <div className="sidebar-content">
                {allProgrammers.map((programmer) => {
                    return (
                        <div key={programmer.id} className="sidebar-list-item">
                            <span className={`sidebar-list-username ${programmer.isOnline ? 'online' : 'offline'}`}>
                                {programmer.username}
                            </span>
                            <span className={`sidebar-list-status ${programmer.isOnline ? 'online' : 'offline'}`}>
                                {programmer.isOnline ? 'En línea' : 'Desconectado'}
                            </span>
                            <div className="sidebar-skills">
                                <span className="sidebar-skills-title">Habilidades:</span>
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

