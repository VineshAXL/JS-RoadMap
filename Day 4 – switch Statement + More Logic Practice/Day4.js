
// 💥 Practice Tasks (Compulsory)

// 1️⃣ Day name print using switch + prompt
let day = 2;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tusday");
        break;
    case 3:
        console.log("Wensday");
        break;
    case 4:
        console.log("thusday");
        break;
    case 5:
        console.log("Friday");
        break;
}

// 2️⃣ Traffic light system (Red, Yellow, Green)

let color = "Red";

switch (color) {
case "Red":
    console.log("Stop Vechile");
    break;
case "Yellow":
    console.log("Wait");
    break;
case "Green":
    console.log("Go...");  
    break;
}
// 3️⃣ Simple menu program (1 → Add, 2 → Subtract)
let a = 5;
let b=10;
let oper = 1;

switch (oper){
    case 1:
        console.log("Add "+ a+b);
       break;
    case 2:
        console.log("Subtract " + a-b);
         break;
}
// 4️⃣ Check number positive / negative / zero
let c= 5

if(c !== 0){
    if(c >=0){
        console.log(c+" is Positive Number");
    }else{
        console.log(c+" is Negative Number");
    }
}else{
    console.log(c+" is Zero");
}
// 5️⃣ Vowel or consonant checker
let s="a";
if (s === "A" || s ==="E" ||s ==="I" ||s ==="O"||s ==="U"
    ||s ==="a"||s ==="e"||s ==="i"||s ==="o"||s ==="u"
) {
    console.log(s+" is Vowel");
}else{
    console.log(s+" is Consonant");    
}


// 🔥 Challenge

// Create electricity bill calculator:

// 0–100 units → ₹5 per unit

// 101–200 → ₹7 per unit

// Above 200 → ₹10 per unit

let unit = 60;
if(unit >=200){
    console.log("Above 200 → ₹10 per unit for "+ unit + " Total Bill Rs."+unit*10);
}else if(unit >=101){
    console.log("101–200 → ₹7 per unit for "+ unit + " Total Bill Rs."+unit*7);
}else{
     console.log("0–100 → ₹5 per unit for "+ unit + " Total Bill Rs."+unit*5);
}