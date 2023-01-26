
//for loop.
for (i = 0; i <= 100; i++){
    console.log(i);
}



//break statement
for (i = 0; i <= 100; i++){
    if (i <= 60) {
        console.log(i);
    } else {
        break;
  }
}

for (i = 0; i <= 100; i++){
    if (i >= 60) {
        console.log(i);
        continue
    } 
}


console.log("printing using do while");
let j = 0
do {
    console.log(j);
    j++;
} while (j <= 100);

console.log(`value of j is ${j}`)