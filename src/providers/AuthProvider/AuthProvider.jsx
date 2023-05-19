import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../utils/firebase/firebase.config";
import { Navigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const auth = getAuth(app);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setLoading(true);
        const loggedUser = res.user;
        setUser(loggedUser);
        <Navigate to={"/"} />;
      })
      .catch((err) => console.log(err));
  };
  const provider = new GoogleAuthProvider();
  const popUpGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider)
      .then((res) => {
        const loggedUser = res.user;
        setUser(loggedUser);
        toast.success("Login Successful");
      })
      .catch((err) => console.log(err));
  };
  // lets sign in from here
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // lets sign out form here
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authInfo = {
    user,
    loading,
    createUser,
    popUpGoogle,
    signIn,
    loading,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
