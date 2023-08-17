import firebase from 'firebase/compat/app';
import auth from'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  
  export {firebase,auth} ;
