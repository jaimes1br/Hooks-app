import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
    const [ counter, setcounter ] = useState(10);

    //el value viene desde on click del button del showIncrement
    const handleAdd = useCallback((value) => {
        setcounter( (currentValue) => currentValue + value)
    },[])


    return (
    <>
      <h1>useCallbak hook: { counter }</h1>
      <hr />

      <ShowIncrement increment={ handleAdd }/>
    </>
  )
}

