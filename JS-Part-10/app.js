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


// let p = document.querySelector("p");
// p.addEventListener("click", function() {
//     console.log("parah was clicked");
// })

// let div = document.querySelector(".box");
// div.addEventListener("mouseenter", function() {
//     console.log("cursor inside div");
// })



// let btn = document.querySelector("button");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// let p1 = document.querySelector("p1");

// function changeColor() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// }
// btn.addEventListener("click", changeColor);
// h1.addEventListener("click", changeColor);
// h3.addEventListener("click", changeColor);
// p1.addEventListener("click", changeColor);



// keyboard events
// let btn = document.querySelector("button");
// btn.addEventListener("click", function(event) {
//     console.log(event);
//     console.log("button clicked");
// });

// let inp = document.querySelector("input");
// inp.addEventListener("keydown", function(event) {
//     console.log("code = ", event.code);
//     if(event.code == "KeyU") {
//         console.log("character moves up");
//     } else if (event.code == "KeyD") {
//         console.log("character moves down");
//     } else if(event.code == "KeyL") {
//         console.log("character moves left");
//     } else if(event.code == "KeyR") {
//         console.log("character moves right");
//     }
// });


// form events
// let form = document.querySelector("form");
// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     alert("form submitted");
// });

// let form = document.querySelector("form");
// form.addEventListener("submit", function() {
//     event.preventDefault();

//     // let user = document.querySelector("#user");
//     // let pass = document.querySelector("#pass");
    
//     // console.log(user.value);
//     // console.log(pass.value);

//     // alert(`Hi ${user.value}, your password is set to ${pass.value}`);

//     // console.dir(form.elements);
//     // let user = this.elements[0];
//     // let pass = this.elements[1];

//     // console.log(user.value);
//     // console.log(pass.value);

//     // alert(`Hi ${user.value}, your password is set to ${pass.value}`);
// });


// let form = document.querySelector("form");
// form.addEventListener("submit", function() {
//     event.preventDefault();
// });    
// let user = document.querySelector("#user");
// user.addEventListener("change", function() {
//     console.log("changed event");
//     console.log("final value = ", this.value);
// });

// user.addEventListener("input", function() {
//     console.log("input event");
//     console.log("final value = ", this.value);
// })



let inp = document.querySelector("#text");
let p = document.querySelector("p");

inp.addEventListener("input", function() {
    console.log(this.value);
    p.innerText = inp.value;
});