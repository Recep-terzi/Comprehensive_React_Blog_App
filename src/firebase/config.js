import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAYzbQCSTkEkWXz8kQDn3NcT4dH-FkxxbY",
  authDomain: "modernblogapp.firebaseapp.com",
  projectId: "modernblogapp",
  storageBucket: "modernblogapp.appspot.com",
  messagingSenderId: "663325496718",
  appId: "1:663325496718:web:48a617dc3436a4288e80df",
};
initializeApp(firebaseConfig)
const db = getFirestore();
export {db}