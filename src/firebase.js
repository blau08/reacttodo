import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA-EU7xm84DIb_ZziJ8TnAlrlgLDyvMwyI",
    authDomain: "brianlautodoapp.firebaseapp.com",
    databaseURL: "https://brianlautodoapp-default-rtdb.firebaseio.com",
    projectId: "brianlautodoapp",
    storageBucket: "brianlautodoapp.appspot.com",
    messagingSenderId: "979981406100",
    appId: "1:979981406100:web:4667be5d60bfb10b770981"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
