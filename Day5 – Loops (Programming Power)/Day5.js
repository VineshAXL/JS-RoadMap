// 💥 Practice Tasks (Compulsory)

// 1️⃣ Print 1–50
for (let i= 1 ; i<= 50;i++){
    // console.log(i); 
}
// 2️⃣ Print 50–1 reverse
for (let i=50;i>=1;i--){
    // console.log(i);
}
// 3️⃣ Sum of numbers 1–100
let a = 0;
for(let i=1;i<=100;i++){
    a +=i;
}
//console.log(a);

// 4️⃣ Factorial of a number
let n=5;
let  res = 1;
for (let i = 1 ; i<=n;i++){
    res*=i;
}
//console.log(res);

// 5️⃣ Count digits in a number


let num = 12345;
let count =0;

while(num>0){
num = Math.floor(num/10);
count++;
}

// console.log(count);


// 6️⃣ Reverse a number
let reverse = 0;
while (num>0){
    let digit = num% 10;
 reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
}

// console.log("Reversed number:", reverse);

// 🔥 Logic Challenge

// Find largest number in loop (without Math.max)

let arr = [1,2,7,4,5];
let larger = arr[0];

for (let i =0;i<arr.length;i++){
    if(arr[i]>larger){
        larger = arr[i]
    }
}
console.log(larger);












