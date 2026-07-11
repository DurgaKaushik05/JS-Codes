// console.dir(document.querySelector('h1'));
// console.dir(document.querySelector('#description'));

// console.dir(document.querySelector("div a"));

// // for all select
// console.dir(document.querySelectorAll("div a"));

// // stylling
// let links = document.querySelectorAll(".box a");
// // for(let i=0; i<links.length; i++) {
// //     links[i].style.color = "yellow";
// // }

// //or
// for(link of links) {
//     link.style.color = "green";
// }


// prac qs
// let para1 = document.createElement('p');
// para1.innerHTML = "Hey, I am red!";
// document.querySelector('body').append(para1);  
// para1.classList.add('red');

// let h3 = document.createElement('h3');
// h3.innerHTML = "I am a blue h3!";
// document.querySelector('body').append(h3);
// h3.classList.add('blue');

// let div = document.createElement('div');
// let h1 = document.createElement('h1');
// let para2 = document.createElement('p');

// h1.innerText = "I'm in a div";
// para2.innerText = "ME TOO!";

// div.append(h1);
// div.append(para2);
// div.classList.add("box");

// document.querySelector('body').append(div);


// Assignment Qs
let input = document.createElement("input");
input.placeholder = "usename";
let button = document.createElement("button");
button.innerHTML = "Click me";
document.querySelector("body").append(input);
document.querySelector("body").append(button);

button.id = "btn";
let btn = document.querySelector("#btn");
btn.style.backgroundColor = "blue";
btn.style.color = "white";


let h1 = document.createElement("h1");
h1.innerHTML = "<u>DOM Practice</u>";
h1.style.color = "purple";
document.querySelector("body").append(h1);


let p = document.createElement("p");
p.innerHTML = "Apna College <b>Sigma</b> Practice";
document.querySelector("body").append(p);
