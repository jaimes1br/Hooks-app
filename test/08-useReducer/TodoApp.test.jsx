import { render, screen } from "@testing-library/react"
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodo } from "../../src/hooks/useTodo";

jest.mock('../../src/hooks/useTodo')

describe('test on <TodoApp/>', () => {

    useTodo.mockReturnValue({
       
        todos: [
            { id: 1, todo: 'Todo #1', done: false },
            { id: 2, todo: 'Todo #2', done: true }],
        todosCount: 2,
        pendingTodosCount: 1,
        handleAddNewTodo: jest.fn(),
        handleRemoveTodo: jest.fn(),
        handleToggleTodo: jest.fn()
    });

    test('should show the component', () => {
      
        render(<TodoApp/>);
        expect( screen.getByText('Todo #1') ).toBeTruthy();
        expect( screen.getByText('Todo #2') ).toBeTruthy();
        expect( screen.getByRole('textbox') ).toBeTruthy();
    });
    
  
})
