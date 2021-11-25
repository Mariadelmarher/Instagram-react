import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0TyuvFeIDsIe3KYpl1QsCLnqnY5Iio1k",
  authDomain: "instagram-f7c86.firebaseapp.com",
  projectId: "instagram-f7c86",
  storageBucket: "instagram-f7c86.appspot.com",
  messagingSenderId: "948019478581",
  appId: "1:948019478581:web:dfbdfb2d1ea7286167b17c"
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);