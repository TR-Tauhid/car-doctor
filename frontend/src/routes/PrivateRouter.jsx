import React, { useContext, useEffect } from "react";
import Loading from "../components/Loading";
import AuthContext from "../Context/AuthContext";
import { Navigate } from "react-router";

export default function PrivateRouter({ children }) {
  const authValue = useContext(AuthContext);
  const { loading, user, theme, notify } = authValue;

  useEffect(() => {
    if (!user) {
      notify("You must be logged in to access this route...!!!", "error");
    }
  }, [user, notify]);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (loading) {
    return <Loading theme={theme}></Loading>;
  }

  return children;
}
