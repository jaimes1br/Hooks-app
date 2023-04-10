import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = ( iterationNum = 100 ) =>{
    for (let index = 0; index < iterationNum; index++) {
        console.log('estamos en el loop');        
    }

    return `${iterationNum} iterations made`
} 

export const MemoHook = () => {

    const { counter, handleAdd } = useCounter(400);
    const [show, setshow] = useState(true);
    
    const memorizedValue =  useMemo(() => heavyStuff(counter), [counter])

    return (
    <>
        <h1>Counter: <small>{ counter }</small></h1>
        <hr />

        <h4>{ memorizedValue }</h4>

        <button 
            className="btn btn-dark"
            onClick={ () => handleAdd() }>
                +1
        </button>

        <button
            className="btn btn-dark"    
            onClick={() => setshow(!show)}>
            Show/Hide {JSON.stringify(show)}
        </button>
    </>
  )
}

