// Import the functions you need from the SDKs you need
let firebase = require("firebase/app");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsNP8h9A3fl0cE_9uBNCmgMLzaoJt_1Z0",
  authDomain: "car-tracking-dashboard.firebaseapp.com",
  databaseURL: "https://car-tracking-dashboard-default-rtdb.firebaseio.com",
  projectId: "car-tracking-dashboard",
  storageBucket: "car-tracking-dashboard.appspot.com",
  messagingSenderId: "870816318768",
  appId: "1:870816318768:web:58b448da886a7b6919b4f5",
  measurementId: "G-KYNQGWKCLG",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

module.exports = fire;
