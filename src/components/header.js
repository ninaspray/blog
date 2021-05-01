import React, { useContext } from 'react';

// contexts
import { ThemeContext } from '../contexts/ThemeContext';

//style 
import {
StyledHeader,
StyleButton,
 } from '../styles/GlobalStyles';

const Header = () => {
    const { setTheme } = useContext(ThemeContext);

    return (
        
                <StyledHeader className="Header">
            <h1 className="header_title">Blog Demo</h1>
            <h2>Introduction to React using a public repo on GitHub</h2>
            <div className="header_button-wrap">
                <StyleButton type="button" onClick={() => setTheme('light')}>
                    light
                </StyleButton>
                <StyleButton primary type="button" onClick={() => setTheme('dark')}>
                    dark
                </StyleButton>
            </div>
            </StyledHeader>
        
    );
};

export default Header;