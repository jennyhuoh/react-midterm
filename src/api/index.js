import burgerBuns from '../json/burgerBuns.json';
import ingredient from '../json/ingredient.json';
import meat from '../json/meat.json';
import materials from '../json/materials.json';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//initialize firebase
var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APPID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
export const getJSON = (url) => {
    switch (url) {
        case "/burger":
            return materials;
        // case "/meat":
        //     return meat;
        // case "/ingredients":
        //     return ingredient;
    }
}

export const authenticateAnonymousely = () => {
     return firebase.auth().signInAnonymously;
 }
 export const signInWithEmailPassword = async (email, password) => {
    return await auth.signInWithEmailAndPassword(email, password);
  }
  
  export const registerWithEmailPassword = async (email, password, name) => {
    await auth.createUserWithEmailAndPassword(email, password);
    const user = auth.currentUser;
    await user.updateProfile({
      displayName: name,
    })
    return user;
  }

  export const signOut = () => {
    auth.signOut();
  }