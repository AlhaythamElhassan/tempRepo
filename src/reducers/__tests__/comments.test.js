import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from "actions/types";


it('handles acions of type SAVE_COMMENT', () => {

   const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment' // payload is the return type
   };

   const newState = commentsReducer([], action);

   expect(newState).toEqual(['New Comment']);

});

it ('handles actions with unknown type', () => {

  const newState =  commentsReducer([], { type: "readysteady" });

  expect(newState).toEqual([]);

});