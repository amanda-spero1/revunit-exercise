import React, { useState } from 'react';
import PostLink from '../Posts/post-link';
import './posts-by-user-styles.css';

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

    if (error) {
        return <div className="supplementary-message">Error. Please try again.</div>
    }

    if (loading) {
        return <div className="supplementary-message">Loading...</div>
    }

    return (
        <div className="main-page">
            <h2>Get Posts By User</h2>
            <form>
                <label className="user-id-label" for="user-id">Enter User Id</label>
                <input type="text" id="user-id" onChange={handleChange} />
                <button className="get-by-user-button" type="submit" onClick={handleSubmit}>Get Posts</button>
            </form>
            {posts.length > 0 &&
                posts.map(post => {
                    return <PostLink post={post} />
                })
            }
        </div>
    )
}

export default PostsByUser;