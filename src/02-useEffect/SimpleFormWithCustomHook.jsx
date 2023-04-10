import { useEffect, useState } from "react"
import Message from "./Message";
import { useForm } from "../hooks/useForm";

const SimpleFormWithCustomHook = () => {

    const { formState,username, email, password,handleInputChage,handleResetForm } = useForm({
      username: '',
      email: '',
      password: ''
    });

    return (
    <>
      <h1>Simple form with Custom Hook</h1>
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
        
        <input 
        className="form-control mt-2"
        name="password" 
        placeholder="password"
        type="text"
        value={ password }
        onChange={ handleInputChage }
      />

      <button 
        className="btn btn-dark mt-2"
        onClick={ handleResetForm }>
          Clear
      </button>
    </>
  )
}

export default SimpleFormWithCustomHook
