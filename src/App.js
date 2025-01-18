
import './App.css';
import './Mensaje.js'
import Component from './Mensaje.js';


//Componente
const Encabezado = () => {
  return <h1>Encabezado de la App</h1>
}

//Componente
const Descripcion = () => {
  return <p>Esta es la app del curso fullstack bootcamp</p>
}


//Funcion
function App() {
 
  const mensaje = 'Titulo de la App'
  const a = 2
  const b = 3

  return (
    <div className="App">
      <h1>{mensaje}</h1>
      <strong>Estamos trabajando en ello</strong>
      <br />
      <div>
        <p>el resultado es:</p>
        {a+b}

      <Encabezado />
      <Descripcion />

      <Component.Titulo />

      <Component.MensajeProp color='red' message='Estamos trabajando' />
      <Component.MensajeProp message='en un curso' />
      <Component.MensajeProp color='blue' message='de React' />

      </div>
      
    </div>
  );
}

export default App;
