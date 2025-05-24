// Importa React y los hooks useEffect y useState para manejo de estado y efectos secundarios
import React, { useEffect, useState } from 'react';
// Importa Link de react-router-dom para navegación interna sin recargar la página
import { Link } from 'react-router-dom';
// Importa los estilos CSS para la tabla y el contenedor
import '../Styles/ListaDispositivos.css';
// Componente funcional principal que muestra una lista de dispositivos
const ListaDispositivos = () => {
  // Hook de estado para almacenar el arreglo de dispositivos
  const [dispositivos, setDispositivos] = useState([]);
  // useEffect se ejecuta al cargar el componente para obtener los datos desde el backend
  useEffect(() => {
    fetch('http://localhost:8000/dispositivos') // Llama al endpoint de la API local
      .then(res => res.json())                  // Convierte la respuesta a JSON
      .then(data => setDispositivos(data))      // Guarda los datos en el estado
      .catch(err => console.error(err));        // Captura errores y los muestra en consola
  }, []); // El array vacío asegura que se ejecute solo una vez al montar el componente
  // Renderiza la tabla de dispositivos
  return (
    <div className='container'>
      <h1>Lista de Dispositivos</h1>
      
      {/* Tabla que muestra los dispositivos con sus atributos */}
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
          {/* Recorre el arreglo de dispositivos y genera una fila por cada uno */}
          {dispositivos.map((dispositivo) => (
            <tr key={dispositivo.id}>
              <td>{dispositivo.id}</td>
              <td>{dispositivo.nombre}</td>
              <td>{dispositivo.modelo}</td>
              <td>{dispositivo.estado}</td>
              <td>
                {/* Enlace que lleva a la página de detalle del dispositivo */}
                <Link to={`/dispositivos/${dispositivo.id}`}>Ver Detalle</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
// Exporta el componente para que pueda ser utilizado en el sistema de rutas u otras partes de la app
export default ListaDispositivos;
