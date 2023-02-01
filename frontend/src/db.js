import firebase from "firebase/app";
import "firebase/database"

const config = {
    // API KEYS
    apiKey: "AIzaSyDEwVIgCdeDUABwV193qz3ryu39SBC--WA",
    authDomain: "chatappvue-6ac64.firebaseapp.com",
    projectId: "chatappvue-6ac64",
    storageBucket: "chatappvue-6ac64.appspot.com",
    messagingSenderId: "180478584457",
    appId: "1:180478584457:web:eb7bf32b388c9503484858"
}

const db = firebase.initializeApp(config)

export default db