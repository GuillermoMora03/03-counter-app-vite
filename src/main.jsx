import React, { StrictMode } from 'react';
import ReactDom from 'react-dom/client';
// import { HelloWorldApp } from './HelloWorldApp';
// import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';
import './styles.css'



ReactDom.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/* <FirstApp title='Hola, Soy Vegeta' /> */}
        <CounterApp value={ 10 } />    
    </React.StrictMode>
)

