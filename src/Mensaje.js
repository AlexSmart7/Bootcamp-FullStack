//Componente
const Titulo = () => {
    return <h1>Este es el titulo desde un Modulo</h1>
}

//Componente reutilizable
const MensajeProp = (props) => {

    console.log(props)

    return <h1 style={{color: props.color}}>
        {props.message}
        </h1>
} 



const Component = { Titulo, MensajeProp };

export default Component;