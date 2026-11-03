"use strict"

const numbers = [];

while (numbers.length < 5) {
    const number = prompt("Give a number")
    numbers.push(number)
}
console.log(numbers)

for (let i = numbers.length - 1; i >=0; i--) {
  console.log(numbers[i]);
}