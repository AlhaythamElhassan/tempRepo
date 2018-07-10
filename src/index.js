import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route } from 'react-router-dom';
import Root from 'Root';
import App from 'components/App';

// Set-up redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';

// Searches the index.html in public folder
ReactDOM.render(
    <Root store={createStore(reducers, {})}>
        <BrowserRouter>
             <Route path="/" component={App} />
        </BrowserRouter>
    </Root>,
    document.querySelector('#root')
);


/*
    Jest makes our windows environment similar to the Browser environment
*/