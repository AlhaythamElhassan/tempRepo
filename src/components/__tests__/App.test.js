import React from 'react';
import App from '../App';
import { shallow, mount, render, configure } from 'enzyme';

// Components
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';


let wrapped;

// Common set-up logic
// before every single test
beforeEach(() => {

    // shallow is a function that renders just the component and none of it's children
    // wrapped is the same as component
    wrapped = shallow(<App />);
});

it ('shows a comment box', () => {

    // find is an array
    // Length means
    expect(wrapped.find(CommentBox).length).toEqual(1);

});


it('shows at least one comment list on page ', () => {

    console.log(wrapped.find(CommentList));

    expect(wrapped.find(CommentList).length).toEqual(1);

});

