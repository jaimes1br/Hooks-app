export const ListItemTodo = ({ todo, onRemoveTodo, onToggleTodo }) => {

  return (
        <li className="list-group-item d-flex justify-content-between">
            <span 
              aria-label="span"
              onClick={() => onToggleTodo( todo.id)}
              className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through': ''}`}>
                { todo.todo }
            </span>
            
            <button 
              className="btn btn-danger" 
              onClick={() => onRemoveTodo( todo.id )}>
                Borrar
            </button>

        </li>
  )
}
