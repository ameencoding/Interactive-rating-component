"use strict";

const ratings = document.querySelectorAll(".rating div");
const btnSubmit = document.querySelector(".btn");

const card1 = document.querySelector(".card");
const card2 = document.querySelector(".card-thanks");

let val;
let isSelected = false;

ratings.forEach((rt) => {
  rt.addEventListener("click", function () {
    ratings.forEach((r) => r.classList.remove("selected"));
    this.classList.add("selected");
    val = this.textContent;
    isSelected = true;
  });
});

btnSubmit.addEventListener("click", function () {
  if (isSelected)
    setTimeout(() => {
      updateCard();
    }, 1000);
});

const updateCard = function () {
  card1.classList.add("hide");
  card2.classList.remove("hide");
  card2.querySelector(".select-msg span").textContent = val;
};
