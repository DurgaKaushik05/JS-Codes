// function one() {
//     return 1;
// }
// function two() {
//     return one() + one();
// }
// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }
// three();


// Callback hell code
// let h1 = document.querySelector("h1");

// setTimeout(() => {
//     h1.style.color = "red";
// }, 1000);

// setTimeout(() => {
//     h1.style.color = "orange";
// }, 2000);

//or
// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000);
//     });
// });



//  set for Promises code
// // function savetoDb(data, success, failure) {
// //     let internetSpeed = Math.floor(Math.random() * 10) + 1;
// //     if(internetSpeed > 4) {
// //         success();
// //     } else {
// //         failure();
// //     }
// // }
// savetoDb("durga kaushik", () => {
//     console.log("success : your data was saved");
//     savetoDb("hello world", () => {
//         console.log("success2 : data2 saved");
//     }, () => {
//         console.log("failure2 : week connection");
//     });
// }, () => {
//     console.log("failure : week connection. data not saved");
// });



// // Promises code
// function savetoDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve("success : data was saved");
//         } else {
//             reject("failure : week connection");
//         }
//     });
// }


// // let request = savetoDb("durga kaushik");
// // request.then(() => {
// //     console.log("promise was resolved");
// //     console.log(request);
// // })
// // .catch(() => {
// //     console.log("promise was rejected");
// //     console.log(request);
// // });


// //or

// savetoDb("durga kaushik")
//     .then(() => {
//         console.log("promise was resolved");
//     })
//     .catch(() => {
//         console.log("promise was rejected");
//     });


// // promise chaining
// function savetoDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve("success : data was saved");
//         } else {
//             reject("failure : week connection");
//         }
//     });
// }

// savetoDb("durga kaushik")
//     .then((result) => {
//         console.log("data1 saved");
//         console.log("result of prpmise : ",result);
//         return savetoDb("helloworld");
//     })
//     .then((result) => {
//         console.log("data2 saved");
//         console.log("result of prpmise : ",result);
//         return savetoDb("durga");
//     })
//     .then((result) => {
//         console.log("data3 saved");
//         console.log("result of prpmise : ",result);
//     })
//     .catch((error) => {
//         console.log("promise was rejected");
//         console.log("error of prpmise : ",error);
//     });



let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed!");
        }, delay);
    });
}

changeColor("red", 1000)
.then(() => {
    console.log("red color was completed");
    return changeColor("orange", 1000);
})
.then(() => {
    console.log("orange color was completed");
    return changeColor("green", 1000);
})
.then(() => {
    console.log("green color was completed");
    return changeColor("blue", 1000);
})
.then(() => {
    console.log("blue color was completed");
})

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000);
//     });
// });
