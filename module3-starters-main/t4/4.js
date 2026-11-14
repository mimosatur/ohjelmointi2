'use strict'

const students = [
  {
    name: 'John',
    value: '2345768',
  },
  {
    name: 'Paul',
    value: '2134657',
  },
  {
    name: 'Jones',
    value: '5423679',
  },
];

const target = document.getElementById("target");  

for (let i = 0; i < students.length; i++) {
    const option = document.createElement("option");

    option.value = students[i].value;
    option.textContent = students[i].name;

    target.appendChild(option);
}