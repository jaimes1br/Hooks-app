import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {


    const { counter, handleAdd, handleSub, handleReset } = useCounter(7);

    return (
    <>
        <h1>Counter with hook: { counter }</h1>
        <hr />

        <button 
            className="btn btn-dark"
            onClick={ () => handleAdd() }>
                +1
        </button> 
        
        <button 
            className="btn btn-dark"
            onClick={ handleReset }>
                Reset
        </button> 
        
        <button 
            className="btn btn-dark"
            onClick={ () => handleSub(3)}>
                -1
        </button> 
    </>
  )
}
