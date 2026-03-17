// 💥 Practice Tasks (Compulsory)

// 1️⃣ Print message after 5 seconds
setTimeout(function msg(){
//    console.log("After 5 Sec Time");
    
},5000);

setTimeout(()=>{
    // console.log("hello");
    
},3000);

// 2️⃣ Create countdown from 5 to 1
let count  = 5;
let timer = setInterval(()=>{
    // console.log(count);
    count--;
    if(count === 0){
        clearInterval(timer);
    }
},2000);

// 3️⃣ Create digital clock using setInterval
setInterval(()=>{
    let now = new Date();
    let time = now.toLocaleTimeString();
    // console.log(time);
    
},3000);

// 4️⃣ Show loading message → after 3 sec show content
// console.log("Laoding...");

// setTimeout(()=>{
//     console.log("Successfully Message loaded");
    
// },2000);
// 5️⃣ Stop interval after 10 seconds

let interval = setInterval(()=>{
    console.log("Running");
},1000);

setTimeout(()=>{
    clearInterval(interval);
    console.log("Stoped Intervel");
    
},10000);
// 🔥 Challenge

// Simulate fake login:

// 1️⃣ Show “Checking credentials…”
// 2️⃣ After 2 sec show “Login Success”
console.log("Checking credentials...");

setTimeout(() => {
  console.log("Login Success");
}, 2000);

// Use setTimeout.

console.log("Connecting to server...");

setTimeout(() => {
  console.log("Fetching data...");
}, 2000);

setTimeout(() => {
  console.log("Data Loaded Successfully!");
}, 4000);