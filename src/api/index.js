import burgerBuns from '../json/burgerBuns.json';
import ingredient from '../json/ingredient.json';
import meat from '../json/meat.json';
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

//initialize firebase
// var firebaseConfig = {
//     apiKey: "AIzaSyDIpVpSvBP8JU_bLOEBeLukkQL0FN7vcro",
//     authDomain: "hamburger-95aaf.firebaseapp.com",
//     projectId: "hamburger-95aaf",
//     storageBucket: "hamburger-95aaf.appspot.com",
//     messagingSenderId: "414489541862",
//     appId: "1:414489541862:web:feb62c94397c48acd28f27"
//   };
//   firebase.initializeApp(firebaseConfig);

export const getJSON = (url) => {
    switch (url) {
        case "/burger":
            return burgerBuns;
        case "/meat":
            return meat;
        case "/ingredients":
            return ingredient;
    }
}

// export const authenticateAnonymousely = () => {
//     return firebase.auth().signInAnonymously;
// }