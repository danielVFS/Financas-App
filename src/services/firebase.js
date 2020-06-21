import * as firebase from "firebase";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBjqJEpKh1GNRxk_90OfF2s2_ZwSUFJqo",
  authDomain: "financasapp-d6b4d.firebaseapp.com",
  databaseURL: "https://financasapp-d6b4d.firebaseio.com",
  projectId: "financasapp-d6b4d",
  storageBucket: "financasapp-d6b4d.appspot.com",
  messagingSenderId: "1045083784961",
  appId: "1:1045083784961:web:22f1632b855216dcf4bd00",
  measurementId: "G-847YKVG2VX",
};

if (!firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
