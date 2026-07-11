// for(let i=1; i<=5; i++) {
//     console.log(i);
// }

// for(let j=5; j>=1; j--) {
//     console.log(j);
// }

// print odd numbers
// for(let i=1; i<=15; i=i+2) {
//     console.log(i);
// }

// print even numbers
// for(let i=2; i<=20; i=i+2) {
//     console.log(i);
// }

// backword
// console.log("backword");
// for(let j=20; j>=2; j=j-2) {
//     console.log(j);
// }

// infinite loop
// for(let i=1; i<=5; i--) {
//     console.log(i);
// }

// multiplication table for 5
// for(let i=5; i<=50; i=i+5) {
//     console.log(i);
// }

// or
// let n = prompt("enter your number");
// n = parseInt(n);
// for(let i=n; i<=n*10; i=i+n) {
//     console.log(i);
// }

// nested loops
// for(let i=1; i<=3; i++) {
//     console.log(`outer loop ${i}`);
//     for(let j=1; j<=3; j++) {
//         console.log(j);
//     }
// }

// while loop
// let i=1;
// while(i <= 5) {
//     console.log(i);
//     i++;
// }

// print favorite movie using while loop
// const favMovie = "DDLJ";
// let guess = prompt("guess my favorite movie..!");
// while(guess != favMovie) {
//     if(guess == "quit") {
//         console.log("you quit");
//         break;
//     }
//     guess = prompt("wrong guess. please try again");
// }

// if(guess == favMovie) {
//     console.log(`congrats.. you guess my favoritye movie that is ${favMovie}`);
// } 

// loops with array
// let fruits = ["mango", "apple", "banana", "litchi", "orange"];
// for(let i=0; i<fruits.length; i++) {
//     console.log(i, fruits[i]);
// }
// for(let i=fruits.length-1; i>=0; i--) {
//     console.log(i, fruits[i]);
// }

// loops with nested arrays
// let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"]];
// for(let i=0; i<heroes.length; i++) {
//     console.log(i ,heroes[i], heroes[i].length);
//     for(let j=0; j<heroes[i].length; j++) {
//         console.log(`j=${j}, ${heroes[i][j]}`);
//     }
// }

// let students = [["Durga", 80], ["Divya", 85], ["Dolly", 79]];
// for(let i=0; i<students.length; i++) {
//     console.log(`info of student #${i+1}`);
//     for(let j=0; j<students[i].length; j++) {
//         console.log(students[i][j]);
//     }
// }

// for-of loops
// let fruits = ["mango", "banana", "litchi", "apple", "orange"];
// for(fruit of fruits) {
//     console.log(fruit);
// }

// for(char of "Durga") {
//     console.log(char);
// }

// nested for-of loops
// let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"]];
// for(hero of heroes) {
//     for(name of hero) {
//         console.log(name);
//     }
// }

// todo app
// let todo = [];
// let req = prompt("please enter your request");

// while(true) {
//     if(req == "quit") {
//         console.log("quitting app");
//         break;
//     }

//     if(req == "list") {
//         console.log("-----------");
//         for(let i=0; i<todo.length; i++) {
//             console.log(i, todo[i]);
//         }
//         console.log("-----------");
//     } else if (req == "add") {
//         let task = prompt("please enter the task you want to add");
//         todo.push(task);
//         console.log("task added");
//     } else if(req == "delete") {
//         let idx = prompt("please enter the task index");
//         todo.splice(idx, 1);
//         console.log("task deleted");
//     } else {
//         console.log("wrong request");
//     }
//     req = prompt("please enter your request");
// }

// assingment Qs
// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;
// for(let i=0; i<arr.length; i++) {
//     if(arr[i] == num) {
//         arr.splice(i, 1);
//     }
// }
// console.log(arr);

// let number = 287152;
// let count = 0;
// let copy = number;
// while(copy > 0) {
//     count++;
//     copy = Math.floor(copy/10);
// }
// console.log(`length of numbers is ${count}`);

// or
// let number = 287152;
// let count = 0;
// nums = String(number);
// for(num of nums) {
//     count++;
// }
// console.log(count);

// let number = 287152;
// let sum = 0;
// nums = String(number);
// for(num of nums) {
//     sum += Number(num);
// }
// console.log(sum); 

// let n = 5;
// let fact = 1;
// for(let i=1; i<=n; i++) {
//     fact = fact*i;
// }
// console.log(fact);

let arr = [1, 2, 3, 4, 5, 6, 8, 9, 100];
let largest = 0;
for (let i = 0; i <= arr.length; i++) {
    if (largest < arr[i]) {
        largest = arr[i];
    }
}
console.log(largest);


// let todo = [];
// let req;
// while (true) {
//   req = prompt("Enter your request:");
//   if (req === null) {
//     console.log("Input cancelled. Exiting the app.");
//     break;
//   }
//   req = req.trim().toLowerCase();
//   if (req === "quit") {
//     console.log("Quitting App");
//     break;
//   } else if (req === "list") {
//     if (todo.length === 0) {
//       console.log("No tasks in the todo list.");
//     } else {
//       for (let i = 0; i < todo.length; i++) {
//         console.log(i, todo[i]);
//       }
//     }
//   } else if (req === "add") {
//     const task = prompt("Please add your task:");
//     if (task !== null && task.trim() !== "") {
//       todo.push(task.trim());
//       console.log(`Task Added ${task}`);
//     } else {
//       console.log("No task added.");
//     }
//   } else if (req === "delete") {
//     const idx = prompt("Please enter the task index to delete:");
//     const index = Number(idx);
//     if (!Number.isNaN(index) && index >= 0 && index < todo.length) {
//       todo.splice(index, 1);
//       console.log("Task Deleted");
//     } else {
//       console.log("Invalid index. No task deleted.");
//     }
//   } else {
//     console.log("Invalid request! Please enter list, add, delete, or quit.");
//   }
// }