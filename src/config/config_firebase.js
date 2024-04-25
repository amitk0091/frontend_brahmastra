import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database'; // Corrected import statement

const firebaseConfig = {
    apiKey: "AIzaSyDyDAdP4FOdHhbKQPu7GRzm8cTkNXFl0DU",
    authDomain: "fir-authentication-e63f1.firebaseapp.com",
    databaseURL: "https://fir-authentication-e63f1-default-rtdb.firebaseio.com",
    projectId: "fir-authentication-e63f1",
    storageBucket: "fir-authentication-e63f1.appspot.com",
    messagingSenderId: "814024161047",
    appId: "1:814024161047:web:69dd01176793fe4a5b6952",
    measurementId: "G-9TYHPHZL2W"
};

const app = (getApps().length > 0 ? getApp() : initializeApp(firebaseConfig));

const auth = getAuth(app);

const db = getDatabase(app);

export { auth, db };
