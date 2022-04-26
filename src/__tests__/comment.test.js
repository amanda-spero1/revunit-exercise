import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { cleanup, render } from '@testing-library/react';
import Comment from '../Posts/comment';

function renderComponent(props) {
    return render(
        <BrowserRouter>
            <Comment comment={props.comment} />
        </BrowserRouter>
    )
}

afterEach(() => {
    cleanup();
});

let props = {
    comment: {
        body: 'comment 1',
        id: 1,
        email: 'email@email.com',
        name: 'comment name'
    }
};

describe('displays comment', () => {

    test('displays comment body', () => {
        const { getByText } = renderComponent(props);
        expect(getByText('comment 1')).toBeInTheDocument();
    });

    test('displays comment name', () => {
        const { getByText } = renderComponent(props);
        expect(getByText('comment name')).toBeInTheDocument();
    });

    test('displays comment email', () => {
        const { getByText } = renderComponent(props);
        expect(getByText('email@email.com')).toBeInTheDocument();
    });

});