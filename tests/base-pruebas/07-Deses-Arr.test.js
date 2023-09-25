import { retornaArreglo } from "../../src/bases/07-Deses-Arr"


describe('Pruebas en 07-Deses-Arr', () => { 

    test('debe de retornar un string y un numero', () => { 
       
        const [letters, numbers] = retornaArreglo();

        expect( letters ).toBe( 'ABC' );
        expect( numbers ).toBe( 123 );

        expect( typeof letters ).toBe( 'string' );
        expect( typeof numbers ).toBe( 'number' );
        // console.log(typeof letters);
        // console.log(typeof numbers);

        expect( letters ).toEqual( expect.any(String) )
     })

 })


