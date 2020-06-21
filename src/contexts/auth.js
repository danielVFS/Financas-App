import React, { createContext, useState } from "react";
import firebase from "../services/firebase";

export const AuthContext = createContext({});

export default function authProvider({ children }) {
  const [user, setUser] = useState();

  // create user
  async function signUp(email, password, name) {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (value) => {
        const uid = value.user.uid;

        await firebase
          .database()
          .ref("users")
          .child(uid)
          .set({
            balance: 0,
            name: name,
          })
          .then(() => {
            const data = {
              uid: uid,
              name: name,
              email: value.user.email,
            };
            setUser(data);
          });
      });
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}
