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
console.log(countpending(list));


//  Q4 = Product Pricing (Object)  
//  You’re managing a catalog of products where each product is represented as an object with properties: name, category, and price. Write a function that updates the price of a specific product.

const product  = [ {
    name : "laptop",
    category : "electronic",
    price : 25000
},{
    name : "mobile",
    category : "electronic",
    price : 5000
},{
    name : "washing machine",
    category : "electronic",
    price : 45000
},{
    name : "television",
    category : "electronic",
    price : 10000000
},]

function updateprice (catalog,productname,newprice ){
    for(let prdt of catalog){
        if(prdt.name === productname){
            prdt.price = newprice
            return true
        }
    }
    return false
}

console.log(updateprice(product, "laptop", 24000));
console.log(product);

