import React, { useState } from 'react';
import { CommentType } from '../types/comment.type';

const Comment = ({ comment }) => {
    const [voteCounter, setVoteCounter] = useState(0);
    const [isEmailVisible, setIsEmailVisible] = useState(false);

    const handleClick = event => {
       const shouldIncrease = event.target.value === 'increase';
       const newCounterValue = shouldIncrease
       ? voteCounter + 1
       : voteCounter - 1;
       setVoteCounter(newCounterValue);
    };
    const handleReveal = () => setIsEmailVisible(true);
    const handleHide = () => setIsEmailVisible(false)
    return (
        <li key={comment.id} data-testid="comment">
             <div>
                <strong
                    onMouseOver={() => handleReveal()}
                    onFocus={() => handleReveal()}
                    onMouseOut={() => handleHide()}
                    onBlur={() => handleHide()}
                >
                    {comment.name}:{' '}
                </strong>
                {isEmailVisible && <div>{comment.email}</div>}
            </div>
            <p>{comment.body}</p>
            {voteCounter}
            <button
                type="button"
                value="increase"
                onClick={event => handleClick(event)}
            >
                + upvote
            </button>
            <button
                type="button"
                value="decrease"
                onClick={event => handleClick(event)}
            >
                - downvote
            </button>
        </li>
    );
};

Comment.propTypes = CommentType;

export default Comment;