"use strict"

const participant = prompt("Give the number ofparticipants")

const participants = []
while (participants.length < participant) {
    const name = prompt("Give the names of the participants one by one")
    participants.push(name)
}
console.log(participants)

