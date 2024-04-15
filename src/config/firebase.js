// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCYYE7OLINRHC7AtTNg4VL9DJdtINqeBdE",
    authDomain: "whc-lab.firebaseapp.com",
    projectId: "whc-lab",
    storageBucket: "whc-lab.appspot.com",
    messagingSenderId: "440666910578",
    appId: "1:440666910578:web:dcb117168e0457ed4377eb",
    measurementId: "G-L0Y8ET7WKC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Check if Firebase is already initialized
const firebaseApps = getApps();
if (firebaseApps.length === 0) {
    console.log("Firebase is not initialized");
} else {
    console.log("Firebase is initialized");
}

const socialAuth = getAuth(app);

export { socialAuth };
