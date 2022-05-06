// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfTYa4sBaLddHfr5qjRnCI6Oqtsw5RJxs",
  authDomain: "green-food-project.firebaseapp.com",
  projectId: "green-food-project",
  storageBucket: "green-food-project.appspot.com",
  messagingSenderId: "822308710518",
  appId: "1:822308710518:web:dd124c9bc0610c0cbd9757"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

export default auth;