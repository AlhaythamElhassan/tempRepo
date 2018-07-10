import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import reduxPromise from 'redux-promise';
import stateValidators from 'middlewares/stateValidator';

// our middleware
import async from 'middlewares/async';


export default ({ children, initialState }) => {

    const store = createStore(
            reducers,
            initialState,
            applyMiddleware(async, stateValidators)
    );

    return (
        <Provider store={ store }>
            { children }
        </Provider>
    );
};