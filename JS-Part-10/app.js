// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function() {
//     console.log("button was clicked");
// };

// let btns = document.querySelectorAll("button");
// for(btn of btns) {
//     btn.onclick = sayHello;
//     btn.onmouseenter = function() {
//         console.log("you entered the button");
//     }
// };

// function sayHello() {
//     alert("Hello!");
// }


// let btns = document.querySelectorAll("button");
// for(btn of btns) {
//     btn.addEventListner("click", sayHello);
//     btn.addEventListner("click", sayName);
// }
// function sayHello() {
//     alert("Hello!");
// }
// function sayName() {
//     alert("Apna College");
// }


// let btn = document.querySelector("button");
// btn.addEventListener("click", function() {
//     // console.log("generate random color");
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;

//     console.log("color update");
// })

// function getRandomColor() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }


let p = document.querySelector("p");
p.addEventListener("click", function() {
    console.log("parah was clicked");
})

let div = document.querySelector(".box");
div.addEventListener("mouseenter", function() {
    console.log("cursor inside div");
})

let btn = document.querySelector("button");
btn.addEventListener("click", function() {
    console.dir(this);
})