// primitive_vs_reference_datatypes


//primitives
let num1 = 6;
let num2 = num1;
console.log(num1, num2); 
num1++;
console.log(num1, num2); 

//reference types
//array

let array = ["item1", "item2"];
let array1 = array;
console.log(array1, array);

array1.push("item3");
console.log(array1, array);
 
//for non mutability of arrays
// create or copy and assign each array individually for each variable
//cloning .
let array2 = ["item1", "item2"];
let array3 = ["item1", "item2"];
array3.push("item4");


//cloneing can be done by slicing and concat
//1.
let array4 = array2.slice(0).concat(["item1","item2"]);
console.log(array4);
//2.
let array5 = [].concat(array4);
console.log(array5);
//3.
//using spead operator.
let array6 = [...array5];



array2 = [...array4, "item4", "item6"]
console.log(array2);