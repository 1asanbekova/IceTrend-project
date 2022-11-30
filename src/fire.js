import firebase from "firebase/compat/app";

import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApZnUNJUAa8St8jRL0Adp_CfZmZJqBi20",
  authDomain: "project-eliz.firebaseapp.com",
  projectId: "project-eliz",
  storageBucket: "project-eliz.appspot.com",
  messagingSenderId: "394958850568",
  appId: "1:394958850568:web:425ff21f1811293a9edfbd",
  measurementId: "G-P5K2E9HW6J",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
