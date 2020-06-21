import React, { createContext, useState, useEffect } from "react";
import firebase from "../services/firebase";
import AsyncStorage from "@react-native-community/async-storage";

export const AuthContext = createContext({});

export default function authProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  // Assim que o omponente for aberto, component did mount
  useEffect(() => {
    async function loadStore() {
      const storageUser = await AsyncStorage.getItem("user");

      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }

      setLoading(false);
    }
    loadStore();
  }, []);

  // signIn user
  async function signIn(email, password) {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (value) => {
        const uid = value.user.uid;
        await firebase
          .database()
          .ref("users")
          .child(uid)
          .once("value")
          .then((snapshot) => {
            const data = {
              uid: uid,
              name: snapshot.val().name,
              email: value.user.email,
            };
            setUser(data);
            storageUser(data);
          });
      })
      .catch((error) => {
        alert(error.code);
      });
  }

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
            storageUser(data);
          });
      })
      .catch((error) => {
        alert(error.code);
      });
  }

  async function signOut() {
    await firebase.auth().signOut();
    await AsyncStorage.clear()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        alert(error.code);
      });
  }

  async function storageUser(data) {
    await AsyncStorage.setItem("user", JSON.stringify(data));
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signUp, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}
