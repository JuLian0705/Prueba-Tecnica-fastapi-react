// Importa el hook useRef para crear una referencia a un elemento del DOM
import { useRef } from 'react';
// Importa íconos de barra y cerrar (hamburguesa y cruz) desde react-icons
import { FaBars, FaTimes } from "react-icons/fa";
// Importa los estilos personalizados
import '../Styles/main.css';
// Importa el componente Link de react-router-dom para navegación sin recargar la página
import { Link } from 'react-router-dom';
// Componente funcional Navbar
function Navbar() {
    // Crea una referencia para el elemento <nav>
    const navRef = useRef();
    // Función que alterna la clase CSS para mostrar/ocultar la navegación en modo responsive
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return ( 
        <header>
            {/* Contenedor de navegación. Se le asigna la referencia para manipularlo dinámicamente */}
            <nav ref={navRef}>
                {/* Enlace hacia la página de lista de dispositivos */}
                <Link to="/dispositivos">Lista de Dispositivos</Link>
                {/* Botón para cerrar el menú (icono de X) en vista móvil */}
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            {/* Botón para abrir el menú (icono de barras) en vista móvil */}
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
     );
}
// Exporta el componente para ser utilizado en otras partes de la aplicación
export default Navbar;
