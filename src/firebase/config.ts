import * as firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDsQ6onrzyvfDnKksCm-CPnMWd0b_ZcA1g",
  authDomain: "socialapp-f6387.firebaseapp.com",
  databaseURL: "https://socialapp-f6387.firebaseio.com",
  projectId: "socialapp-f6387",
  storageBucket: "socialapp-f6387.appspot.com",
  messagingSenderId: "741700435383",
  appId: "1:741700435383:web:e61700bcb6d0c86244fc32",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebaseConfig;
