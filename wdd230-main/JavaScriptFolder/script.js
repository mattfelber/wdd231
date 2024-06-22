/*
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("hello world");

var i = "hello string";
let y = 1;
const x = 3;

var word = prompt("Enter a word:");
var times = prompt("How many times would you like to print the word?");

times = parseInt(times);

if (isNaN(times) || times <= 0) {
    console.log("Invalid input. Please enter a positive number.");
} else {

    for (var i = 0; i < times; i++) {
        console.log(word + " ");
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

var base = prompt("Enter the base of the triangle:");
var height = prompt("Enter the height of the triangle:");

base = parseFloat(base);
height = parseFloat(height);

var area = base * height / 2;
console.log("The area of the triangle with base " + base + " and height " + height + " is: " + area);

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

let i = 1;

while (i <= 100) {
    if (i % 2 === 0) {
        console.log(i + " is an even number");
    } else {
        console.log(i + " is an odd number");
    }
    i = i + 1;
}

*/
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
for (let num = 2; num <= 100; ) {
    let isPrime = true;
    if (num > 1) {
        for (let i = 2; i <= num / 2; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(num + " is a prime number");
        } else {
            console.log(num + " is not a prime number");
        }
    } else {
        console.log(num + " is not a prime number");
    }
    num = num + 1;
}