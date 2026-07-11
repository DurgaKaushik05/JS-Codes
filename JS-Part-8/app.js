// forEach method
// let arr = [1, 2, 3, 4, 5];
// // let print = function(el) {
// //     console.log(el);
// // };
// // arr.forEach(print);
// //or
// arr.forEach(function(el) {
//     console.log(el);
// });

// let arr = [{
//     name: "Durga",
//     marks: 90,
// },
// {
//     name: "KK",
//     marks: 92,
// }, 
// {
//     name: "AR",
//     marks: 92.6,
// }];
// arr.forEach((student) => {
//     console.log(student.marks);
// });


// map method
// let num = [1, 2, 3, 4];
// let double = num.map((el) => {
//     return el * 2;
// });
// console.log(double);

// let student = [{
//     name: "Durga",
//     marks: 90,
// },
// {
//     name: "Atul",
//     marks: 92,
// }, 
// {
//     name: "Chandra",
//     marks: 92.6,
// }
// ];

// let gpa = student.map((el) => {
//     return el.marks/10;
// });
// console.log(gpa);


// filter method
// let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9];
// let even = nums.filter((num) => {
//     return num%2 == 0;
// });
// console.log(even);


// Every method
// let arr = [2, 4, 6, 8];
// let res = arr.every((el) => {
//     return el%2 == 0;
// });
// console.log(res);

// let arr2 = [2, 4, 6, 8, 1];
// let res2 = arr2.every((el) => {
//     return el%2 == 0;
// });
// console.log(res2);


// reduce method
// let nums = [1, 2, 3, 4];
// let finalVal = nums.reduce((res, el) => {
//     console.log(res);
//     return res + el;
// });
// console.log(finalVal);

// Maximum in array
// let nums = [2, 3, 4, 5, 3, 4, 7, 8, 1, 10];
// let result = nums.reduce((max, el) => {
//     if(el > max) {
//         return el;
//     } else {
//         return max;
//     }
// });
// console.log(result);


// Prac Qs
// let arr = [5, 8, 10, 40];
// let res = arr.every((el) => {
//     return el % 10 == 0;
// });
// console.log(res);

// let nums = [1, 2, 3, 4, 5];
// let result = nums.reduce((min, el) => {
//     if(min < el) {
//         return min;
//     } else {
//         return el;
//     }
// });
// console.log(result);


// Default Parameters
// function sum(a, b=2) {
//     return a + b;
// }
// // console.log(sum(2, 5));
// console.log(sum(2));


// // spread
// console.log(..."Durga");

// // spread with array literals
// let arr = [1, 2, 3, 4, 5];
// let newArr = [...arr];
// console.log(newArr);

// let odd = [1, 3, 5, 7, 9];
// let even = [2, 4, 6, 8, 10];
// let nums = [...even, ...odd];
// console.log(nums);

// Spread with Object literals
// const data = {
//     email: "spreadwithobject@gmail.com",
//     password: "abcd",
// };

// const dataCopy = {...data, id: 123};
// console.log(dataCopy);


// // Rest
// function sum(...args) {
//     for(let i=0; i<args.length; i++) {
//         console.log("you gave us: ", args[i]);
//     }
// }
// console.log(sum(2));
// console.log(sum(2, 4, 6, 8));


// // Destructuring
// let names = ["Durga", "AR", "KK", "Atul", "Chandra"];
// let [winner, runnerup, secondRunnerup, ...others] = names;
// console.log(winner);
// console.log(secondRunnerup);
// console.log(others);

// Destructure Objects
const student = {
    name: "Durga",
    age: 22,
    class: "Final",
    subjects: ["DSA", "JS", "HTML", "CSS"],
    username: "durga@123",
    password: "abcd",
};
// let username = student.username;
// let password = student.password;
let {username, password} = student;
console.log(student.username);