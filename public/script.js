import { auth, db } from "./firebase-config.js";
import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import {
  push,
  ref
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-database.js";

const quizForm = document.getElementById("quizForm");
const result = document.getElementById("result");
const scoreEl = document.getElementById("score");
const logoutBtn = document.getElementById("logoutBtn");

const correctAnswers = {
  q1: "2",
  q2: "1",
  q3: "4",
  q4: "3",
  q5: "3",
  q6: "1",
  q7: "3",
  q8: "2",
  q9: "2",
  q10: "1"
};

let currentUser = null;

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "index.html";
    return;
  }
  currentUser = user;
});

logoutBtn.addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "index.html";
});

quizForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!currentUser) {
    result.innerText = "Please login first.";
    return;
  }

  let score = 0;
  const answers = {};

  Object.keys(correctAnswers).forEach((question) => {
    const selected = document.querySelector(`input[name="${question}"]:checked`);
    const selectedValue = selected ? selected.value : null;
    answers[question] = selectedValue;
    if (selectedValue === correctAnswers[question]) {
      score++;
    }
  });

  try {
    await push(ref(db, `users/${currentUser.uid}/attempts`), {
      score,
      total: 10,
      answers,
      submittedAt: Date.now()
    });
    result.innerText = "Quiz Complete!";
    scoreEl.innerText = `Score: ${score} / 10`;
  } catch (error) {
    result.innerText = "Score save nahi hua. Firebase config check karo.";
    scoreEl.innerText = error.message;
  }
});
