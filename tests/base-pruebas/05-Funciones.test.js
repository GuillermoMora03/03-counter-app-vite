import { getUser, getUsuarioActivo } from "../../src/bases/05-Funciones";

describe('Pruebas en 05-Funciones', () => { 
    
    test('getUser debe de retornar un objeto', () => { 
        
        const testUser = {    
            uId: 'ABC123',
            username: 'El_Papi'    
        };

        const user = getUser();

        expect( testUser ).toEqual( user )
    })

    test('getUsuarioActivo debe de retornar un objeto', () => { 

        const name = 'Guillermo';                         
        const userActive = getUsuarioActivo(name);

        expect( userActive ).toEqual({    
            uid: 'ABC54',
            username: name,    
        });        

     })

 })