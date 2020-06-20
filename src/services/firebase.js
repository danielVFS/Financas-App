import * as firebase from "firebase";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZIrOTL-XYARDlqeuIG7o45t4hp-JPP70",
  authDomain: "firstapp-1c60a.firebaseapp.com",
  databaseURL: "https://firstapp-1c60a.firebaseio.com",
  projectId: "firstapp-1c60a",
  storageBucket: "firstapp-1c60a.appspot.com",
  messagingSenderId: "576978093918",
  appId: "1:576978093918:web:145c4818eb3dc3cc3b71cf",
  measurementId: "G-3PMM9RX96X",
};

if (!firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
