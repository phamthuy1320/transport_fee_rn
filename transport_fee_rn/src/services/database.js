import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyCcP4NVxP8sDUZPvHAGDozoFj797BPruso",
    authDomain: "tranportfee.firebaseapp.com",
    databaseURL: "https://tranportfee.firebaseio.com",
    projectId: "tranportfee",
    storageBucket: "tranportfee.appspot.com",
    messagingSenderId: "87700779876",
    appId: "1:87700779876:web:a0cc0d947f08b405b18071",
    measurementId: "G-PRYJDLCT3C"
  });

const database = firebase.database();
export default database;