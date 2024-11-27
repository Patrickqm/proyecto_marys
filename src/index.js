import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// Estilos en línea
const styles = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: '#000000', // Fondo negro
    color: '#ffffff', // Texto blanco
  },
  header: {
    backgroundColor: '#ffffff', // Fondo blanco
    color: '#000000', // Texto negro
    textAlign: 'center',
    padding: '20px 0',
    fontSize: '2em',
    fontWeight: 'bold',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
    textTransform: 'uppercase',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: '20px',
  },
  sectionButton: {
    backgroundColor: '#ffffff', // Fondo blanco
    color: '#000000', // Texto negro
    border: '2px solid #ffffff',
    padding: '15px 30px',
    borderRadius: '5px',
    fontSize: '1.2em',
    fontWeight: 'bold',
    cursor: 'pointer',
    margin: '10px',
    textTransform: 'uppercase',
    transition: 'all 0.3s ease',
  },
  sectionButtonActive: {
    backgroundColor: '#000000', // Fondo negro
    color: '#ffffff', // Texto blanco
    border: '2px solid #ffffff',
  },
  iframeContainer: {
    textAlign: 'center',
    backgroundColor: '#ffffff', // Fondo blanco
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0px 4px 8px rgba(255, 255, 255, 0.1)',
    marginTop: '20px',
    width: '90%', // Aumenta el tamaño
    height: '80vh', // Tamaño dinámico basado en la ventana
  },
  iframe: {
    width: '100%',
    height: '100%',
    border: 'none',
    borderRadius: '10px',
  },
};

const InstitutionDashboard = () => {
  const [activeSection, setActiveSection] = useState(''); // 'primaria' o 'secundaria'

  const dashboardUrls = {
    primaria: 'https://app.powerbi.com/view?r=eyJrIjoiMWQzMjlhMzAtMmJhZi00M2E5LWE2Y2QtNzM0YTUzMmFjNmUwIiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2RhLWQ2OGE2MDA2YTg0YSIsImMiOjR9',
    
    secundaria: 'https://app.powerbi.com/view?r=eyJrIjoiNDA5NzRmYTQtMDM3OS00OWU2LTliMmYtZDU2NWYxZTMwNDEyIiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2RhLWQ2OGE2MDA2YTg0YSIsImMiOjR9',
  };

  const renderIframe = (src) => (
    <div style={styles.iframeContainer}>
      <iframe title="Dashboard" src={src} style={styles.iframe}></iframe>
    </div>
  );

  return (
    <div style={styles.appContainer}>
      {/* Cabecera */}
      <header style={styles.header}>
        Institución Educativa Privada Señor de la Divina Misericordia, Nazca
      </header>

      {/* Cuerpo principal */}
      <div style={styles.main}>
        {/* Botones de secciones */}
        <button
          style={{
            ...styles.sectionButton,
            ...(activeSection === 'primaria' && styles.sectionButtonActive),
          }}
          onClick={() => setActiveSection('primaria')}
        >
          Primaria
        </button>
        <button
          style={{
            ...styles.sectionButton,
            ...(activeSection === 'secundaria' && styles.sectionButtonActive),
          }}
          onClick={() => setActiveSection('secundaria')}
        >
          Secundaria
        </button>

        {/* Dashboard activo */}
        {activeSection === 'primaria' && renderIframe(dashboardUrls.primaria)}
        {activeSection === 'secundaria' && renderIframe(dashboardUrls.secundaria)}
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <InstitutionDashboard />
  </React.StrictMode>
);

reportWebVitals();
