"use strict";
// Don't change the next two lines!
// These creates two variables for you:
//     one with the colors of the rainbow
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

var favorite = 'green'; // TODO: change this to your favorite color from the list

// TODO: Create a block of if/else statements to check for every color except indigo and violet.
// TODO: When a color is encountered log a message that tells the color, and an object of that color.
//       Example: Blue is the color of the sky.
if (color === "red") {
    console.log(`${color} is the color of fiery passion`);
} else if (color === "orange") {
    console.log(`${color} is the color of my favorite fruit`);
} else if (color === "yellow") {
    console.log(`${color} is the color of a perfectly ripe and delicious banana`);
} else if (color === "green") {
    console.log(`${color} is my favorite color of them all. It is the color of the trees, grass, and my favorite cup`);
// TODO: Have a final else that will catch indigo and violet.
// TODO: In the else, log: I do not know anything by that color.
} else {
    console.log("I don't know anything by that color")
}

// TODO: Using the ternary operator, conditionally log a statement that
//       says whether the random color matches your favorite color.

color === "green" ? console.log("That's my favorite color! :D") : console.log("That is not my favorite color :-(")




