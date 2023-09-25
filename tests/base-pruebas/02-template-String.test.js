import { getSaludo } from "../../src/bases/02-template-String";


describe('Pruebas en 02-template-String', () => { 
    
   test('get saludo debe de retornar "Hola Guillermo"', () => { 

    const name = 'Guillermo';
    const message = getSaludo( name );

    expect( message ).toBe(`Hola ${name}`);

    }) 
 })