// const student = {
//     name : "Durga",
//     age : 22,
//     marks : 80.5,
//     city : "Bilaspur"
// };
// console.log(student);

// const post = {
//     username : "@durgaKaushik",
//     content : "This is my first post",
//     likes : 150,
//     repost : 4
// };

// console.log(student["age"]);
// console.log(post.content);
// console.log(post.repost = 5);
// console.log(post);
// console.log(delete post.repost);
// console.log(post);

// nested objects
// const classInfo = {
//     Durga : {
//         grade : "A+",
//         city : "Bilaspur"
//     },
//     KK : {
//         grade : "A++",
//         city : "Varanasi"
//     },
//     DK : {
//         grade : "A",
//         city : "Raipur"
//     }
// };
// console.log(classInfo);
// console.log(classInfo.Durga);
// console.log(classInfo.DK.city = "Banaras");
// console.log(classInfo.DK);

// array of objects
// const classInfo = [
//     {
//         name : "Durga",
//         grade : "A+",
//         city : "Bilaspur"
//     },
//     {
//         name : "KK",
//         grade : "A++",
//         city : "Varanasi"
//     },
//     {
//         name : "DK",
//         grade : "A",
//         city : "Raipur"
//     }
// ];
// console.log(classInfo[0]);
// console.log(classInfo[1]);
// console.log(classInfo[2].name);
// console.log(classInfo[0].gender = "Female");
// console.log(classInfo[0]);


// random func
// let step1 = Math.random();
// console.log(step1);
// let step2 = step1 * 10;
// console.log(step2);
// let step3 = Math.floor(step2);
// console.log(step3);

// Prac Qs
// console.log(Math.floor(Math.random() * 100) + 1);
// console.log(Math.floor(Math.random() * 5) + 1);

// guessing game
// const max = (prompt("Enter the max number"));
// const random = Math.floor(Math.random() * max) + 1;
// let guess = prompt("guess the number");

// while(true) {
//     if(guess == "quit") {
//         console.log("user quit");
//         break;
//     }
//     if(guess == random) {
//         console.log("your are right! congrats!! random number was", random);
//         break;
//     } else if(guess < random) {
//         guess = prompt("hint: your guess was too small. please try again");
//     } else {
//         guess = prompt("hint: your guess was too large. please try again");
//     }
// }

// const max = Number(prompt("Enter the max number"));
// const random = Math.floor(Math.random() * max) + 1;

// let guess = prompt("Guess the number");

// while (true) {

//     if (guess === "quit") {
//         console.log("User quit");
//         break;
//     }

//     guess = Number(guess);

//     if (guess === random) {
//         console.log("You are right! Random number was", random);
//         break;
//     } else if (guess < random) {
//         guess = prompt("Hint: your guess was too small. Please try again");
//     } else {
//         guess = prompt("Hint: your guess was too large. Please try again");
//     }
// }

// Assignment Qs
// console.log(Math.floor(Math.random() * 6) + 1);

// const Car = {
//     name: "Jaguar",
//     model: "VS Beast",
//     color: "Black"
// };
// console.log(Car.name);

const Person = {
    name: "Durga Kaushik",
    age: 22,
    city: "Bilaspur"
};
console.log(Person);
Person.city = "New York";
Person.country = "United States";
console.log(Person);