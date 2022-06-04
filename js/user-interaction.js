"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.

let userName;
while (userName === undefined || userName === null || userName === '') {
    userName = prompt('What is your name?')
}

// TODO: Show an alert message that welcomes the user based on their input.

alert(`Welcome to the jungle, ${userName}! We have fun and games :D`)

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.

let likePizza = confirm("Do you like pizza?");
if (likePizza) {
    alert("Yeah, me too! But no anchovies... gross!")
} else {
    alert("Are you doing okay there, friend?")
}

