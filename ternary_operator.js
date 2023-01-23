//ternary operator
let age = 8
let drink;

drink = age >= 5 ? "coffee" : "milk";
console.log(drink);
 
// if else and nested if else

//winning number 19

//19 your guess is right
//17 to low
//20 too high

let winningNumber = 19;
let userguess = Number(prompt("hi there please guess the number "))
 
// winningNumber === userguess ? console.log("your guess is correct") : console.log("your gess is wrong")
 
userguess ===winningNumber ? console.log("your guess is correct") : userguess <=17 ? console.log("your guess is too low") :  userguess >=22 ? console.log("too high") : console.log("you are near to it")