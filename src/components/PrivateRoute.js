import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ children, ...rest }) => {
    const { currentUser } = useAuth();

    return currentUser ? (
        <Route {...rest}>{children}</Route>
    ) : (
        <Redirect to="/" />
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
};

PrivateRoute.defaultProps = {
    children: undefined,
};

export default PrivateRoute;