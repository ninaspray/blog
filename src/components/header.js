import React, { useContext } from 'react';

// contexts
import { ThemeContext } from '../contexts/ThemeContext';

//style 
import { PageContainer,
StyledHeader,
StyleButton,
 } from '../styles/GlobalStyles';

const Header = () => {
    const { setTheme } = useContext(ThemeContext);

    return (
        
        <PageContainer>
                <StyledHeader className="App-header">
            <h1>Blog Demo</h1>
            <h2>Introduction to React using a public repo on GitHub</h2>
            <div>
                <StyleButton type="button" onClick={() => setTheme('light')}>
                    light
                </StyleButton>
                <StyleButton type="button" onClick={() => setTheme('dark')}>
                    dark
                </StyleButton>
            </div>
            </StyledHeader>
        </PageContainer>
        
    );
};

export default Header;