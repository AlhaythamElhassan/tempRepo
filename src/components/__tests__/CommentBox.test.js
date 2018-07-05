import React from 'react';
import { mount } from 'enzyme';

// Components
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
    wrapped = mount(<CommentBox />);
});

// Remove the component from the DOM
afterEach(() => {
    wrapped.unmount();
});

it ('has a text area and a button', () => {

    // Mount is for full Document Full Rendering
    const wrapped = mount(<CommentBox/>);

    console.log(wrapped.find('textarea'));
    console.log(wrapped.find('button'));

    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);

});
