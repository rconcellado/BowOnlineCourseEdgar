// src/context/UserContext.js
import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ role: null, isAuthenticated: false });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
