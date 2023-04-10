import { todoReducer } from '../../src/08-useReducer/todoReducer';


describe('test on todoReducer.js', () => {
  
    const initialState = [{
        id: 1,
        todo: 'Demo todo',
        done: false
    }]

    test('should return the initial value', () => {
        
        const newState = todoReducer( initialState, {});
        expect( newState ).toBe( initialState );
    });

    test('should add a new todo', () => {
      
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                todo: 'Demo todo #2',
                done: false
            }
        };

        const newState = todoReducer( initialState, action);
        expect( newState.length ).toBe( 2 );
        expect( newState ).toContain( action.payload );
    });

    test('should remove a new todo', () => {
      
        const action = {
            type: '[TOOD] Remove Todo',
            payload: 1
        };

        const newState = todoReducer( initialState, action);
        expect( newState.length ).toBe( 0 );
    });

    test('should use toggle form todo', () => {
       
        const action = {
            type: '[TOOD] Toggle Todo',
            payload: 1
        };

        const newState = todoReducer( initialState, action);
        expect( newState.length ).toBe( 1 );
        expect( newState[0].done).toBe( true );
        
        const newState2 = todoReducer( newState, action);
        expect( newState2[0].done).toBe( false );

    });
    
    
    
})
