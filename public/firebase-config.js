import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDac2UkA-lqkCBwcdyeaNCA9lYCcMlqUdM",
  authDomain: "quiz-app-29e69.firebaseapp.com",
  databaseURL: "https://quiz-app-29e69-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "quiz-app-29e69",
  storageBucket: "quiz-app-29e69.firebasestorage.app",
  messagingSenderId: "5695985771",
  appId: "1:5695985771:web:9bff6539f7936df076f92e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };
