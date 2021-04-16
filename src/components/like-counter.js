import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const LikeCounter = ({ likeCounter, 
    handleIncreaseLike, 
    handleDecreaseLike }) => {
    return (
        <>
        <span>{likeCounter}</span>
        <button type="button" onClick={() => handleIncreaseLike()}>
            +
        </button>
        {likeCounter > 0 && (
                                <button
                                type="button"
                                data-testid="decreaseButton"
                                onClick={() => handleDecreaseLike()}
                            >
                                -
                                </button>
        )}
        </>
    );
};

export default LikeCounter;

// eslint-disable-next-line react/no-typos
LikeCounter.propTypes = {
    likeCounter: PropTypes.number.isRequired,
    handleDecreaseLike: PropTypes.func.isRequired,
    handleIncreaseLike: PropTypes.func.isRequired,

}
