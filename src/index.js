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
  buttonLogout: {
    backgroundColor: '#ff3333', // Color rojo para el botón de logout
    color: '#ffffff',
    border: '2px solid #ffffff',
    padding: '10px 20px',
    borderRadius: '5px',
    fontSize: '1.2em',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '20px',
    textTransform: 'uppercase',
    transition: 'all 0.3s ease',
  },
  buttonLogoutHover: {
    backgroundColor: '#cc0000',
  },
};

// Componente de Login
const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Lista de usuarios y contraseñas (para pruebas)
  const users = [
    { email: 'admin@upsjb.edu.pe', password: '1234' },
    { email: 'juan@upsjb.edu.pe', password: 'admin' },
    { email: 'pedro.leon@upsjb.edu.pe', password: 'admin1' },
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      onLoginSuccess(user); // Llamamos a la función para cambiar el estado
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

// Componente de Dashboard
const InstitutionDashboard = () => {
  const [activeSection, setActiveSection] = useState(''); // 'primaria' o 'secundaria'
  const [user, setUser] = useState(null); // Estado para controlar si el usuario está autenticado

  const dashboardUrls = {
    primaria: 'https://app.powerbi.com/view?r=eyJrIjoiMWQzMjlhMzAtMmJhZi00M2E5LWE2Y2QtNzM0YTUzMmFjNmUwIiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2RhLWQ2OGE2MDA2YTg0YSIsImMiOjR9',
    secundaria: 'https://app.powerbi.com/view?r=eyJrIjoiNDA5NzRmYTQtMDM3OS00OWU2LTliMmYtZDU2NWYxZTMwNDEyIiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2RhLWQ2OGE2MDA2YTg0YSIsImMiOjR9',
  };

  const renderIframe = (src) => (
    <div style={styles.iframeContainer}>
      <iframe title="Dashboard" src={src} style={styles.iframe}></iframe>
    </div>
  );

  const handleLoginSuccess = (loggedUser) => {
    setUser(loggedUser); // Cambia el estado cuando el usuario inicie sesión
  };

  const handleLogout = () => {
    setUser(null); // Restablece el estado del usuario a null cuando hace logout
  };

  return (
    <div style={styles.appContainer}>
      {/* Cabecera */}
      <header style={styles.header}>
        Institución Educativa Privada Señor de la Divina Misericordia, Nazca
      </header>

      {/* Si el usuario no está autenticado, mostrar el login */}
      {!user ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
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

          {/* Botón de cerrar sesión */}
          <button
            style={styles.buttonLogout}
            onClick={handleLogout}
          >
            Cerrar sesión
          </button>
        </div>
      )}
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

