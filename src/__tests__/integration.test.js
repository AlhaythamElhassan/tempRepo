import React from 'react';
import { mount } from 'enzyme';
import Root from 'root';
import App from 'components/App';
import moxios from 'moxios';

let wrapped;

beforeEach(()=> {
    moxios.install(); // Stop axios from making further requests
    // Maxios tells axios not to worry about the API request
    // it states here is your response
    // despite the fact this data is fabricated out of thin air
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{ name: 'Fetched #1'}, { name: 'Fetched #2'}]
    });
});


afterEach(()=> {
    moxios.uninstall();
});


it ('can fetch the entire app and display them', (done) => {

    // Attempt to render the *entire* App
    const wrapped = mount(
        <Root>
            <App/>
        </Root>
    );

    wrapped.find('.fetch-comments').simulate('click');

    // Small pause so that moxois is able to pick up the request

    moxios.wait(() => {

        wrapped.update();

        expect(wrapped.find('li').length).toEqual(2);

        done(); // tell jest we are done
        wrapped.unmount();

    });



});