import PropTypes from 'prop-types';
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


    // Display details if:
    // - identity consent was not supported when user posted,
    // - identity consent was supported and user consented
    //   to publish their details.
    // - Adding functionality of the  
    const displayDetails =
        !('identityConsent' in comment) || comment.identityConsent;




    return (
        <li data-testid="comment">
             <div>
                <strong
                    onMouseOver={() => handleReveal()}
                    onFocus={() => handleReveal()}
                    onMouseOut={() => handleHide()}
                    onBlur={() => handleHide()}
                >
                    {displayDetails ? comment.name : 'Anonymous author'}:{' '}
                </strong>
                {displayDetails && isEmailVisible && <div>{comment.email}</div>}
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

Comment.propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        body: PropTypes.string,
        email: PropTypes.string,
        identityConsent: PropTypes.bool,
    }).isRequired,
};

export default Comment;