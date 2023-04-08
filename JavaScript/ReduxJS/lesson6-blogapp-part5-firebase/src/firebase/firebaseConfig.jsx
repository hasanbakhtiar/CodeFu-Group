import firebase from 'firebase/app';
import 'firebase/database'; 

const firebaseConfig = {
  apiKey: "AIzaSyDb5GZWo1e8f_9x4iw559UA5yklQaXAHfE",
  authDomain: "code-fu-4a1c3.firebaseapp.com",
  databaseURL: "https://code-fu-4a1c3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "code-fu-4a1c3",
  storageBucket: "code-fu-4a1c3.appspot.com",
  messagingSenderId: "749981871916",
  appId: "1:749981871916:web:e347e3636772f63e1b0689"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {database as default}