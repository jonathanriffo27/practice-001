import './App.css';
const image = require('./img/Captura de Pantalla 2022-07-30 a la(s) 10.36.03.png');

function App() {
  return (
    <div className="App">
      <form>
        <img src={image} alt="Logo empresa" />
        <div class="input-container">
          <input type="email" id="email" required />
          <label for="email">Correo electronico</label>
        </div>
        <div class="input-container">
          <input type="password" id="password" required />
          <label for="password">Contraseña</label>
        </div>
        <button>Ingresar</button>
      </form>
      <div className='link'>
        <a href="www.google.com">Olvide mi contraseña</a>
      </div>
    </div>
  );
}

export default App;
