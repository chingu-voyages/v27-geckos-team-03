import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div>
    <h1>404 Page not found</h1>
    <Link to="/">Go Home</Link>
  </div>
);

export default NotFoundPage;
