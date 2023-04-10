import { useEffect, useState } from "react"
import Message from "./Message";

const SimpleForm = () => {

    const [ formState, setFormState ] = useState({
        username: 'zoro',
        email: 'testState@test.com'
    });

    const { username, email } = formState;

    const handleInputChage = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    useEffect(() => {
        // console.log('useEffects called')
    }, []);
    //[] solo se hace una vez y es cuando el componente se manda a llamar o usa
    
    //Se recomienda que se tenga un useEfecte por cada cambio secundario que quiera
    //hacer, por ejemplo que soo este pendiente del fomr
    useEffect(() => {
        // console.log('useEffect form')
    },[ formState ])
    //[ formState ] cuado cambie el formulario, esa es su dependencia

    // pendiente solo del correo
    useEffect(() => {
        // console.log('useEffect email')
    },[ email ])
    

    // useEffect(() => {
    //     //cuerpo

    //     //funcion de limpieza
    //     return{

    //     }
    // },[])

    return (
    <>
      <h1>Simple form</h1>
      <hr />

      <input 
        className="form-control"
        name="username" 
        placeholder="Username"
        type="text"
        value={ username }
        onChange={ handleInputChage }
      />
      {

        (username === 'zoro1') && <Message/>
      }
        <input 
            type="text"
            className="form-control mt-2"
            placeholder="test@test.com"
            onChange={ handleInputChage }
            name="email" 
            value={ email }
        />
    </>
  )
}

export default SimpleForm
