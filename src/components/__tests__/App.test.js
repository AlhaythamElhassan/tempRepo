import React from 'react';
import App from '../App';
import { shallow, mount, render, configure } from 'enzyme';

//Components
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

// shallow is a function that renders just the component and none of it's children
it ('shows a comment box', () => {

    // wrapped is the same as component
    const wrapped = shallow(<App />);

    console.log(wrapped.find(CommentBox));

    // find is an array
    // Length means
    expect(wrapped.find(CommentBox).length).toEqual(1);


});


it("shows at least one comment list on page ", () => {

    const component = shallow(<App/>);

    console.log(component.find(CommentList));

    expect(component.find(CommentList).length).toEqual(1);

});

