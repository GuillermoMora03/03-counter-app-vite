import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en <CounterApp />', () => { 

    const value = 10;

    test('debe de hacer match con el snapshot', () => { 

        const { container } = render( <CounterApp value={ value } /> );
        expect( container ).toMatchSnapshot();

     });

     test('debe de mostrar el valor incial de 100', () => { 
        
        render( <CounterApp value={ 100 } /> );
           expect( screen.getByText(100) ).toBeTruthy();
        //    expect( screen.getByRole('heading', { level: 2 }).innerHTML ).toContain('100');

      });

      test('debe de incrementar con el boton +1', () => { 
        
        render( <CounterApp value={ value } /> );
        fireEvent.click(screen.getByRole('button', { name: 'btn-add' }))
        expect( screen.getByText('11') ).toBeTruthy();

       });

      test('debe decrementar con el boton -1', () => { 
        
        render( <CounterApp value={ value } /> );
        fireEvent.click(screen.getByRole('button', { name: 'btn-substract' }))
        // screen.debug();
        expect( screen.getByText('9') ).toBeTruthy();

       });

      test('debe de funcionar el boton de reset', () => { 
        
        render( <CounterApp value={ 355 } /> );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        // fireEvent.click( screen.getByText('Reset') );
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }))
        // screen.debug();
        // expect( screen.getByText(355) ).toBeTruthy();

       });

 });
