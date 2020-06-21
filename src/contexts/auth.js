import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export default function authProvider({ children }) {
  const [user, setUser] = useState({ name: "Daniel" });
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
