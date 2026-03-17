// 💥 Practice Tasks (Compulsory)

// 1️⃣ Convert 5 normal functions to arrow
const add = (a,b)=>{
    return (a+b)
}

const multi = (a,b)=>{
    return (a*b)
}

const squre =(n)=>{
   return n*n;
}

// console.log(squre(2));

const greet = name => "hello " + name;


// console.log(greet("Vinesh"));


// console.log(div(5,10));

const age = age => age >=18;

// 2️⃣ Use template literal to print student details


let name = "Vinesh";
let marks = 80;

// console.log(`Student Name: ${name}, Marks: ${marks}`);


// 3️⃣ Destructure object inside array

let users1 = [
  {name: "Vinesh", age: 21},
  {name: "Arun", age: 22}
];
// console.log(users);
users1.forEach((name,age)=>{
    // console.log(name,age);
});

// 4️⃣ Merge 2 arrays using spread

let arr1 = ["1",2,3];
let arr2 = [4,5,"6"];

let merged = [...arr1, ...arr2];

// console.log(merged);

// 5️⃣ Create function using rest operator

/// .... this is rest operator

function sum(...numbers){
    let total = 0;
    numbers.forEach(num => total+=num );
    return total;
}

// console.log(sum(10,20,30,40));

// 🔥 Challenge

// Given:

let users = [
  {name: "Vinesh", age: 21},
  {name: "Arun", age: 22}
];

// 👉 Use map + destructuring to print
// Name: Vinesh, Age: 21


users.map((name,age)=>{
    console.log(`Name: ${name}, Age: ${age}`);
})