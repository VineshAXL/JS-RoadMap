// let fruits = ["bannan","apple","mango","graps"];

// console.log("Before " + fruits);

// fruits.push("Vimal");

// console.log("After : "+ fruits);
// fruits.pop();

// fruits.shift();
// fruits.unshift("sheik");
// console.log("After : "+ fruits);

// let numbers = [10, 20, 30];
// console.log(numbers.length);


// for (let i = 1; i < 100; i++) {
//     console.log(i);
// }

// let student  = ["vinesh","Ram","Sheik","Vimal","Gold"];
// for (let i =0; i<=student.length-1;i++){
//     console.log(student[i]);
// }


// let nums = [1,2,3,4,5,6,7,8,9,10]
// let total = 0;
// for(let i = 0;i<nums.length;i++){
//     total = total +nums[i];
// }
// console.log(total);


// let number = [1,2,3,4,5,6,7,8,9,10];
// let total = 0;
//  number.forEach((a)=>{
//     total = total+a;
// })

// console.log(total);

// let numbers = [1,2,3];

//  let result = number.filter(num =>      num % 2 == 0);

// console.log(result);

// let total = number.map(num => num*2);
// console.log(total);

// console.log(number[0]);

// for(let i =0 ;i<number.length-1;i++){
//     console.log(i);
    
//     console.log(number[i]);
    
// }

// let total = 0;

// for(let i =0;i<number.length-1;i++){
//     total = total+number[i];
//     console.log(total);

// }

// Bubble sort Implementation using Javascript

// Creating the bblSort function
// This is our unsorted array
 let arr = [234, 43, 55, 63, 5, 6, 235, 547];


    for (let i = 0; i < arr.length; i++) {
        // Last i elements are already in place  
        for (let j = 0; j < (arr.length - i - 1); j++) {
            // Checking if the item at present iteration 
            // is greater than the next iteration
            if (arr[j] > arr[j + 1]) {
                // If the condition is true
                // then swap them
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    // Print the sorted array
    console.log(arr);



// Now pass this array to the bblSort() function


