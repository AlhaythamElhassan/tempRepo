import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// Set-up redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';

// Searches the index.html in public folder
ReactDOM.render(
    <Provider store={createStore(reducers, {})}>
        <App/>
    </Provider>,
    document.querySelector('#root')
);


/*

    Jest makes our windows environment similar to the Browser environment

*/