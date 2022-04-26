import React from 'react';

const PostLink = ({ post }) => {
    //a `posts` list view with a title that navigates to the detail view
    return (
        <>
            <a href={`/post-detail/${post.id}`} className="post-link" key={post.id}>
                {post.title}
            </a>
        </>
    );
}

export default PostLink;