// Importa Link para navegación interna sin recargar la página
import { Link } from 'react-router-dom';
// Importa estilos específicos para esta vista
import '../Styles/ListaDispositivos.css';
// Importa React y los hooks necesarios para estado y efectos
import React, { useEffect, useState } from 'react';
// Componente funcional que muestra la lista de dispositivos
const ListaDispositivos = () => {
  // Hook de estado para almacenar la lista de dispositivos
  const [dispositivos, setDispositivos] = useState([]);
  // Hook useEffect que se ejecuta una sola vez al montar el componente
  useEffect(() => {
    // Hace una petición a la API local para obtener los dispositivos
    fetch('http://localhost:8000/dispositivos')
      .then(res => res.json())              // Convierte la respuesta a formato JSON
      .then(data => setDispositivos(data))  // Guarda los datos recibidos en el estado
      .catch(err => console.error(err));    // Muestra errores en consola si ocurren
  }, []); // El array vacío indica que se ejecuta solo una vez (al montar)
  return (
    <div>
      <h1>Lista de Dispositivos</h1>
      {/* Tabla que muestra los dispositivos obtenidos */}
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Modelo</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {/* Itera sobre el arreglo de dispositivos y renderiza cada uno en una fila */}
          {dispositivos.map((dispositivo) => (
            <tr key={dispositivo.id}>
              <td>{dispositivo.id}</td>
              <td>{dispositivo.nombre}</td>
              <td>{dispositivo.modelo}</td>
              <td>{dispositivo.estado}</td>
              <td>
                {/* Link hacia la vista de detalle del dispositivo */}
                <Link to={`/dispositivos/${dispositivo.id}`}>Ver Detalle</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
// Exporta el componente para su uso en otras partes del proyecto
export default ListaDispositivos;
