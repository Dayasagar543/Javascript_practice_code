"use strict";

let i = 0;
while (i <= 5) {
    console.log(`${i}`);
    i++;
}


let num = 10
let total = 0;
let j = 0;

while (total <= 100) {
    console.log(`${total}`);
    total = total + num;
    num * j;
    j++;
}


let k = 0;
let m = 1;
let target =9;

let o = 2;

console.log(k);
console.log(m);
while (o <= target) {
    let temp = k + m;
    k = m;
    m = temp;
    console.log(m);
    o++;
}

//we can use formula to enhace .
let n = 50;
let total1 = (n * (n + 1)) / 2;
console.log(total1);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// function binary_search(arr, target){
//     let starting = 0;
//     let ending = arr.length-1;
//     while (starting<=ending) { 
//         let mid = starting + (ending-starting)/2;
//         if (target < arr[mid]) {
//             ending = mid - 1;
//         } else if (target>arr[mid]) {
//             starting = mid + 1;
//         } else {
//             console.log(arr[mid]);
//             return mid;
//         }
//     }
//     return -1;
// }

// binary_search(arr, 8)

