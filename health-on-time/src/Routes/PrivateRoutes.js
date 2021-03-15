import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../Components/UserContext";

const PrivateRoute = ({ children: Children, ...rest }) => {
  const { loggedIn } = useContext(UserContext);
  return (
    <Route
      render={() => (loggedIn ? <Children {...rest} /> : <Redirect to="/" />)}
    />
  );
};

export default PrivateRoute;
