import { useCallback, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  TwitterAuthProvider,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import { Bounce, toast } from "react-toastify";

import AuthContext from "../Context/AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("");
  const [cart, setCart] = useState([]);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`("prefers-color-scheme: dark")`);
    setTheme(mediaQuery ? "dark" : "light");
  }, []);

  const notify = useCallback((msg, type) => {
    toast[type](msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: `${theme}`,
      transition: Bounce,
    })}, [theme]);

  const createUserWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInWithEmailPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleProvider = new GoogleAuthProvider();
  const googleLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const facebookProvider = new FacebookAuthProvider();
  const facebookLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };

  const githubProvider = new GithubAuthProvider();
  const githubLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const twitterProvider = new TwitterAuthProvider();
  const twitterLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, twitterProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
        setAuthChecked(true);
        setLoading(false);
      },
    );
    return () => {
      unsubscribe();
    };
  }, []);

  const logOut = () => {
    return signOut(auth);
  };
  const authValues = {
    user,
    cart,
    theme,
    loading,
    authChecked,
    notify,
    logOut,
    setCart,
    setTheme,
    setLoading,
    googleLogIn,
    githubLogIn,
    twitterLogIn,
    facebookLogIn,
    logInWithEmailPass,
    createUserWithEmail,
  };

  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
