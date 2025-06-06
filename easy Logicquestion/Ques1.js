const inventory = [ "apple", "bannana" , "orange" , "milk", "bread"];

function checkproduct(inventory , produnctname){
    return inventory.includes(produnctname)
}

// console.log(checkproduct(inventory,"milk"));

// 2 question
// User Profile (Object)
//  You’re building a profile system. Each user’s profile is stored as an object with name, email, and age properties. Write a function to update a user’s email address when given their name.

const profile  = [ 
    {
        name: "sahib",
        age : 21,
        email : "sahib@gmail.com"
    },
    {
        name : "raaaj",
        age : 20,
        email : "raaaj@gmail.com"
    },
    {
        name : "nav", 
        age : 26,
        email : "nav@gmail.com"
    }
]

function updateemail (profile , name , newemail){
    for( let user of profile){
        if (user.name === name) {
            user.email = newemail;
            return true
        }
    }
    return false;
}

// console.log(updateemail(profile,"nav" , "nav200@gmail.com"));
// console.log(profile);

const list  = [ {
    name : "bathing",
    status : "done"
},{
    name : "washing",
    status : "pending"
},{
    name : "breakfast",
    status : "done"
},{
    name : "reached",
    status : "pending"
},
];

function countpending (task){
    let count = 0; 
    for(let tasks of task){
        if(tasks.status === "pending"){
            count++;
        }
    }
    return count;
}
console.log(countpending(`these item currently pending : ${list}`))
