import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Loading from "../components/Loading";

export default function PrivateRouter({ children }) {
  const authValue = useContext(AuthContext);
  const { loading, user, theme } = authValue;

  if (loading) {
    return <Loading theme={theme} ></Loading>;
  }

  if (!user) {
    window.location.href = "/login";
    return null
  }

  return <>{children}</>;
}
