// 💥 Practice Tasks (Compulsory)

// 1️⃣ Create object for mobile (brand, price, color)
let mobile = {
    brand : "Apple",
    price : 40000,
    color : "red"
};
console.log(mobile);

// 2️⃣ Create 3 student objects inside array
let student = [
    {name:"Vinesh",Age:21,City:"Chennai",mark:65},
    {name:"Ram",Age:24,City:"Coimbatore",mark:75},
    {name:"Karthi",Age:23,City:"Chennai",mark:40}
]
// 3️⃣ Print all names using loop
 student.forEach(studentnames=>{
console.log(studentnames.name);
    
});

// 4️⃣ Increase marks by 5 using map
student.map(stdmark=>{
 console.log(stdmark.mark+5);
});
// 5️⃣ Filter students above 50
student.filter(pass=>{
      
       if(pass.mark >=50){
        console.log(pass.name +" - "+pass.mark + "Pass");
       }else{
        console.log(pass.name +" - "+pass.mark + "Fail");
       }
    });


// 🔥 Challenge

// Create product list:

let products = [
  {name: "Laptop", price: 50000},
  {name: "Laptop", price: 50000},
  {name: "Mobile", price: 20000},
  {name: "Tablet", price: 15000}
];

// 👉 Print only products above 18000
products.filter(prices =>{
if(prices.price>=18000){
console.log(prices.name+" - "+prices.price);
}
});
// 👉 Add new product
let pro={name:"Mobile",price:40000};
products.push(pro);

// 👉 Increase all prices by 10%
products.map(inc=>{
let per = 10/100;
let as =inc.price*per;
console.log(inc.price+as);
});

