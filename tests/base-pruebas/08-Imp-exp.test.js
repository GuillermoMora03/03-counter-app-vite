import { getHeroeById, getHeroresByOwner } from "../../src/bases/08-Imp-exp";


describe('pruebas en 08-Imp-exp', () => { 

    test('getHeroeById debe retornar un heroe por id', () => { 
        
        const id = 1;
        const hero = getHeroeById( id );

        expect( hero ).toEqual({ id: 1,
            name: 'Batman',
            owner: 'DC' })
        });
    test('getHeroeById debe retornar undefined si no existe', () => { 
        
        const id = 100;
        const hero = getHeroeById( id );

        expect( hero ).toBeFalsy()
    });


    //Tarea;
    // getHeroresByOwner

    test(' getHeroresByOwner debe de retornar un arreglo con los heroes de dc', () => { 
                
        const owner = 'DC';
        const heroes = getHeroresByOwner( owner );
        
        expect( heroes.length ).toBe( 3 );
        expect( heroes ).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);

        expect( heroes ).toEqual( heroes.filter( (hero) => hero ) )

     });
    test(' getHeroresByOwner debe de retornar un arreglo con los heroes de dc', () => { 
                
        const owner = 'Marvel';
        const heroes = getHeroresByOwner( owner );
        
        expect( heroes.length ).toBe( 2 );        
        expect( heroes ).toEqual( heroes.filter( (hero) => hero ) )

     });


});
