import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ children: Children, loggedIn, ...rest }) => {
  return (
    <Route
      render={() =>
        loggedIn ? <Children {...rest} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
