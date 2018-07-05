import React from 'react';
import { mount } from 'enzyme';

// In this file we have to use HTML events

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

describe('the text area', () => {

    //
    beforeEach(() => {

        // the simulate method is used to simulate what event we want to test
        wrapped.find('textarea').simulate('change', {target: {value: 'new comment'}});

        wrapped.update();

    });

    it('has a text area that the user can type in ', () => {

        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });


    it('when form is submitted text area gets emptied', () => {

        wrapped.find('textarea').simulate('changed', {
            target: {value: "new comment"}
        });

        wrapped.update();

        expect(wrapped.find('textarea').prop('value')).toEqual()

        wrapped.find('form').simulate('submit');
        wrapped.update();

        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');

    });
});

/*
 line 37 is b

  handleChange = { target: { value: 'new comment'} => {

        this.setState({ comment: event.target.value })
    };

*/