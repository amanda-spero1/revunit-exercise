import React from 'react';
import { useNavigate } from 'react-router-dom';


const PostLink = ({ post }) => {
    //a `posts` list view with a title that navigates to the detail view
    let navigate = useNavigate();

    return (
        <>
            <button type="button" className="post-link" key={post.id} onClick={() => navigate(`/post-detail/${post.id}`)}
            >{post.title} <div>User: {post.userId}</div></button>
        </>
    );
}

export default PostLink;