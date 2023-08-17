import firebase from 'firebase/compat/app';
import auth from'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDYLhy20HbUXlVnq1IUrZiDpNw-72wavhk",
  authDomain: "qnas-802e2.firebaseapp.com",
  projectId: "qnas-802e2",
  storageBucket: "qnas-802e2.appspot.com",
  messagingSenderId: "822516087093",
  appId: "1:822516087093:web:2623fd208564b0cb4ab47c",
  measurementId: "G-XLCXKYQYRX"
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  
  export {firebase,auth} ;