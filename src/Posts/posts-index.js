import React, { useEffect, useState } from 'react';
import PostLink from './post-link';
import './posts-styles.css';


const Posts = ({ posts }) => {

    let displayedPosts = posts.map(post => {
        return <PostLink post={post} />
    })

    return (
        <div className="all-posts">
            {displayedPosts}
        </div>
    );
}

export default Posts;