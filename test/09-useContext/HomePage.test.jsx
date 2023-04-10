const { render, screen } = require("@testing-library/react")
const { HomePage } = require("../../src/09-useContext/HomePage")
const { UserContex } = require("../../src/09-useContext/context/UserContext")

describe('test on <HomePage/>', () => {
  
    const user = {
        id: 1,
        name: 'Brandon'
    }
   
    test('should component without user', () => {
      
        render(
            <UserContex.Provider value={{ user: null}}>
                <HomePage/>
            </UserContex.Provider>);

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe('null');
    });
   
    test('should component without user', () => {
      
        render(
            <UserContex.Provider value={{ user }}>
                <HomePage/>
            </UserContex.Provider>);

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toContain( user.name );
        expect( preTag.innerHTML ).toContain( `${user.name}`);
    });



    
})
