"use strict";

// Don't change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single randome
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random() * colors.length)];

switch (color) {
    // TODO: create a case statement that will handle every color except indigo and violet
    // TODO: when a color is encountered log a message that tells the color, and an object of that color
    //       example: Blue is the color of the sky.
    case 'red': console.log(`${color} is the color of fiery passion`);
        break;
    case 'orange': console.log(`${color} is the color of my favorite fruit`);
        break;
    case 'yellow': console.log(`${color} is the color of a perfectly ripe and delicious banana`);
        break;
    case 'green': console.log(`${color} is my favorite color of them all. It is the color of the trees, grass, and my favorite cup`);
        break;
    // TODO: create a default case that will catch indigo and violet
    // TODO: for the default case, log: I do not know anything by that color.
    default: console.log("I don't know anything by that color");



}
