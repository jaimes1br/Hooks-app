import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClick = () => {
        inputRef.current.select();
    }

    return (
    <>

        <h1>Focus Screen</h1>
        <hr />

        <input 
            className="form-control"
            placeholder="Ingrese su nombre"
            ref={ inputRef }
            type="text" 
        />

        <button 
            className="btn btn-dark mt-2"
            onClick={ onClick }
        >
            Set focus
        </button>
      
    </>
  )
}

