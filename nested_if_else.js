"use strict";

//nested if else

//guessing number;

//19 you winnning number
// if about 21 too high
//less than the guess number or <18 too low




let winningNumber = 19;
let userguessedNumber = prompt("gureses number");
console.log(typeof userguessedNumber, userguessedNumber);


if (winningNumber ===
    +userguessedNumber) {
    console.log(`you have entered the right number: ${winningNumber}`);
} else {
    if (userguessedNumber < 18) {
        console.log(`you have entered too low number :${userguessedNumber} `);
    } else {
        console.log(`you have entered too high number :${userguessedNumber} `);
    }

}


//if-else-if

let temperature = 4;

if (temperature < 0) {
    console.log(`the tempearture is too cold outside`);
} else if (temperature > 35) {
    console.log("turn on the ac");
}else if (temperature > 15) {
    console.log("temperture is okay out side");
}else if (temperature < 15) {
    console.log("turn on the warmer");
}else if (temperature < 5) {
    console.log("rise up the isolators");
}else if (temperature <=-25) {
    console.log("there is ice out side");
}else if (10>temperature >0) {
    console.log("turn the warmer and stay in side");
} else {
    console.log(`the temperatur is  too hot`);
}