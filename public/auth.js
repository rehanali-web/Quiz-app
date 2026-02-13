import { auth, db } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import {
  ref,
  update
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-database.js";

const form = document.getElementById("authForm");
const authMessage = document.getElementById("authMessage");

onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href = "index2.html";
  }
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  authMessage.textContent = "";

  const fullName = document.getElementById("fullName").value.trim();
  const fatherName = document.getElementById("fatherName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  try {
    let credential;

    try {
      credential = await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        credential = await signInWithEmailAndPassword(auth, email, password);
      } else {
        throw error;
      }
    }

    await update(ref(db, `users/${credential.user.uid}/profile`), {
      fullName,
      fatherName,
      email,
      updatedAt: Date.now()
    });

    window.location.href = "index2.html";
  } catch (error) {
    authMessage.textContent = error.message;
  }
});
