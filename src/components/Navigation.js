import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

import { PageContainer } from '../styles/GlobalStyles';

const StyledNavWrap = Styled.nav`
height: 4 rem;
display: flex;
align-items: center;
background-color: #A8577E;
`;

const StyledNav = Styled.ul`
list-style: none;
display: inline-flex;
li:not(:last-of-type){
    margin-right: 3rem;
}
a {
    position: relative;
    font-size: 2rem;
    color: #F5D7E3;


    &::after{
        content: '';
        display: block;
        background-color: #F5D7E3;
        width: 0%;
        transition: width 0.5s;
    }
    &:hover::after {
        width: 100%;
    }
}
`;

const Navigation = () => {
    return (
        <StyledNavWrap>
            <PageContainer>
            <StyledNav>
                <li>
                    <Link to="/">Home  </Link>
                    <></>
                    <Link to="/create">Create  </Link>
                    <></>
                    <Link to="/about">About  </Link>
                    <></>
                    <Link to="/contact">Contact  </Link>
                </li>
            </StyledNav>
            </PageContainer>
        </StyledNavWrap>
    );
};
export default Navigation;