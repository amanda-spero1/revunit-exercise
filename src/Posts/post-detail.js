import React, { useEffect, useState } from 'react';
import Comments from './comments';

let axios = require("axios");

const PostDetail = ({ post }) => {
    const [comments, setComments] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
            .then(response => {
                setError(false);
                setComments(response.data)
                setLoading(false);
            })
            .catch(error => {
                setError(true);
                setLoading(false);
            });

    }, []);

    //For each comment, show the body, name, and email address.
    let displayComments = comments.map(comment => {
        return (
            <Comments comment={comment} />
        )
    });

    //title, body, and a list of related comments at the bottom
    //detail page that displays the title at the top of the screen as well as the body content of the post
    return (
        <div className="main-page">
            <h3>{post.title}</h3>
            <div>{post.body}</div>
            <div className="comments-section">
                {displayComments}
            </div>
        </div>

    );
}

export default PostDetail;