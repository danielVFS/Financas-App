import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export default function authProvider({ children }) {
  const [user, setUser] = useState();
  return (
    <AuthContext.Provider value={{ signed: !!user, user }}>
      {children}
    </AuthContext.Provider>
  );
}
