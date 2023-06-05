import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfKllHknD5lbjCNYpjMr7h0pxMCHKzytw",
  authDomain: "uni-finder-736a7.firebaseapp.com",
  projectId: "uni-finder-736a7",
  storageBucket: "uni-finder-736a7.appspot.com",
  messagingSenderId: "481060762907",
  appId: "1:481060762907:web:7c8cdced476f9f0fcb0fbe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
