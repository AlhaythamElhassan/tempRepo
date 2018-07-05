import React from 'react';
import App from '../App';
import CommentBox from '../CommentBox';
import { shallow, mount, render, configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';


// shallow is a function that renders just the component and none of it's children

it ('shows a comment box', () => {

    var enzyme = require('enzyme');

    // wrapped is the same as component
    const wrapped = shallow(<App />);

    // find is an array
    expect(wrapped.find(CommentBox).length).toEqual(1);


});