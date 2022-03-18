// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyClpP8xTAonCHnsj6H8hirnYr9hIPN0GVc',
  authDomain: 'via-bellum.firebaseapp.com',
  projectId: 'via-bellum',
  storageBucket: 'via-bellum.appspot.com',
  messagingSenderId: '469730433200',
  appId: '1:469730433200:web:ee215f84ddc2cb9a9d4375',
  measurementId: 'G-V74PEB1CQ7',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export default getAnalytics(app)
