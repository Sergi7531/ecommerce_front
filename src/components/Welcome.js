import { useEffect, useState } from "react";


export default function Welcome(props) {
    const [ counter, setCounter ] = useState(0);
    const [ semaforo, setSemaforo] = useState(false);
    const { name } = props;

    const contar = () => {
        setCounter(counter + 1)
    };

    const cambiarSemaforo = () => {
        setSemaforo(!semaforo)
    }

    useEffect(() => {
        console.log(semaforo)
    }, [semaforo]);

    return (
        <div>
            <p>Hola mundo</p>
            <p>Me llamo {name}</p>
            <h2>Contador React con hooks</h2>
            <h3>El valor de counter es: {counter}</h3>
            <h3>El semaforo está de color {semaforo ? 'rojo' : 'verde'}</h3>
            <button type="submit" onClick={contar}>Sumar contador</button>
            <button type="submit" onClick={cambiarSemaforo}>Semaforo actual</button>
        </div>
    )

}
