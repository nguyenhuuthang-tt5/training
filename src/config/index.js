// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFuQvtatE-71iHukLkeIiqaByfrnrAcXo",
  authDomain: "pizza-app-aa8e1.firebaseapp.com",
  projectId: "pizza-app-aa8e1",
  storageBucket: "pizza-app-aa8e1.appspot.com",
  messagingSenderId: "206743603301",
  appId: "1:206743603301:web:da38c32d13ae0d6ea51e8c",
  measurementId: "G-CF3B5HNRMZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);