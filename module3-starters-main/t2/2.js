"use strict"

const target = document.getElementById("target");

const firstItem = document.createElement("li");
firstItem.textContent = "First item";
target.appendChild(firstItem);

const SecondItem = document.createElement("li");
SecondItem.textContent = "Second item";
SecondItem.classList.add("my-item");
target.appendChild(SecondItem);

const ThirdItem = document.createElement("li");
ThirdItem.textContent = "Third item";
target.appendChild(ThirdItem);

