// 💥 Practice Tasks (Compulsory)
// 1️⃣ Double all numbers using map
let arr  = [10,21,30,40,50];
for (let i=0;i<=arr.length-1;i++){
//    console.log(arr[i]*2);
}

let double =arr.map(function(eke){
    return eke*2;
})
console.log(double);

// 2️⃣ Filter odd numbers
let odd = arr.filter(function (num){
return num %2 !==0
});
console.log(odd);
// 3️⃣ Convert all names to uppercase
let lower = ['hello', 'world', 'javascript'];
let upper = lower.map(item => item.toUpperCase());
console.log(upper); 

// 4️⃣ Find numbers greater than 50
let nums = [20, 60, 45, 80, 30];
let big = nums.filter(n => n > 50);
console.log(big);

// 5️⃣ Sum array using loop
let n = 0;
nums.forEach(nums => n+=nums);
console.log(n);

// 🔥 Challenge

// Given:

let students = [
  {name: "Vinesh", marks: 80},
  {name: "Arun", marks: 45},
  {name: "Kumar", marks: 90}
];

// 👉 Filter students with marks above 50


let pass = students.filter(students=>students.marks>50);
console.log(pass);

// 👉 Get only names using map
let nn = pass.map(students=> students.name);
console.log(nn);

// 🧠 Ultra Important Concept

// filter → remove unwanted data
// map → modify data

// Together use panna dhan real power 🔥

// Example:

let toppers = students
  .filter(s => s.marks > 50)
  .map(s => s.name);

console.log(toppers);

// One line powerful code 😎🔥
