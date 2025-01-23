import React, {useState} from 'react'



export default function Bloquecomponente() {

  //Propiedad
  const [text,setText] = useState()

  //Propiedad
  const [update,setupdate] = useState()

  
  const textonChange = (event) => {
      setText(event.target.value)
  }

  const buttononClick = (event) => {
      setupdate(text)
  }
 
  return (
    <div>
      <h1>Creacion de Estado en Componente</h1>
      <input type='text' value={text} onChange={textonChange}/>
      <button onClick={buttononClick}>Actualizar</button>
      <p>Texto input: {text}</p>
      <p>Texto Actualizado: {update}</p>

    </div>

  )
}

