"use strict"

const numbers = [];

while (true) {
    const number = Number(prompt("Give a number"));
    numbers.push(number)

    if (number === 0) {
        break;
    }
}

numbers.sort((a, b) => b - a);
console.log(numbers);