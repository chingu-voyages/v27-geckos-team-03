import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../Components/UserContext";

const PublicRoute = ({ children: Children, ...rest }) => {
  const { loggedIn } = useContext(UserContext);
  return (
    <Route
      {...rest}
      component={(props) =>
        loggedIn ? <Redirect to="/dashboard" /> : <Children {...props} />
      }
    />
  );
};

export default PublicRoute;
