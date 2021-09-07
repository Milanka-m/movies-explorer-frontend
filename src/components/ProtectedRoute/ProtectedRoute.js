import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ loggedIn, ...routeProps }) => {
  const token = localStorage.getItem('token');
  return token ? <Route {...routeProps} /> : <Redirect to="/" />;
};

export default ProtectedRoute;