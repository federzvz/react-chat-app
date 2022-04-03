// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD48ae6EJLX0uUs6O0sIq4rPW85cITLt5Y",
  authDomain: "feder-messenger.firebaseapp.com",
  projectId: "feder-messenger",
  databaseURL: "http://feder-messenger.firebaseio.com",
  storageBucket: "feder-messenger.appspot.com",
  messagingSenderId: "165397208081",
  appId: "1:165397208081:web:86db1964579b8ebafc65b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };