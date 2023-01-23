//string methods
// trim(),
//toupperCase(),
//tolowerCase(),
//slice(),

let firstname = "  Sahithi  ";
console.log(firstname.length);
// method to trim the whitespaces and give the output or just trim the excess spaaces.
let newString =firstname.trim();
console.log(newString.length, newString);
// method to convert into uppercase.
console.log(newString.toUpperCase());
// method to convert into lowercase.
console.log(newString.toLowerCase());
//slice method
//start index
//end index
console.log(newString.slice(0,4));//last index value is not included that means lastindex -1
console.log(newString.slice(2));
console.log(newString.slice(-1));
