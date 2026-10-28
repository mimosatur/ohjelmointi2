"use strict"

const number1Str = prompt("Anna ensimmäinen numero")
const number1 = parseInt(number1Str)

const number2Str = prompt("Anna toinen numero")
const number2 = parseInt(number2Str)

const number3Str = prompt("Anna kolmas numero")
const number3 = parseInt(number3Str)

const summa = number1 + number2 + number3
const product = number1 * number2 * number3
const average = summa / 2
document.querySelector("#target1").innerHTML =
    "Numeroiden summa on:" + summa;
document.querySelector("#target").innerHTML =
    "Numeroiden tulo on:" + product;