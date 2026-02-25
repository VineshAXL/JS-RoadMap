
// 💥 Practice Tasks (Compulsory)

// 1️⃣ Create array of 5 student names
let student  = ["vinesh","Ram","Sharmi","Vimal","Gold"];
// 2️⃣ Print all using loop
for (let i =0; i<=student.length;i++){
    console.log(student[i]);
}
// 3️⃣ Add 2 new names
student.push ("karthi");
student.push ("karthiss");
console.log(student);

// 4️⃣ Remove one name
student.pop();
console.log(student);

// 5️⃣ Find total of numberarray
console.log(student.length);

// 🔥 Challenge

// Find largest number in array (without Math.max)

let num=[1,2,13,4,5,6]
let big =0;
for (let i =0;i<=num.length;i++){
if(big<num[i]){
    big=num[i];
}
}
console.log(big);

