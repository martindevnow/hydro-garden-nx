// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD_W3bhfdhBAjb5pEnBCb3wU_ImYBf3TQM',
  authDomain: 'hydro-garden-68dc5.firebaseapp.com',
  projectId: 'hydro-garden-68dc5',
  storageBucket: 'hydro-garden-68dc5.appspot.com',
  messagingSenderId: '273085974014',
  appId: '1:273085974014:web:1f2b96d63f8f716ec66caf',
  measurementId: 'G-HF0S9X1YHT',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
