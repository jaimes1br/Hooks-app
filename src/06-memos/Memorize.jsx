import { useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { Small } from "./Small";

export const Memorize = () => {

    const { counter, handleAdd } = useCounter(1);
    const [show, setshow] = useState(true);
    return (
    <>
        <h1>Counter: <Small value={counter}></Small></h1>
        <hr />

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

