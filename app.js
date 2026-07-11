// let a = 5;
// let b = 8;
// console.log("sum is : ", a + b);

// let pencilPrice = 10;
// let erasorPrice = 5;
// console.log("The total price is : ", pencilPrice + erasorPrice, "Rupees");
// or
// let output = `The total price is : ${pencilPrice + erasorPrice}`;
// console.log(output);

// Arithmetic operator
// let c = 15;
// let d = 2;
// console.log(c + d);
// console.log(c - d);
// console.log(c / d);
// console.log(c % d);
// console.log(c ** d);

// Unary operator
// console.log(c++);
// console.log(++d);

// practice qus.
let color = "red";
if (color === "red") {
    console.log("Stop! light color is red");
}
else if (color === "yellow") {
    console.log("Slow down! light color is yellow");
}
else if (color === "green") {
    console.log("Go! light color is green");
}

let age = 18;
if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("You can'nt vote");
}

// practice Qs
let size = `M`;
if (size === `XL`) {
    console.log("price is Rs. 250")
} else if (size === `L`) {
    console.log("price is Rs. 200")
} else if (size === `M`) {
    console.log("price is Rs. 100")
} else if (size === `S`) {
    console.log("price is Rs. 50")
}

let Marks = 45;
if (Marks >= 33) {
    console.log("Pass");
    if (Marks >= 80) {
        console.log("Grade : O")
    } else {
        console.log("Grade : A")
    }
}  else {
    console.log("Better luck next time");
}

// Practice Qs
let str =`apple`;
if((str[0] == `a`) && (str.length > 3)) {
    console.log(`Good String`)
} else {
    console.log(`not a good string`)
}

let num = 12;
if((num%3 === 0) && ((num+1 === 15) || (num-1 === 11))) {
    console.log("safe");
} else {
    console.log("unsafe");
}

// Practice Qs Switch statement
let day = 4;
switch(day) {
    case 1:
        console.log("Monday");
        break
    case 2:
        console.log("Tuesday");
        break
    case 3:
        console.log("Wednesday");
        break
    case 4:
        console.log("Thursday");
        break
    case 5:
        console.log("Friday");
        break
    case 6:
        console.log("Saturday");
        break
    case 7:
        console.log("Sunday");
        break
    default:
        console.log("No Match");
}

// alert & Prompts

// alert("Something is wrong!");
// prompt("Please enter your roll no.");
// console.error("this is an error");

// let firstName = prompt("enter your firstName");
// let lasttName = prompt("enter your lastName");
// console.log("Welcome", firstName, lasttName, "!");

// Assingment Qs
let num1 = 50;
if(num1 % 10 == 0) {
    console.log("good")
} else {
    console.log("bad")
}

// let name = prompt("enter your name");
// let age1 = prompt("enter your age");
// alert(`${name} is ${age1} years old.`);

let month = 3;
switch(month) {
    case 1:
        console.log("January, Fabruary, March");
        break
    case 2:
        console.log("April, May, June");
        break
    case 3:
        console.log("July, August, September");
        break
    case 4:
        console.log("October, November, December");
        break
    default: 
        console.log("wrong months");
}

let str1 = "Amples";
if((str1[0] === `a` || str1[0] === `A`) && (str1.length > 5)) {
    console.log("golden string");
} else {
    console.log("not a golden string");
}

let a = 5;
let b = 18;
let c = 13;
if(a > b) {
    if(a > c) {
        console.log(a, "is largest");
    } else {
        console.log(c, "is largest");
    }
} else {
    if(b > c) {
        console.log(b, "is largest");
    } else {
        console.log(c, "is largest");
    }
}

let num2 = 32;
let num3 = 47852;
if((num2 % 10) == (num3 % 10)) {
    console.log("numbers have the same last digit witch is", num2 % 10);
} else {
    console.log("numbers does't have the same last digit");
}
