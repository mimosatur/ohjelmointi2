"use strict"

const roll_number = prompt("Give number of dice rolls")

let heitto = 0;
const numbers = []
let sum = 0

while (heitto < roll_number) {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll)
    numbers.push(roll)
    heitto++;
}

for (const number of numbers) {
    sum += number;
}
    document.querySelector("#target").innerHTML =
    "Sum of the numbers is " + sum;