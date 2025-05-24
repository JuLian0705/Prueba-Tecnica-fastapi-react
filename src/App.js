// Importamos los módulos necesarios desde la librería react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Importamos el componente Navbar, que probablemente contiene el menú de navegación principal
import Navbar from './components/menu';
// Importamos las páginas que se van a mostrar según la ruta
import ListaDispositivos from './pages/ListaDispositivos';
import DetalleDispositivo from './pages/DetalleDispositivo';
// Componente principal de la aplicación
function App() {
  return (
    // El Router permite definir rutas en la aplicación (navegación entre componentes sin recargar la página)
    <Router>
      {/* Navbar se muestra en todas las páginas */}
      <Navbar />
      {/* Routes contiene todas las rutas disponibles en la app */}
      <Routes>
        {/* Ruta para mostrar la lista de dispositivos */}
        <Route path="/dispositivos" element={<ListaDispositivos />} />
        {/* Ruta para mostrar los detalles de un dispositivo específico (el ID se toma desde la URL) */}
        <Route path="/dispositivos/:id" element={<DetalleDispositivo />} />
      </Routes>
    </Router>
  );
}
// Exportamos el componente App para que pueda ser usado en otros archivos
export default App;
