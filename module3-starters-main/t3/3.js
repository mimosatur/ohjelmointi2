'use strict';

const names = ['John', 'Paul', 'Jones'];

let html = "";

for (let n = 0; n < names.length; n++) {
    html += "<li>" + names[n] + "</li>";
}

document.getElementById("target").innerHTML =
"<ul>" + html + "</ul>";