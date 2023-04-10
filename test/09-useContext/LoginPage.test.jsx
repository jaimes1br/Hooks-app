import { fireEvent, render, screen } from "@testing-library/react";
import { UserContex } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe('test on <LoginPage/>', () => {
    
    test('should show the component without user', () => {
        render(
            <UserContex.Provider value={{ user: null}}>
                <LoginPage/>
            </UserContex.Provider>);

            
        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe('null');
    });

    test('should show the user when click on the button', () => {
        const setUserMock = jest.fn();

        render(
            <UserContex.Provider value={{ user: null, setuser: setUserMock}}>
                <LoginPage/>
            </UserContex.Provider>);

            
        const btnSet = screen.getByLabelText('btn-set');
        fireEvent.click(btnSet);

        expect( setUserMock ).toHaveBeenCalled();
        expect( setUserMock ).toHaveBeenCalledWith({ id: 123, name: 'brandon'});        
    });   
});
