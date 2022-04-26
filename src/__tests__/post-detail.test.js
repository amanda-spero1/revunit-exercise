import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { cleanup, render } from '@testing-library/react';
import { StateMock } from '@react-mock/state';
import PostDetail from '../Posts/post-detail';

function renderComponent(state, props) {
    return render(
        <BrowserRouter>
            <StateMock state={state}>
                <PostDetail post={props.post} />
            </StateMock>
        </BrowserRouter>
    )
}

afterEach(() => {
    cleanup();
});

describe('Post Details Page', () => {
    let props = {
        post:
        {
            body: "Post Body 1",
            id: 1,
            title: "Post Title 1",
            userId: 4
        }
    };

    let state = {
        comments: [
            'comment 1',
            'comment 2',
            'comment 3'
        ]
    };

    describe('displays all posts', () => {


        test('displays post title', () => {
            const { getByText } = renderComponent(props);
            expect(getByText('Post Title 1')).toBeInTheDocument();
        });

        test('displays post body', () => {
            const { getByText } = renderComponent(props);
            expect(getByText('Post Body 1')).toBeInTheDocument();
        });

        test('displays post comments', () => {
            const { getByText } = renderComponent(props);
            expect(getByText('Post Body 1')).toBeInTheDocument();
        });

    });

    describe('displays all comments', () => {

        test('displays post comments', () => {
            const { getByText } = renderComponent(state, props);

            // const { getByText } = renderComponent(props);
            expect(getByText('comment 1')).toBeInTheDocument();
        });

    });

});
