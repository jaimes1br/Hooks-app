import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";


jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');


describe('test on <MultipleCustomHooks>', () => {
  
    const mockHandleAdd = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        handleAdd: mockHandleAdd
    });

    beforeEach( () => {
        jest.clearAllMocks();
    });

    test('should show the default component', () => {
        
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render( <MultipleCustomHooks/>);
        expect( screen.getByText('Loading...'));
        expect( screen.getByText('Rick and Morty characters'));
        
        const nextBtn = screen.getByRole('button',{ name: 'Next character'});
        expect( nextBtn.disabled ).toBeTruthy();
        //   screen.debug()
    });

    test('should show a character', () => {
        
        useFetch.mockReturnValue({
            data: { name: 'Brandon', image: 'url', species:'Human' },
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks/>);
        expect( screen.getByText('Brandon') ).toBeTruthy();

        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe('http://localhost/url');  
        expect( alt ).toBe('Brandon');
        // screen.debug()

        const nextBtn = screen.getByRole('button',{ name: 'Next character'});
        expect( nextBtn.disabled ).toBeFalsy();
    });

    test('should prevBtn to be disable when counter is 1', () => {
        useFetch.mockReturnValue({
            data: { name: 'Brandon', image: 'url', species:'Human' },
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks/>);
        // screen.debug()

        const prevBtn = screen.getByRole('button',{ name: 'Prev character'});
        expect( prevBtn.disabled ).toBeTruthy();
    });

    test('should prevBtn is not disable when counter is greater than 1', () => {
        useFetch.mockReturnValue({
            data: { name: 'Brandon', image: 'url', species:'Human' },
            isLoading: false,
            hasError: null
        });

        useCounter.mockReturnValue({
            counter: 4
        });

        render( <MultipleCustomHooks/>);
        // screen.debug()

        const prevBtn = screen.getByRole('button',{ name: 'Prev character'});
        expect( prevBtn.disabled ).toBeFalsy();
    });
    
    test('should call increment funtion', () => {
        
        useFetch.mockReturnValue({
            data: { name: 'Brandon', image: 'url', species:'Human' },
            isLoading: false,
            hasError: null
        });

        const mockHandleAdd = jest.fn();

        useCounter.mockReturnValue({
            counter: 1,
            handleAdd: mockHandleAdd
        });

        render( <MultipleCustomHooks />);
        
        const nextBtn = screen.getByRole('button',{ name: 'Next character'});
        expect( nextBtn.disabled ).toBeFalsy();
        
        fireEvent.click( nextBtn );

        expect( mockHandleAdd ).toHaveBeenCalled();
        
    });
    
    
    
});
