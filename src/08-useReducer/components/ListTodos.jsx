import { ListItemTodo } from "./ListItemTodo"

export const ListTodos = ({ todos = [], onRemoveTodo, onToggleTodo }) => {



  return (
     <ul className="list-group">
        {
            todos.map(todo => (
                <ListItemTodo 
                  onToggleTodo={ onToggleTodo }
                  key={ todo.id } 
                  todo={ todo } 
                  onRemoveTodo={ onRemoveTodo }
                />
            ))
        }
     </ul> 
  )
}


