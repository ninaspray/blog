import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

import { StyledNavWrap, StyledNav, NavLink } from '../styles/GlobalStyles';

const Navigation = () => {
    const { currentUser, logout } = useAuth();
    const history = useHistory();

    const handleLogout = async event => {
        event.preventDefault();
        await logout();
        history.push('/');
    };

    return (
        <StyledNavWrap>
            <StyledNav>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                {currentUser && (
                    <li>
                        <NavLink to="/create">Create</NavLink>
                    </li>
                )}
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </StyledNav>
            <StyledNav>
                {!currentUser && (
                    <>
                        <li>
                            <NavLink to="/signup">Sign up</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">Log In</NavLink>
                        </li>
                    </>
                )}
                {currentUser && (
                    <li>
                        <NavLink to="/" onClick={handleLogout}>
                            Log out
                        </NavLink>
                    </li>
                )}
            </StyledNav>
        </StyledNavWrap>
    );
};
export default Navigation;