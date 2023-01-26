//arrays :ordered collection of items of same kind data.
//in javascript arrays can store multiple types of data items.
//referenc type

//array creations

let arrays = ["apple", "mango ", "orange", "grapes"];
console.log(arrays);
arrays[0] = "custard apple"
console.log(arrays);
// array indexing

console.log(arrays)
console.log(arrays[0])
console.log(typeof arrays);

//is array method.
let result = Array.isArray(arrays); 

// array methods for adding data at the back
//array are faster .
arrays.push("kiwi");
console.log(arrays);
let fruit=arrays.pop();
console.log(arrays);
console.log(arrays.indexOf("kiwi"));

let array1 = []
array1.push("green apple");
array1.push(fruit);
console.log(array1);

//array methos for adding data in front.
//there are slow interms of performance
array1.unshift("fig");//appends the data in front
console.log(array1);//pops the data from the front.

let output=array1.shift("fig");
console.log(array1);
console.log(`the remove shifted data is ${output}`);






