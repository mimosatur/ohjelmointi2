"use strict"

const names = []
while (names.length < 6) {
    const dog = prompt("Give the name of six dogs one by one")
    names.push(dog)
}

names.sort()
names.reverse()

let html = "";
for (let i=0; i < names.length; i++) {
    html += "<li>" + names[i] + "</li>";
}

document.getElementById("names").innerHTML = 
html;