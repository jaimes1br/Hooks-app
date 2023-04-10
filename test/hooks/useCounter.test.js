import { act, renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter"

describe('useCounter hook test', () => {
  
    test('should return default values', () => {
      
        const { result } = renderHook(() => useCounter());
        const { counter, handleAdd, handleSub, handleReset } = result.current;

        expect( counter ).toBe(10);
        expect( handleAdd ).toEqual( expect.any( Function ));
        expect( handleReset ).toEqual( expect.any( Function ));
        expect( handleSub ).toEqual( expect.any( Function ));
    });

    test('should generate the counter with counter value 100', () => {
        
        const value = 100;
        const { result } = renderHook(() => useCounter(value));
        const { counter } = result.current;

        expect( counter ).toBe(value);
    });

    test('should add 1 to initial value', () => {
        
        const initialValue = 10
        const { result } = renderHook(() => useCounter( initialValue ));
        const { handleAdd } = result.current;

        act(() => { handleAdd() });

        expect( result.current.counter ).toBe(initialValue + 1);
    });
    
    test('should subtract 2 from initial value', () => {
        
        const initialValue = 13
        const { result } = renderHook(() => useCounter( initialValue ));
        const { handleSub } = result.current;

        act(() => { handleSub(2) });

        expect( result.current.counter ).toBe(initialValue - 2);
    });
    
    test('should reset the counter to initial value', () => {
        
        const initialValue = 13
        const { result } = renderHook(() => useCounter( initialValue ));
        const { handleAdd, handleReset } = result.current;

        act(() => { 
            handleAdd(4);
            handleReset();
        });

        expect( result.current.counter ).toBe(initialValue);
    });
});
