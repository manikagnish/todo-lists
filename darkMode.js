"use strict";

// Selectors
const darkModeBtn = document.getElementById("dark-mode-btn");
let darkMode = localStorage.getItem("dark-mode");

// functions
const addDarkMode = () => {
  document.body.classList.add("dark");
  document.querySelector(".main__task-list").classList.add("dark");
  document.querySelector(".main__task-card--primary").classList.add("dark");
  localStorage.setItem("dark-mode", true);
};

const removeDarkMode = () => {
  document.body.classList.remove("dark");
  document.querySelector(".main__task-list").classList.remove("dark");
  document.querySelector(".main__task-card--primary").classList.remove("dark");
  localStorage.setItem("dark-mode", false);
};

if (darkMode === "true") {
  addDarkMode();
}

// Event Listeners
darkModeBtn.addEventListener("click", () => {
  darkMode = localStorage.getItem("dark-mode");
  if (darkMode === "false") {
    addDarkMode();
  } else {
    removeDarkMode();
  }
});
