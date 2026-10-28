"use strict"

const answer = confirm("Should I calculate the square root?");

if (answer === true) {
    const number = prompt("Give a number.")
    const root = Math.sqrt(number)
    document.querySelector("#target").innerHTML =
    "Square root of  " + number + " is " + root;
} else {
    document.querySelector("#target").innerHTML =
    "The square root is not caculated";
}