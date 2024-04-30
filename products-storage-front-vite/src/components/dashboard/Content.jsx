import React from "react";
import '../styles/Content.css'

export const Content = () => {
  return (
    <div className="content-container">
      <h1>Almacenadora</h1>
      <p>
        Bienvenido a la página de nuestra almacenadora. Aquí encontrará información sobre nuestros servicios, cómo podemos ayudarlo y por qué debería elegirnos.
      </p>

      <h2>Servicios de Almacenamiento</h2>
      <p>
        Ofrecemos una variedad de servicios de almacenamiento para satisfacer las necesidades de empresas y particulares. Nuestros servicios incluyen:
      </p>
      <ul>
        <li>Almacenamiento a corto y largo plazo</li>
        <li>Almacenamiento de mercancías perecederas y sensibles al clima</li>
        <li>Almacenamiento de documentos y archivos</li>
        <li>Servicios de empaque y embalaje</li>
        <li>Almacenamiento seguro de objetos de valor</li>
      </ul>

      <h2>Por Qué Elegirnos</h2>
      <p>
        Somos la opción ideal para sus necesidades de almacenamiento por las siguientes razones:
      </p>
      <ul>
        <li><strong>Seguridad:</strong> Nuestras instalaciones están equipadas con sistemas de seguridad avanzados y personal capacitado para garantizar la seguridad de sus pertenencias.</li>
        <li><strong>Accesibilidad:</strong> Nuestro almacenamiento está ubicado en lugares estratégicos para facilitar el acceso y la logística.</li>
        <li><strong>Flexibilidad:</strong> Ofrecemos opciones flexibles de almacenamiento que se adaptan a sus necesidades cambiantes.</li>
        <li><strong>Atención al Cliente:</strong> Nos comprometemos a brindar un excelente servicio al cliente, con personal amable y servicial listo para ayudarlo en cada paso del camino.</li>
        <li><strong>Precios Competitivos:</strong> Ofrecemos precios competitivos y transparentes para nuestros servicios de almacenamiento.</li>
      </ul>

      <h2>Contacto</h2>
      <p>
        Si desea obtener más información sobre nuestros servicios o realizar una consulta, no dude en contactarnos.
      </p>
      <p>
        Teléfono: (123) 456-7890<br />
        Correo electrónico: info@almacenadora.com<br />
        Dirección: Calle Principal #123, Ciudad, País
      </p>
    </div>
  );
};
