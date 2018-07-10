export default ({ dispatch }) =>  next => action  => {

    // Check if the action

    // has a promise on its 'payload' property

    // If it does, the wait for it to resolve

    // If it doesn't , then send the action on to the

    // next middleware

    debugger;

    if (!action.payload || !action.payload.then) {

        return next(action);
    }


    // We want to wait for the promise to resolve
    // (get its data) and then create a new action
    // with that data and dispatch it

    action.payload.then(function (response) {

        const newAction = { ...action, payload: response };

        dispatch(newAction);

    });


};




/*

export default function({ dispatch }) {

    return function (next) {

        return function(action) {



        }
    }
}

 */
