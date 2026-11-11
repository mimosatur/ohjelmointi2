"use strict"
const newli = ["First item", "Second item", "Third item"]
const list = document.createElement("li");
list.textContent = newli;
document.getElementById("target").appendChild(list);

