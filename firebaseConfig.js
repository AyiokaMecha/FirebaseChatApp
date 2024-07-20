// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { initializeAuth, getReactNativePersistence, getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore"; 



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqDNJW2uWY9pTTSyfxxqM17aMHxEy3-7I",
  authDomain: "reactnative-chat-f72a7.firebaseapp.com",
  projectId: "reactnative-chat-f72a7",
  storageBucket: "reactnative-chat-f72a7.appspot.com",
  messagingSenderId: "428797504935",
  appId: "1:428797504935:web:00de47bf043a7b61a79a82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})

;

export const db = getFirestore(app);

export const usersRef = collection(db, 'users')

export const roomRef = collection(db, 'rooms')