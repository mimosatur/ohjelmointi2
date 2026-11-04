"use strict"

const participant = prompt("Give the number ofparticipants")

const names = []
while (names.length < participant) {
    const name = prompt("Give the names of the participants one by one")
    names.push(name)
}

names.sort();

let html = "";
for (let i=0; i < names.length; i++) {
    html += "<li>" + names[i] + "</li>";
}

document.getElementById("names").innerHTML = 
html;
