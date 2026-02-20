// 💥 Mini Tasks (Compulsory)

// 1️⃣ Even / Odd Checker
let a = 15;

if (a % 2 == 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// 2️⃣ Biggest of 3 Numbers

let b = 155;
let c = 132;
let d = 100;

if (b > c && b > d) {
    console.log(b + " Is the Greaest number");
} else if (c > b && c > d) {
    console.log(c + " Is the Greaest number");
} else {
    console.log(d + " Is the Greaest number");
}
// 3️⃣ Simple ATM withdrawal condition

let balance = 10000;
let amount = 1000;
let pin = 1234;

if (pin === 1234) {
    if (amount > 0) {
        if (balance > amount) {
            console.log("Balance Amount is ", balance - amount);
            console.log("Rs." + amount + " Collect Your Cash");
        } else {
            console.log("Insufient Balance");
        }

    } else {
        console.log("Please Enter Valid Amout");
    }
} else {
    console.log("Incorect Pin");
}

// 4️⃣ Grade calculator using prompt
let mark = 100;

if (mark < 0 || mark > 100) {
    console.log("Please enter Valid Mark");
} else if (mark >= 90) {
    console.log("Grade A");
}
else if (mark >= 80) {
    console.log("Grade B");
}
else if (mark >= 60) {
    console.log("Grade C");
}
else if (mark >= 40) {
    console.log("Grade S");
} else {
    console.log("Fail");
}

// 5️⃣ Check leap year
let year = 2200;

if (year % 4 == 0) {
    if (year % 100 == 0) {
        console.log("non but Leap Year");
    } else {
        console.log("Leap Year");
    }
} else {
    console.log("Not Leap Year");
}