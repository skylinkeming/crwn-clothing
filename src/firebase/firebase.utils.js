import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAv-yxrHUP-denxCd9B8Y_x0MR9oqJxgzE",
    authDomain: "crwn-db-steve.firebaseapp.com",
    projectId: "crwn-db-steve",
    storageBucket: "crwn-db-steve.appspot.com",
    messagingSenderId: "618492249052",
    appId: "1:618492249052:web:2e89b4f4cfdde7fac28519",
    measurementId: "G-HEH5KJ7FRL"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore(); 



const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account'});
 
export const signInWithGoogle = () => auth.signInWithPopup(provider);
 
 
export default firebase;