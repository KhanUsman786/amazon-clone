// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBR7ZHEdMO0o1mtYOw4XNYlETOnQkfS-R4",
    authDomain: "clone-9cc96.firebaseapp.com",
    projectId: "clone-9cc96",
    storageBucket: "clone-9cc96.appspot.com",
    messagingSenderId: "361888101344",
    appId: "1:361888101344:web:c260f1c474f91c97b1f185",
    measurementId: "G-9QLGMES6T7"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db =firebaseApp.firestore();
const auth = firebase.auth();


export {db,auth};