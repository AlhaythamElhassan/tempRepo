import React from 'react';
import { mount } from 'enzyme';

// In this file we have to use HTML events

// Components
import CommentList from 'components/CommentList';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from 'reducers';


let wrapped;

beforeEach(()  => {

    const initialState = {
        comments: ['Comment 1', 'Comment 2']
    };

    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    );
});

it ('create one LI per comment', () => {
    expect(wrapped.find('li').length).toEqual(2);
});

it ('shows the text for each comment', () => {

    wrapped.

});