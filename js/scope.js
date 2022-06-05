"use strict";

(function () {
    let myNameIs = 'Cory'
    function sayHello(name) {
        console.log(`Hello, ${name}!`)
    }
    sayHello(myNameIs);
})();

(() => {
    let random = Math.floor((Math.random() * 100) + 1);
    function isOdd(num) {
        num % 2 !== 0 ? console.log("It's Odd!") : console.log("It's Not Odd :-(")
    }
    isOdd(random);
})();
