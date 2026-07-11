// const student = {
//     name: "Durga",
//     age: 22,
//     eng: 90,
//     math: 90,
//     phy: 85,
//     getAvg() {
//         let avg = (student.eng + student.math + student.phy) / 3;
//         console.log(avg);
//     }
// }
// student.getAvg()

// const student = {
//     name: "Durga",
//     age: 22,
//     eng: 90,
//     math: 90,
//     phy: 85,
//     getAvg() {
//         let avg = (this.eng + this.math + this.phy) / 3;
//         console.log(avg);
//     }
// }
// student.getAvg()


// try & catch
// console.log("hello");
// console.log("hello");
// try {
//     console.log(a);
// } catch(e) {
//     console.log("this is an error. a is not define..")
// }
// console.log("hello2");
// console.log("hello2");


// Arrow func
// const sum = (a, b) => {
//     console.log(a+b);
// };

// implicit return Arrow func
// const mul = (a, b) => a * b;
// console.log(mul(2, 6));



// setTiomeout func
// console.log("hi there!");
// setTimeout(() => {
//     console.log("Apna College");
// }, 4000);
// console.log("welcome to");


// setInterval func
// let id = setInterval(() => {
//     console.log("Apna College");
// }, 2000);
// console.log(id);

// clearInterval(id);


// this with Arrow func
// const student = {
//     name: "durga",
//     marks: 90,
//     prop: this,   //global scope
//     getName: function() {
//         console.log(this);
//         return this.name;
//     },
//     getMarks: () => {
//         console.log(this);    //parents scope => window
//         return this.marks;
//     },
//     getInfo1: function () {
//         setTimeout(() => {
//             console.log(this);
//         }, 2000);
//     },
//     getInfo2: function() {
//         setTimeout(function()  {
//             console.log(this);
//         }, 2000);
//     },
// };


// prac qs
// const square = (n) => n * n;
// console.log(square(4));

// let id = setInterval(() => {
//     console.log("hello world");
// }, 2000);

// setTimeout(() => {
//     clearInterval(id);
//     console.log("clear interval");
// }, 10000);


// const arrayAverage = () => {
//     let arr = [5, 9, 3];
//     sum = 0;
//     for(let i=0; i<arr.length; i++) {
//         sum += arr[i];
//         return sum;
//     }
//     let avg = sum/arr.length;
//         return console.log(avg);
// }
// arrayAverage;

// const arrayAverage = {
//     math: 80,
//     phy: 85,
//     chem: 60,
//     getAvg() {
//         let avg = (this.math + this.phy + this.chem) / 3;
//         console.log(avg);
//     }
// }
// arrayAverage.getAvg();


// const arrayAverage = () => ({
//     arr: [80, 90, 60],
//     getSum() {
//         let sum = 0;
//         for(let i=0; i<this.arr.length; i++) {
//             sum += this.arr[i];
//         }
//         return sum;
//     },
//     getAvg(){
//         let avg = (this.getSum()/this.arr.length);
//         console.log(avg);
//     }
// });
// const obj = arrayAverage();
// console.log(obj.getAvg());



const isEven = (n) => n % 2 == 0;
console.log(isEven(8));