import React, {  useEffect } from "react";
import Loading from "../components/Loading";
import AuthContext from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";

export default function PrivateRouter({ children }) {
  const location = useLocation();
  const authValue = useAuth();
  const { loading, user, theme, notify } = authValue;

  useEffect(() => {
    if (!loading && !user) {
      notify("Please log in first...!!!", "error");
    }
  }, [loading, user, notify]);

  if (loading) {
    return <Loading theme={theme}></Loading>;
  }

  if (user) {
    return children;
  }

  return <Navigate state={{ from: location.pathname }} to="/login"></Navigate>;
}
