import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyCv9kwtBl2feiRXuQ3zEtExSw3KvUeDJII",
    authDomain: "react-contact-c3107.firebaseapp.com",
    projectId: "react-contact-c3107",
    storageBucket: "react-contact-c3107.appspot.com",
    messagingSenderId: "596209306400",
    appId: "1:596209306400:web:b58fcd3e0284057cae6545"
  };

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();