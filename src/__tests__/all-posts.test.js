import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { cleanup, render } from '@testing-library/react';
import Posts from '../Posts/posts-index';

function renderComponent(props) {
    return render(
        <BrowserRouter>
            <Posts posts={props.posts} />
        </BrowserRouter>
    )
}

afterEach(() => {
    cleanup();
});

describe('All Posts Page', () => {
    let props = {
        posts: [
            {
                body: "Post Body 1",
                id: 1,
                title: "Post Title 1",
                userId: 4
            },
            {
                body: "Post Body 2",
                id: 2,
                title: "Post Title 2",
                userId: 5
            },
            {
                body: "Post Body 3",
                id: 3,
                title: "Post Title 3",
                userId: 6
            }
        ]
    };

    describe('displays all posts', () => {

        test('displays 1st post title', () => {
            const { getByText } = renderComponent(props);
            expect(getByText('Post Title 1')).toBeInTheDocument();
        });

        test('displays 2nd post title', () => {
            const { getByText } = renderComponent(props);
            expect(getByText('Post Title 2')).toBeInTheDocument();
        });

        test('displays 3rd post title', () => {
            const { getByText } = renderComponent(props);
            expect(getByText('Post Title 3')).toBeInTheDocument();
        });
    });

});
