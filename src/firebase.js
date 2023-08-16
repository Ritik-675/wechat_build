// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyARCjRLsGN-iWGpCz8IsRr07Nu9h3y5by0",
    authDomain: "wechat-6f821.firebaseapp.com",
    databaseURL: "https://wechat-6f821-default-rtdb.firebaseio.com",
    projectId: "wechat-6f821",
    storageBucket: "wechat-6f821.appspot.com",
    messagingSenderId: "810015547581",
    appId: "1:810015547581:web:18c774a786dae9bcc4d7d4",
    measurementId: "G-6CCX0PDDX0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;