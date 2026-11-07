"use strict"

let numbers = [];

while (true) {
    let number = Number(prompt("Give a number"));

    if (numbers.includes(number)) {
        console.log(number + " has already been given.");
        break;
    }

    numbers.push(number);
}

numbers.sort((a, b) => a - b);

numbers.forEach(number => console.log(number));
