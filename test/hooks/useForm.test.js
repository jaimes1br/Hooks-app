import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe('useForm test', () => {
    const initialForm = {
        name: 'Brandon',
        email: 'brandon@test.com'
    };

    test('should return the default value', () => {
      
        const { result } = renderHook(() => useForm( initialForm ));
        expect(result.current).toEqual({
              name: initialForm.name,
              email: initialForm.email,
              formState: { name: initialForm.name, email: initialForm.email },
              handleInputChage: expect.any( Function ),
              handleResetForm: expect.any( Function )
          });
    });

    test('should change the form name ', () => {
      
        const newName = 'Aurora';
        const { result } = renderHook(() => useForm( initialForm ));
        const { handleInputChage } = result.current; 
        
        act(() =>{
            handleInputChage({ target: { name: 'name', value: newName}})
        });

        expect(result.current.name === newName).toBeTruthy();
        expect(result.current.formState.name === newName).toBeTruthy();
    });

    test('should return to the initial form value', () => {
      
        const newName = 'Aurora';
        const { result } = renderHook(() => useForm( initialForm ));
        const { handleInputChage, handleResetForm } = result.current; 
        
        act(() =>{
            handleInputChage({ target: { name: 'name', value: newName}});
            handleResetForm();
        });

        expect(result.current.name).toBe( initialForm.name );
        expect(result.current.formState.email).toBe( initialForm.email );
    });
    
    
});
