//undefined:if we donot initlise the variables the default values assigned in js are undefined.you can do it with var and let but not with const this will throw an error(uncaught syntax error :missing intializer in const declaration).
let firstname;
console.log(`firstname: ${firstname}:the type od the value is` + "  " + typeof firstname); 
firstname = "Harshith";
console.log(firstname);
//null
let variable = null;
console.log(variable);
console.log(typeof variable);//type of null is object ,this is a bug in js
variable = 1443;
console.log(typeof variable,variable);

//Bigint: has been introduced in 2020
let num = 234;
console.log(num);
console.log(Number.MAX_SAFE_INTEGER)//this is the maximum number which you can use safely without any issues.
let number = BigInt(45678789908766);
let number3 = 45678789908766n;
console.log(`the data type of the number ${number} is ${typeof number},the datatype of ${number3}  is  ${typeof number3}`);
let result = BigInt(number + number3);
console.log(`the result of two bigint numbers ${result}`);

