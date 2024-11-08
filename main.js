"use strict";
import "./style.css";

const firstNumberEl = document.querySelector(".first");
const secondnumberEl = document.querySelector(".second");

const scoreEl = document.querySelector(".score");
const inputResult = document.querySelector(".result");

const form = document.querySelector(".container");
const btn = document.querySelector("submit-btn");

let firstNumber;
let secondNumber;
let score = 0;
let correctResult;
let result;

inputResult.addEventListener("input", function (e) {
  result = e.target.value;
  // console.log(result);
});

const update = function () {
  firstNumber = Math.trunc(Math.random() * 9) + 1;
  secondNumber = Math.trunc(Math.random() * 9) + 1;

  firstNumberEl.textContent = firstNumber;
  secondnumberEl.textContent = secondNumber;

  correctResult = firstNumber * secondNumber;

  inputResult.value = "";
};

update();
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (Number(result) === correctResult) {
    score++;
  } else if (score !== 0) {
    score--;
  }
  scoreEl.textContent = score;

  update();
});
