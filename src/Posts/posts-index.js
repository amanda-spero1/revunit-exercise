import React from 'react';
import PostLink from './post-link';
import './posts-styles.css';

const Posts = ({ posts }) => {
    let displayedPosts = posts.map(post => {
        return <PostLink post={post} />
    })

    return (
        <div className="main-page">
            <h2>All Posts</h2>
            {displayedPosts}
        </div>
    );
}

export default Posts;