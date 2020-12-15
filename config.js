import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyD-NRhzZYd3JOfWxFKgo8HH5Q543i480Lw",
    authDomain: "vroomvoom-b7986.firebaseapp.com",
    projectId: "vroomvoom-b7986",
    storageBucket: "vroomvoom-b7986.appspot.com",
    messagingSenderId: "607264046955",
    appId: "1:607264046955:web:86fc496da64c7aa0ac162e",
    measurementId: "G-20G710YR00"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default app;

/*
export const db = app.database();
if  ( ! Firebase . apps . length )  { 
      Firebase . initializeApp (firebaseConfig);
}
*/
