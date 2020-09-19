import firebase from "firebase";

const firebaseConfig = firebase.initializeApp(
    {
        apiKey: "AIzaSyC_juWd63cVmnAzfPFPqKm-LH2YXPRz56U",
        authDomain: "instagram-with-reactjs.firebaseapp.com",
        databaseURL: "https://instagram-with-reactjs.firebaseio.com",
        projectId: "instagram-with-reactjs",
        storageBucket: "instagram-with-reactjs.appspot.com",
        messagingSenderId: "474306680649",
        appId: "1:474306680649:web:8058186337c8d747daec98",
        measurementId: "G-4Z2FSJ2D4C"
      }
);
  
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  
  export default { db, auth, storage };
