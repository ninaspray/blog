import React from 'react';
import { useAuth } from '../contexts/AuthContext';


import { 
StyledNav,
StyledNavWrap,
NavLink, } from '../styles/GlobalStyles';


const Navigation = () => {
    const { currentUser } = useAuth();
    return (
        <StyledNavWrap>
            <StyledNav>
                <li>
                    <NavLink to="/">Home  </NavLink>
                    <></>
                  {currentUser && (
                      <li>
                          <NavLink to="/">Home</NavLink>
                    </li>
                  )}
                    <NavLink to="/about">About  </NavLink>
                    <></>
                    <NavLink to="/contact">Contact  </NavLink>
                </li>
                </StyledNav>
                {!currentUser && (
                <StyledNav>
                    <li>
                        <NavLink to="/signup">Signup</NavLink>
                    </li>
                </StyledNav>
            )}
        </StyledNavWrap>
    );
};
export default Navigation;