// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4GtLhpgpTahXFtN2wc5zMO7SKGZ1BT3Q",
  authDomain: "chatsupportd.firebaseapp.com",
  projectId: "chatsupportd",
  storageBucket: "chatsupportd.appspot.com",
  messagingSenderId: "649706942117",
  appId: "1:649706942117:web:729a5f1b22e77aecc0e74c",
  measurementId: "G-8X0BDLYWNC",
  databaseURL: "https://chatsupportd.firebaseio.com", 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
