import logo from './proyectos/sources/logo.png';
import './App.css';
import './fondo.css';
import './header.css';
function App() {
  return (
    <div className="App">
      <header className="header">
      <nav className="nav">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        
      </nav>
    </header>
    </div>
  );
}

export default App;
