//type of operator.

//data types (primitive data types)
//string "sahithi"
//number 2,3,4,5
//booleans
//undefined
//null
//Bigint
//symbol
let name1 = "sahithi";
let number = 678576;
console.log("the data type of name :"+" "+typeof (name1));
console.log("the data type of number :"+" "+typeof (number));

//convert number to string./type casting
number=number+"";
console.log(typeof number);
//convert string to number./type casting
number = +number;
console.log(typeof number);

let myage = "23";
console.log( typeof +myage);
let newage = Number(myage);
newage = String(newage);
console.log(typeof newage);
