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

firstNumber = Math.trunc(Math.random() * 9) + 1;
secondNumber = Math.trunc(Math.random() * 9) + 1;

correctResult = firstNumber * secondNumber;

firstNumberEl.textContent = firstNumber;
secondnumberEl.textContent = secondNumber;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (Number(result) === correctResult) {
    score++;
    scoreEl.textContent = score;
  } else {
    score--;
    scoreEl.textContent = score;
  }
});
