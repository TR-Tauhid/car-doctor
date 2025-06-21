import React, { useContext, useEffect } from "react";
import Loading from "../components/Loading";
import AuthContext from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";

export default function PrivateRouter({ children }) {
  const location = useLocation();
  const authValue = useContext(AuthContext);
  const { loading, user, theme, notify, authChecked } = authValue;

  useEffect(() => {
    if (authChecked && !user) {
      notify("Please log in first...!!!", "error");
    }
  }, [authChecked, user, notify]);

  if (loading) {
    return <Loading theme={theme}></Loading>;
  }

  if (user) {
    return children;
  }
  
  return <Navigate state={{ from: location.pathname }} to="/login"></Navigate>;
}
