/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicRoute = ({ component: Component, ...rest }) => {
  const isAuth = useSelector(state => state.user.isAuth);
  const lastPage = useHistory().location.state;
  const backPath = lastPage ? lastPage.from : '/';

  return (
    <Route
      {...rest}
      render={props => (isAuth
        ? <Redirect to={{ pathname: backPath, state: { from: props.location.pathname } }} />
        : <Component {...props} />)}
    />
  );
};

PublicRoute.propTypes = {
  component: PropTypes.any.isRequired,
  location: PropTypes.any
};

PublicRoute.defaultProps = {
  location: undefined
};

export default PublicRoute;
