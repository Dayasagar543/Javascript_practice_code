const users = [{
    name: "vidya",
    gender: "male",
    },
    {
        name: "daya",
        gender: "male",
    },
    {
        name: "mahesh",
        gender: "male",
    },
    {
        name: "rajesh",
        gender: "male",
    },
    {
        name: "vijay",
        gender: "male",
    },
    {
        name: "kumar",
        gender: "male",
    }
];

// for (let user of users) {
//     console.log(user.gender,user.name);
// }




//nested destructuing.
let [{name:naam}, ,...rest] = users;
console.log(naam);