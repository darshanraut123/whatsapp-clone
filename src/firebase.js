import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAs-Vu_RNbyf-u0N3GgPZkQbDGRtbB_JD8",
    authDomain: "whatsapp-clone-1b054.firebaseapp.com",
    projectId: "whatsapp-clone-1b054",
    storageBucket: "whatsapp-clone-1b054.appspot.com",
    messagingSenderId: "188759153065",
    appId: "1:188759153065:web:5acededc716b0192834cb8",
    measurementId: "G-887CCLYSL8"
  };

  // Use this to initialize the firebase App
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  // Use these for db & auth
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;