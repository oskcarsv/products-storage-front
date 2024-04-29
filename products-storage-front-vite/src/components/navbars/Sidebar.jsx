/* eslint-disable react/prop-types */

export const Sidebar = () => {
    // Datos quemados de programadores
    const programmers = [
        {
            id: 1,
            username: "eramirez",
            isOnline: true
        },
        {
            id: 2,
            username: "JaneSmith",
            isOnline: false
        },
        {
            id: 3,
            username: "SamWilson",
            isOnline: true
        }
    ];

    return (
        <div className="sidebar-container">
            <span className="sidebar-title">Programadores Sugeridos</span>
            <span className="sidebar-subtitle">PROGRAMADORES QUE SIGO</span>
            {programmers.map((programmer) => {
                return (
                    <div key={programmer.id} className="sidebar-list-item">
                        <span className="sidebar-list-username">{programmer.username}</span>
                        <span className="sidebar-list-status" style={{
                            color: programmer.isOnline ? 'green' : 'red'
                        }}>
                            {programmer.isOnline ? 'En línea' : 'Desconectado'}
                        </span>
                    </div>
                );
            })}
        </div>
    );
};
