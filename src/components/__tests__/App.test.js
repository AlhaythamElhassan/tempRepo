import React from 'react';
import App from '../App'

import { shallow } from 'enzyme';
import CommentBox from '../CommentBox';

// shallow is a function that renders just the component and none of it's children

it ('shows a comment box', () => {

    // wrapped is the same as component
    const wrapped = shallow(<App />);

    console.log(wrapped.find(CommentBox));

    // find is an array

    expect(wrapped.find(CommentBox).length).toEqual(1);




});