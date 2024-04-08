// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWsQ-4dm1JolzlGWkcRucpMmOeh_p8fjs",
  authDomain: "assignment-9-authenticat-e78ed.firebaseapp.com",
  projectId: "assignment-9-authenticat-e78ed",
  storageBucket: "assignment-9-authenticat-e78ed.appspot.com",
  messagingSenderId: "595053888813",
  appId: "1:595053888813:web:fcca2702c4825eb7477fa4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth