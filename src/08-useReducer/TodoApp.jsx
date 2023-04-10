import { ListTodos } from "./components/ListTodos";
import { FormAddTodo } from "./components/FormAddTodo";
import { useTodo } from "../hooks";

export const TodoApp = () => {

    const { todos,todosCount, pendingTodosCount, handleAddNewTodo, handleRemoveTodo, handleToggleTodo } = useTodo();

    return (
    <>
        <h1>Todo App: { todosCount } <small> Pendientes: { pendingTodosCount }</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <ListTodos 
                    todos={ todos } 
                    onRemoveTodo={ handleRemoveTodo }
                    onToggleTodo={ handleToggleTodo }
                />
            </div>
            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                <FormAddTodo onAddNewTodo={ handleAddNewTodo }/>
            </div>
        </div>
    </>
  )
}
