import { fireEvent, render, screen } from "@testing-library/react";
import { ListItemTodo } from "../../src/08-useReducer/components/ListItemTodo";

describe('test on <ListItemTodo />', () => {
  
    const todo = {
        id: 1,
        todo: 'Piedra del alma',
        done: false
    };

    const onRemoveTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn(); 

    beforeEach( () => jest.clearAllMocks() );

    test('should show a pending Todo', () => {
        render(
            <ListItemTodo 
                todo={ todo } 
                onRemoveTodo={ onRemoveTodoMock }
                onToggleTodo={ onToggleTodoMock }
            />)

        const liElement = screen.getByRole('listitem');
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');
        
        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className).toContain('align-self-center'); 
        expect( spanElement.className).not.toContain('text-decoration-line-through'); 
        
    });

    test('should show a completed Todo', () => {
        
        todo.done = true;

        render(
            <ListItemTodo 
                todo={ todo } 
                onRemoveTodo={ onRemoveTodoMock }
                onToggleTodo={ onToggleTodoMock }
            />)

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className).toContain('text-decoration-line-through');         
    });

    test('should span have to call onToggleTodo when was clicked', () => {
        render(
            <ListItemTodo 
                todo={ todo } 
                onRemoveTodo={ onRemoveTodoMock }
                onToggleTodo={ onToggleTodoMock }
            />)

        const spanElement = screen.getByLabelText('span');
        fireEvent.click( spanElement );

        expect( onToggleTodoMock ).toHaveBeenCalled();
        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );
    });

    test('should button have to call onRemoveTodo when was clicked', () => {
        render(
            <ListItemTodo 
                todo={ todo } 
                onRemoveTodo={ onRemoveTodoMock }
                onToggleTodo={ onToggleTodoMock }
            />)

        const btn = screen.getByRole('button');
        fireEvent.click( btn );

        expect( onRemoveTodoMock ).toHaveBeenCalled();
        expect( onRemoveTodoMock ).toHaveBeenCalledWith( todo.id );
    });
    
    


})
