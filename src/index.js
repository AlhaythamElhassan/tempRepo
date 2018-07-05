import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// Set-up redux
import { Providers } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';


// When we import a directory it by default imports index.js

// Searches the index.html in public folder
ReactDOM.render(
    <Provider store={createStore(reducers, {})}>
        <App/>
    </Provider>,
    document.querySelector('#root'));


/*

    Jest makes our windows environment similar to the Browser environment

*/