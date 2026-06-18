import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = (email) => {
    const loggedUser = {
      email,
      role: email === "admin@gmail.com" ? "admin" : "student"
    };

    setUser(loggedUser);

    localStorage.setItem(
      "user",
      JSON.stringify(loggedUser)
    );
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};