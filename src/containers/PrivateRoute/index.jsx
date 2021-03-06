/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuth = useSelector(state => state.user.isAuth);
  return (
    <Route
      {...rest}
      render={props => (isAuth
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location.pathname } }} />)}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
  location: PropTypes.any
};

PrivateRoute.defaultProps = {
  location: undefined
};

export default PrivateRoute;
