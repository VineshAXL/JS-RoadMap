// Create simple calculator using prompt:

let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"));

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);

// 🎯 Practice Tasks

// 1. Check even or odd using % operator
let a =5;
if(a%2 == 0){
    console.log(a +" is a Even Number");
}else{
    console.log(a +" is a Odd Number");
}

// 2. Compare two numbers and print biggest

let b = 3;
let c = 5;

if(b<c){
console.log(b +" is Lesser than "+ c);

}else{
    console.log(c +" is Greater than "+ b);
}

// 3. Create discount calculator

let discount= 30;
let price = 100;

let afterDiscount = (price*discount)/100
let finalPrice = price -afterDiscount;
console.log("After Discout is:" + finalPrice);


// 4. Try strict equality example

let d = 5;
let e = 4;
console.log(d === e);
if(d === e){
    console.log("data type and value are same");
}else{
    console.log("data type or value are not same");
}
