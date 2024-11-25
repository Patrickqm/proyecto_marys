import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Estilos en línea basados en la paleta de colores
const styles = {
  appContainer: {
    display: 'flex',
    height: '100vh',
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: '#ffe8ff',
  },
  sidebar: {
    width: '250px',
    backgroundColor: '#8890c3',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
  },
  sidebarTitle: {
    fontSize: '1.5em',
    marginBottom: '20px',
    textAlign: 'center',
    borderBottom: '2px solid white',
    paddingBottom: '10px',
  },
  button: {
    backgroundColor: '#dcc8ea',
    color: '#444',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    margin: '10px 0',
    cursor: 'pointer',
    fontSize: '1em',
    textAlign: 'left',
    transition: 'background-color 0.3s ease',
  },
  buttonActive: {
    backgroundColor: '#cdcdcd',
    color: '#000',
  },
  content: {
    flex: 1,
    padding: '20px',
  },
  iframeContainer: {
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  iframe: {
    width: '100%',
    height: '400px',
    border: 'none',
    borderRadius: '10px',
  },
};

const RestaurantDashboard = () => {
  const [activeSection, setActiveSection] = useState('carta'); // Estado para manejar la sección activa

  return (
    <div style={styles.appContainer}>
      {/* Barra lateral */}
      <aside style={styles.sidebar}>
        <h1 style={styles.sidebarTitle}>Menú</h1>
        <button
          style={{
            ...styles.button,
            ...(activeSection === 'carta' ? styles.buttonActive : {}),
          }}
          onClick={() => setActiveSection('carta')}
        >
          Carta
        </button>
        <button
          style={{
            ...styles.button,
            ...(activeSection === 'reportes' ? styles.buttonActive : {}),
          }}
          onClick={() => setActiveSection('reportes')}
        >
          Reportes de Ventas
        </button>
      </aside>

      {/* Contenido principal */}
      <main style={styles.content}>
        {activeSection === 'carta' && (
          <div style={styles.iframeContainer}>
            <h2>Carta</h2>
            <iframe
              title="Carta"
              src="https://app.powerbi.com/view?r=eyJrIjoiNjAyN2RkZDAtOGE3ZS00OTAwLThiOWYtMDc0YzJjMmJlODA2IiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2RhLWQ2OGE2MDA2YTg0YSIsImMiOjR9"
              style={styles.iframe}
            ></iframe>
          </div>
        )}
        {activeSection === 'reportes' && (
          <div style={styles.iframeContainer}>
            <h2>Reportes de Ventas</h2>
            <iframe
              title="Reportes de Ventas"
              src="https://app.powerbi.com/view?r=eyJrIjoiMzM5YTI3Y2YtOWQxZC00NDg3LWIzMzEtMDBhZDUwMWJiZTI3IiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2RhLWQ2OGE2MDA2YTg0YSIsImMiOjR9"
              style={styles.iframe}
            ></iframe>
          </div>
        )}
      </main>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <RestaurantDashboard />
  </React.StrictMode>
);

// Medición de performance
reportWebVitals();

