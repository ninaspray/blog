import React from 'react';


import { 
StyledNav,
StyledNavWrap,
NavLink, } from '../styles/GlobalStyles';


const Navigation = () => {
    return (
        <StyledNavWrap>
            
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
        </StyledNavWrap>
    );
};
export default Navigation;