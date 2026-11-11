"use strict"

const list = ["First item", "Second item", "Third item"]
let html = ""
for (let i=0; i < list.length; i++) {
    html += "<li>" + list[i] + "</li>";
}

document.getElementById("target").innerHTML = 
html;