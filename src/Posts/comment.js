import React from 'react';

const Comment = ({ comment }) => {

    return (
        <div key={comment.id} className="comment-container">
            <div className="comment-item">
                <div className="comment-label">Comment</div>
                <div>{comment.body}</div>
            </div>
            <div className="comment-item">
                <div className="comment-label">Name</div>
                <div>{comment.name}</div>
            </div>
            <div className="comment-item">
                <div className="comment-label">Email</div>
                <div>{comment.email}</div>
            </div>
        </div>
    )
}

export default Comment;