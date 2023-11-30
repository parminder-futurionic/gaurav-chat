import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyAD_jTXPz_4KJtk3kXwi89bSRqAsa3INGA",
    authDomain: "unichat-1e89e.firebaseapp.com",
    projectId: "unichat-1e89e",
    storageBucket: "unichat-1e89e.appspot.com",
    messagingSenderId: "970811847369",
    appId: "1:970811847369:web:5d3cd542ba3247beacd318",
  })
  .auth();
