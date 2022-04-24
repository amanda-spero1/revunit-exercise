import React, { useEffect, useState } from 'react';

let axios = require("axios");

const PostDetail = ({ post }) => {
    console.log(post)
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

    let displayComments = comments.map((comment, i) => {
        return <div key={i}>{comment.body}</div>
    })
    //title, body, and a list of related comments at the bottom
    return (
        <>
            <h3>{post.title}</h3>
            <div>{post.body}</div>
            <div>
                Comments
                {displayComments}
            </div>
        </>

    );
}

export default PostDetail;