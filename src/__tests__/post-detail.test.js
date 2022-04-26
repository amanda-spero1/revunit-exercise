import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { cleanup, render } from '@testing-library/react';
import { StateMock } from '@react-mock/state';
import PostDetail from '../Posts/post-detail';

function renderComponent(props) {
    return render(
        <BrowserRouter>
            {/* <StateMock state={state}> */}
            <PostDetail post={props.post} />
            {/* </StateMock> */}
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


});
