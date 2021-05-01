import React from 'react';
import PropTypes from 'prop-types';

import { StyledButtonSmall, StyledLikeWrapper } from '../styles/GlobalStyles';

const LikeCounter = ({ likeCounter, 
    handleIncreaseLike, 
    handleDecreaseLike }) => {
        return (
            <StyledLikeWrapper>
            <span className="like-wrapper__counter">{likeCounter}</span>
            <StyledButtonSmall
                className="like-wrapper__button"
                type="button"
                onClick={() => handleIncreaseLike()}
            >
                    +
                    </StyledButtonSmall>
                {likeCounter > 0 && (
                    <StyledButtonSmall
                        type="button"
                        data-testid="decreaseButton"
                        onClick={() => handleDecreaseLike()}
                    >
                        -
                    </StyledButtonSmall>
                )}
        </StyledLikeWrapper>
        );
    };    

export default LikeCounter;

LikeCounter.propTypes = {
    likeCounter: PropTypes.number.isRequired,
    handleDecreaseLike: PropTypes.func.isRequired,
    handleIncreaseLike: PropTypes.func.isRequired,
}
