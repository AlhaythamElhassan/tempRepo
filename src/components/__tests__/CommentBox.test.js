import React from 'react';
import { shallow, mount } from 'enzyme';
// Mount is for full Document Full Rendering

// Components
import CommentBox from 'components/CommentBox';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from 'reducers';

import Root from 'Root';

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root store={createStore(reducers, {} )}>
            <CommentBox />
        </Root>
    );
});

// Remove the component from the DOM
afterEach(() => {
    wrapped.unmount;
});

it ('has a text area and a button', () => {

    console.log(wrapped.find('textarea'));
    console.log(wrapped.find('button'));

    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);

});

describe('the text area', () => {

    beforeEach(() => {

        // the simulate method is used to simulate what event we want to test
        wrapped.find('textarea').simulate('change', {target: {value: 'new comment'}});

        wrapped.update();

    });

    it('has a text area that the user can type in ', () => {

        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });


    it ('when form is submitted text area gets emptied', () => {

        wrapped.find('textarea').simulate('change', {
            target: {value: "new comment"}
        });

        // Update the component so that it has the new text
        wrapped.update();

        // When we update the component it should have new comment in the text area
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment')

        // simulate the clicking of the submit button
        wrapped.find('form').simulate('submit');

        // Update so the effects of clicking the submit button are inplace
        wrapped.update();

        // the text area should not be empty
        expect(wrapped.find('textarea').prop('value')).toEqual('');

    });

});

