import { useState } from "react";
import { useForm } from "../../hooks/useForm";

export const FormAddTodo = ({ onAddNewTodo }) => {

    const { description, handleInputChage, handleResetForm } = useForm({
        description: ''
    });

    const onFormSubmit = ( event ) => {
        event.preventDefault();
        if( description.length  <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            todo: description
        }

        onAddNewTodo( newTodo );
        handleResetForm();
    }

    return (
    <form onSubmit={ onFormSubmit }>
        <input 
            type="text" 
            placeholder="¿Qué hay que hacer?" 
            className="form-control" 
            value={ description }
            name="description"
            onChange={ handleInputChage }

        />

        <button 
            type="submit"
            className="btn btn-outline-dark mt-2">
            Agregar
        </button>
    </form>
  )
}
