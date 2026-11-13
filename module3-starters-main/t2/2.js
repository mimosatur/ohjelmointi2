"use strict"

const target = document.getElementById("target");

const firstItem = document.createElement("li");
firstItem.innerHTML = "First item";
target.appendChild(firstItem);

const SecondItem = document.createElement("li");
SecondItem.innerHTML = "Second item";
SecondItem.classList.add("my-item");
document.getElementById("target").appendChild(SecondItem);

const ThirdItem = document.createElement("li");
ThirdItem.innerHTML = "Third item";
document.getElementById("target").appendChild(ThirdItem);

