import React, { useEffect, useState } from 'react';
import PostLink from '../Posts/post-link';

let axios = require("axios");

const PostsByUser = () => {
    const [posts, setPosts] = useState([]);
    const [userId, setUserId] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    function getPosts() {
        setLoading(true);
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then(response => {
                setError(false);
                setPosts(response.data)
                setLoading(false);
            })
            .catch(error => {
                setError(true);
                console.log(error);
                setLoading(false);
            });

    };

    function handleChange(e) {
        setUserId(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        getPosts();
    }

    return (
        <>
            <h2>Get Posts By User</h2>
            <form>
                <h3>Enter User Id</h3>
                <input type="text" onChange={handleChange} />
                <button type="submit" onClick={handleSubmit}>Get Posts</button>
            </form>
            {posts.length > 0 &&
                <div className="all-posts">
                    {posts.map(post => {
                        return <PostLink post={post} />
                    })}
                </div>
            }
        </>
    )
}

export default PostsByUser;