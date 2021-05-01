import React from 'react';
import Styled from 'styled-components';

import { PageContainer,
StyledNav,
NavLink,
ColourPalette, } from '../styles/GlobalStyles';

const StyledNavWrap = Styled.nav`
height: 4 rem;
display: flex;
align-items: center;
background-color: ${ColourPalette.Pink};
`;


const Navigation = () => {
    return (
        <StyledNavWrap>
            <PageContainer>
            <StyledNav>
                <li>
                    <NavLink to="/">Home  </NavLink>
                    <></>
                    <NavLink to="/create">Create  </NavLink>
                    <></>
                    <NavLink to="/about">About  </NavLink>
                    <></>
                    <NavLink to="/contact">Contact  </NavLink>
                </li>
            </StyledNav>
            </PageContainer>
        </StyledNavWrap>
    );
};
export default Navigation;