// src/context/Auth.js

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: localStorage.getItem("token") || "",
  });

  // Load user data from localStorage if the token exists
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuth((prevState) => ({
        ...prevState,
        token,
        user: { name: "User" }, // Optionally, you can fetch the user details from API
      }));
    }
  }, []);

  const login = (user, token) => {
    localStorage.setItem("token", token);
    setAuth({ user, token });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuth({ user: null, token: "" });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
