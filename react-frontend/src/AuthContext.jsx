import { createContext, useState, useEffect } from "react";
import { Loading } from "./components/Loading";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token) setIsLoggedIn(true);
    setLoading(false);
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
  }

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  }

  if(loading) {
    return <Loading />
  }

  return (
    <AuthContext.Provider value={{login, logout, isLoggedIn}}> 
     {children}
    </AuthContext.Provider>
  );

}