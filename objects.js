//objects

const person = {
    "name": "John",
    "age": 26,
    "email": "john@example.com",
    "gender": "male",
    "hobbies": ["cricket", "hockey", "wallyball"]
}

console.log(person);
//accessing the data from object

console.log(person.name);
let val = "hobbies";
console.log(person[val]);

person.phone_num = 9010969090;
console.log(person.phone_num);
person["complexion"] = "wheatish";
console.log(person.complexion);
console.log(person);


//iterating using for of on arrray at key
console.log("this is prinited with for of ");
for (ele of person.hobbies) {
    console.log(ele);
}

//iterating using for in on the array .
console.log("this is prinited with for in")
for (ele in person.hobbies) {
    console.log(person.hobbies[ele])
}

//itearting the key value pairs of object.

for (val in person) {
    console.log(person[val])
}

//iterating on the while data.
for (val in person) {
    console.log(`${val} :${person[val]}`)
}

console.log(Object.keys(person));
console.log(Object(person));

for (let key of Object.keys(person)) {
    console.log(person[key]);
 }