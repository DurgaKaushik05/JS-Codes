// Async function
// async function greet() {
//     return "hello!";
// }

// greet()
// .then((result) => {
//     console.log("promise was resolved");
//     console.log("result was : ", result);
// })
// .catch((err) => {
//     console.log("promise was rejected with err : ", err);
// })


// let demo = async () => {
//     return 5;
// }


// // await function
// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }
// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum();
// }


// color change code using await
// h1 = document.querySelector("h1");
// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             console.log(`color changed to ${color}!`);
//             resolve("color changed!");
//         }, delay);
//     });
// }
// async function demo() {
//     await changeColor("red", 1000);
//     await changeColor("orange", 1000);
//     await changeColor("green", 1000);
//     changeColor("blue", 1000);
// }
// demo();


// // handling rejection
// h1 = document.querySelector("h1");
// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 5) + 1;
//             if (num > 3) {
//                 reject("promise rejected");
//             }
//             h1.style.color = color;
//             console.log(`color changed to ${color}!`);
//             resolve("color changed!");
//         }, delay);
//     });
// }
// async function demo() {
//     try {
//         await changeColor("red", 1000);
//         await changeColor("orange", 1000);
//         await changeColor("green", 1000);
//         changeColor("blue", 1000);
//     } catch (err) {
//         console.log("error caugth");
//         console.log(err);
//     }
//     let a = 5;
//     console.log(a);
//     console.log("new number = ", a + 3);
// }
// demo();


// // JSON Code
// // JSON.parse
// let jsonRes = '{"fact":"Approximately 1/3 of cat owners think their pets are able to read their minds.","length":78}';

// let validRes = JSON.parse(jsonRes);
// console.log(validRes.fact);


// // JSON.stringify
// let student = {
//     name: "durga",
//     marks: 90,
// };
// console.log(JSON.stringify(student));


// // using  fetch api code
// let url = "https://catfact.ninja/fact";
// fetch(url)
// .then((response) => {
//     console.log(response);
//     return response.json();
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log("ERROR ...", err);
// })


// using fetch with async-await
let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(res);
    } catch (e) {
        console.log("error..", e);
    }
}

