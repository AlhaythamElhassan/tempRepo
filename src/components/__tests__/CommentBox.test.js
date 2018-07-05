import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'component/CommentBox';

it ('has a text area and a button', () => {

    // Mount is for full Document Full Rendering

    const wrapped = mount(<CommentBox/>);

    console.log(wrapped.find('textarea'));
    console.log(wrapped.find('button'));

    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1 );



});
