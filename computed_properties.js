//computed properties.

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "value1";
const value2 = "value2";

let object = {
    [key1]: value1,
    [key2]: value2
};

// object[key1] = value1;
// object[key2] = value2;


console.log(object);


let arr1 = [1, 2, 3, 4, 5];
let arr2 = [ 6, 7, 8, 9];


let array = [...arr1, ...arr2];
console.log(array);
    

const newarray = [..."1234567", ..."dayasagar"];
console.log(newarray);




//spread operator in objects

const object1 = {
    value1: "1",
    value2: "2",
    value3: "3",
}

let object_spreading = { ...object1 }
console.log(object_spreading)
//string destructuing
let object3 = { ..."abcdefghijklmnopqrstuvwxyz" };
console.log(object3)

//object destructuing

let band = {
    bandName: "waka waka",
    artist: "shakira",
    age: "34",
    country:"usa"
}

// const bandname = band.bandName;
// const artist = band.artist;

// console.log(bandname, artist);

// let { bandName, ...rest } = band;
// bandName="rocx"
let { bandName:value, ...rest } = band;//this syntax after the destructured value bandName : value  replaces the bandName with value lets look at the output.

// console.log(bandName,rest);
console.log(value,rest);//