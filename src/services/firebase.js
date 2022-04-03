// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4UqjT5m3caVdbp0WyXYqhlv8FCraMXds",
  authDomain: "sofka-chatty-app.firebaseapp.com",
  projectId: "sofka-chatty-app",
  storageBucket: "sofka-chatty-app.appspot.com",
  messagingSenderId: "1074787062696",
  appId: "1:1074787062696:web:e5773a9e7e2d1ab2f7039d"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getDatabase(firebaseApp);

export default firebaseApp