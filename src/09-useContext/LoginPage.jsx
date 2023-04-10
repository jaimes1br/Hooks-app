import { useContext } from "react";
import { UserContex } from "./context/UserContext";

export const LoginPage = () => {
  const { user, setuser } = useContext( UserContex ); 
  console.log(user);
   
  return (
    <>
        <h1>LoginPage</h1>
        <hr />

        <pre aria-label="pre">
          { JSON.stringify(user, null, 3)}
        </pre>

        <button 
          aria-label="btn-set"
          className="btn btn-dark"
          onClick={() => setuser({ id: 123, name: 'brandon'})}>
        
          Establecer user
        </button>
    </>
  )
}
