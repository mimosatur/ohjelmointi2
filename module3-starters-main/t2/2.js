"use strict"

const newli = ["First item", "Second item", "Third item"]
const list = document.createElement("li");
list.textContent = ["First item", "Second item", "Third item"];
document.getElementById("target").appendChild(list);

console.log(list)