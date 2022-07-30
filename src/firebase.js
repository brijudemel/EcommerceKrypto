// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const handleRegister = (email,password) => {
    
    let ecode=0
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        sessionStorage.setItem('AuthToken', response._tokenResponse.refreshToken)
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use')
        {
          toast.error('Email Already in Use');
        }
        ecode=1
      })
    return ecode  
  }

export const handleLogin=(email,password)=>{
  
  let ecode=0
  signInWithEmailAndPassword(auth, email, password)
    .then((response) => {
      // navigate('/home')
      sessionStorage.setItem('AuthToken', response._tokenResponse.refreshToken)
     
    })
    .catch((error) => {
          if(error.code === 'auth/wrong-password'){
            toast.error('Please check the Password');
          }
          if(error.code === 'auth/user-not-found'){
            toast.error('Please check the Email');
          }
          ecode=1
        })
    return ecode
}

export const handleLogout = () => {

        sessionStorage.removeItem('AuthToken');
        // navigate('/login')
        
    }