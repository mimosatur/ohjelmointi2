"use strict"

const names = []
while (names.length < 6) {
    const dog = prompt("Give the name of six dogs one by one")
    names.push(dog)
}

console.log(names)
names.sort()
names.reverse()