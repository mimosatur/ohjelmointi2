"use strict"

const roll_number = prompt("Give number of dice rolls")

let heitto = 0;
const numbers = []
let sum = 0

while (heitto < roll_number) {
    let roll = Math.floor(Math.random() * 6) + 1;
    numbers.push(roll)
    console.log(roll)
    heitto++;
}

for (const number of numbers) {
    sum += number;
}
console.log(sum);

// document.querySelector("#target").innerHTML =
// roll;