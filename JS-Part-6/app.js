// function hello() {
//     console.log("hello");
// }
// hello();


// Practic Qs
// function printPoem() {
//     console.log("Twinkle Twinkle little star,");
//     console.log("how are wonder what you are");
// }
// printPoem();


// Practic Qs
// function rollDice() {
//     let rand = Math.floor(Math.random() * 6) + 1;
//     console.log(rand);
// }
// rollDice();


// arguments
// function printName(name) {
//     console.log(name);
// }
// printName("Durga Kaushik");

// function printInfo(name, age) {
//     console.log(`${name}'s age is ${age}`);
// }
// printInfo("Durga", 22);


// Prac Qs
// function calcAvg(a, b, c) {
//     let avg = (a+b+c)/3;
//     console.log(avg);
// }
// calcAvg(4, 8, 10);


// Prac Qs
// function printTable(n) {
//     for(let i=n; i<=n*10; i+=n) {
//         console.log(i);
//     }
// }
// printTable(6);

// Prac Qs
// function getSum(n) {
//     let sum = 0;
//     for(let i=1; i<=n; i++) {
//         sum = sum + i;
//     }
//     return sum;
// }

// Prac Qs
// let str = ["hi", "hello", "bye", "!"];
// function concat(str) {
//     let result = "";
//     for(let i=0; i<str.length; i++) {
//         result += str[i];
//     }
//     return result;
// 


// function scope
// function calSum(a, b) {
//     let sum = a+b;
//     console.log(sum);
// }
// calSum(1, 2);


// lexical scope
// function outerFunc() {
//     let x = 5;
//     let y = 6;
//     function innerFunc() {
//         console.log(x);
//         console.log(y);
//     }
//     innerFunc();
// }


// Prac Qs
// let greet = "hello";
// function changeGreet() {
//     let greet = "namaste";
//     console.log(greet);
//     function innerGreet() {
//         console.log(greet);
//     }
// }
// console.log(greet);
// changeGreet();


// Higher order functions
// function multipleGreet(func, count) {
//     for(let i=1; i<=count; i++) {
//         func();
//     }
// }
// let greet = function() {
//     console.log("hello");
// }
// multipleGreet(function() {console.log("namaste")}, 4);

// higher order functions(return)
// function oddEvenTest(request) {
//     if(request == "odd") {
//         return function(n) {
//             console.log(!(n%2 == 0));
//         }
//     } else if(request == "even") {
//         return function(n) {
//             console.log(n%2 == 0);
//         }
//     } else {
//         console.log("wrong request");
//     }
// }
// let request = "odd";


// methods
// const calculator = {
//     num: 55,
//     add: function(a, b) {
//         return a+b;
//     },
//     sub: function(a, b) {
//         return a-b;
//     },
//     mul: function(a, b) {
//         return a*b;
//     }
// };


// assignment Qs
// let newArr = [];
// let arr1 = [26, 27, 5, 7, 3];
// const num = 20;
// function elements(arr) {
//     for(let i=0; i<arr.length; i++) {
//         if(arr[i] > num) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// console.log(elements(arr1));


// str = "abcdabcdefgggh";
// ans = "";
// function unique(durga) {
//     for(let i=0; i<durga.length; i++) {
//         if(ans.includes(durga[i]) == false) {
//             ans += durga[i];
//         }
//     }
//     console.log(ans);
// }
// unique(str);

// country = ["Australia", "Germany", "United States of America"];
// function longCountry(list) {
//     // list = country.sort();
//     return country[country.sort().length-1];
// }
// console.log(longCountry(country));


// str = "durgakaushik";
// count = 0;
// function vowels(arguments) {
//     for(let i=0; i<str.length; i++) {
//         if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
//             count += 1;
//         }
//     }
//     return count;
// }
// console.log(vowels(str));


let start = 20;
let end = 30;
function ganeratRandom(start, end) {
    let diff = end - start;
    return console.log(Math.floor(Math.random() * diff) + start);
}
ganeratRandom(start, end);