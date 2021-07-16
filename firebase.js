import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBeXaF2BxEKJ-y-n1r_TJ0Ns_7TD5WgmN4",
    authDomain: "docs-754d3.firebaseapp.com",
    projectId: "docs-754d3",
    storageBucket: "docs-754d3.appspot.com",
    messagingSenderId: "216121542795",
    appId: "1:216121542795:web:466a26d9e28808388dec8e",
};


const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig) 
    : firebase.app(); 

const db = app.firestore();

export { db };