import { render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en <CounterApp />', () => { 

    const value = 20;

    test('debe de hacer match con el snapshot', () => { 

        const { container } = render( <CounterApp value={ value } /> );
        expect( container ).toMatchSnapshot();

     });

     test('debe de mostrar el valor incial de 100', () => { 
        
        render(
            <CounterApp value={ 100 } /> );
           expect( screen.getByText('100') ).toBeTruthy();

        //    expect( screen.getByRole('heading', { level: 2 }).innerHTML ).toContain('100');

      });

 });
