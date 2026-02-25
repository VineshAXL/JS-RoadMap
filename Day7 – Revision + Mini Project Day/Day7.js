// Even/Odd function

function even(a) {
    if (a % 2 == 0) {
        console.log(`odd ${a}`);
    } else {
        console.log(`Even ${a}`);
    }
}
even(10);

// Factorial using loop
let n = 3;
let res = 1;
for (let i = 0; i <= 2; i++) {
    res *= i;
}
console.log(res);

// Biggest of 3 numbers
let a = 11;
let b = 12;
let c = 13;
if (a > b) {
    console.log(`${a} is Grater`);
} else if (b > c) {
    console.log(`${b} is Grater`);
} else if (a > c) {
    console.log(`${a} is Grater`);
} else {
    console.log(`${c} is Grater`);
}

// Multiplication table
for (let i = 1; i <= 10; i++) {
    console.log(i + " * 2 = " + 2 * i);
} 