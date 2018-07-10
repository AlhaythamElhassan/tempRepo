import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// Set-up redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';

import Root from 'Root';

// Searches the index.html in public folder
ReactDOM.render(
    <Root store={createStore(reducers, {})}>
        <App/>
    </Root>,
    document.querySelector('#root')
);


/*
    Jest makes our windows environment similar to the Browser environment
*/