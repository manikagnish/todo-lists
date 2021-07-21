"use strict";

// variables
const addTaskBtn = document.getElementById("add-task-btn");
const addTaskCard = document.getElementById("add-task-card");
const cancelBtn = document.getElementById("cancel-btn");
const addBtn = document.getElementById("add-btn");
const main = document.querySelector(".main");
const cardHeading = document.querySelector(".task-card__title");
const cardpara = document.querySelector(".task-card__para");
const taskList = document.querySelector(".main__task-list");
const taskListDone = document.querySelector(".main__task-list--done");
const title = document.getElementById("title");
const description = document.getElementById("description");
const deleteBtn = document.querySelectorAll(".delete-btn");
const doneList = document.getElementById("done-list");
const todoList = document.getElementById("todo-list");
const loadMoreContainer = document.querySelector(".main__load-container");

let todo = [];
let done = [{ title: "done title", description: "done description" }];

todo = JSON.parse(localStorage.getItem("todo") || "[]");
for (let i = 0; i < todo.length; i++) {
  showCard(taskList, todo, i);
}

if (taskList.getElementsByTagName("li").length > 3) {
  loadMoreContainer.classList.remove("invisible");
}

const loadMore = document.getElementById("load-more");
const hid = [...document.querySelectorAll(".list-item.hidden")];

hid.splice(0, 3).forEach((elem) => elem.classList.remove("hidden"));

// function declarations
function showCard(list, arr, item) {
  list.innerHTML += `
          <li class="main__task-card list-item hidden">
          <div class="task-card__header">
          <h2 class="task-card__title">${arr[item].title}</h2>
          <button class="btn btn-success done-btn" onClick="con()" >Done 👍</button>
          <button class="btn btn-danger delete-btn" >
          Delete <i class="fa fa-trash"></i>
          </button>
          </div>
          <p class="task-card__para">
          ${arr[item].description}
          </p>
          </li>
          `;
}

function addDoneTask() {
  for (let i = 0; i < done.length; i++) {
    showCard(taskListDone, done, i);
  }
}

// Event Listeners
doneList.addEventListener("click", () => {
  taskList.classList.add("hidden");
  taskListDone.classList.remove("hidden");
  todoList.classList.remove("active");
  doneList.classList.add("active");
  addTaskBtn.classList.add("hidden");
  if (done.length > taskListDone.getElementsByTagName("li").length) {
    addDoneTask();
  }
  if (taskListDone.getElementsByTagName("li").length < 3) {
    loadMoreContainer.classList.add("invisible");
  }
});

todoList.addEventListener("click", () => {
  taskList.classList.remove("hidden");
  taskListDone.classList.add("hidden");
  doneList.classList.remove("active");
  todoList.classList.add("active");
  addTaskBtn.classList.remove("hidden");
  if (taskList.getElementsByTagName("li").length > 3) {
    loadMoreContainer.classList.remove("invisible");
  }
});

addTaskBtn.addEventListener("click", () => {
  addTaskCard.classList.remove("hidden");
});

cancelBtn.addEventListener("click", () => {
  addTaskCard.classList.add("hidden");
  title.value = "";
  description.value = "";
});

addBtn.addEventListener("click", () => {
  todo.push({ title: title.value, description: description.value });
  localStorage.setItem("todo", JSON.stringify(todo));
  showCard(taskList, todo, todo.length - 1);
  console.log("runnig yet");
  title.value = "";
  description.value = "";
  addTaskCard.classList.add("hidden");
  if (taskList.getElementsByTagName("li").length > 3) {
    loadMoreContainer.classList.remove("invisible");
  }
});

loadMore.addEventListener("click", function (e) {
  e.preventDefault();

  hid.splice(0, 2).forEach((elem) => elem.classList.remove("hidden"));

  if (hid.length == 0) {
    loadMore.classList.add("invisible");
  }
});
