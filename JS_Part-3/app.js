// let msg = "    hello     ";

// let password = prompt("set your password");
// console.log(password.trim());

// let name = "Durga Kaushik";

// let char = "ILoveCoding";

// let msg = "    hello    ";
// console.log(msg);
// let newMsg = msg.trim();
// console.log("after trim : ", newMsg);
// newMsg = newMsg.toUpperCase();
// console.log("after uppercase : ", newMsg);
// let newMsg = msg.trim().toUpperCase();
// console.log(newMsg);

// let str = "durgakaushik";
// console.log(str.slice(0, 5));
// console.log(str.slice(0, str.length));
// console.log(str.slice(0));
// console.log(str.slice(-2));

// let str = "ILoveCoding";
// console.log(str);
// console.log(str.replace("Love", "do"));
// console.log(str.repeat(2));

// Peactice Qs
// let msg = "help!";
// console.log(msg.trim().toUpperCase());

// let name = "ApnaCollege";
// console.log(name.slice(4, 9));
// console.log(name.indexOf("na"));
// console.log(name.replace("Apna", "Our"));
// console.log(name.slice(4).replace("l", "t"));

// Arrays   it is mutable
// let marks = [99, 89, 67, 42, 100];
// console.log(marks);
// let students = ["Durga", "Chandra", "Atul"];
// console.log(students);
// console.log(students.length);
// console.log(students[0][0]);
// let fruits = ["apple", "mango", "orange"];
// console.log(fruits);
// fruits[0] = "banana";

// fruits.push("papaya");
// console.log(fruits);
// fruits.pop();
// console.log(fruits);

// fruits.unshift("litchi");
// console.log(fruits);
// fruits.shift();
// console.log(fruits);

// Practice Qs
// let months = ["january", "july", "march", "august"];
// console.log(months);
// months.shift()
// months.shift();
// console.log(months);
// months.unshift("june");
// months.unshift("july");
// console.log(months);

// indexOf
// let primary = ["red", "yellow", "blue"];
// console.log(primary);
// console.log(primary.indexOf("yellow"));

// console.log(primary.includes("blue"));
// console.log(primary.includes("pink"));

// let secondary = ["pink", "white", "black"];
// console.log(primary.concat(secondary));

// console.log(primary.reverse());

// slice   return copy of an array
// let colors = ["red", "yellow", "blue", "pink", "white", "black"];
// console.log(colors);
// console.log(colors.slice(2, 5));
// console.log(colors.slice(-2));

// splice  change in original array
// let colors = ["red", "yellow", "blue", "pink", "white", "black"];
// console.log(colors.splice(0, 1, "maroon", "violet"));
// console.log(colors);
// colors.splice(0,0);
// console.log(colors);
// colors.splice(0, 1, "grey");
// console.log(colors);

// sort mathod
// let colors = ["red", "yellow", "blue", "pink", "white", "black"];
// console.log(colors.sort());

// Practice Qs
// let months = ["january", "july", "march", "august"];
// months.splice(0, 2);
// console.log(months);
// months.splice(0, 0, "july", "june");
// console.log(months);

// let languages = ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];
// console.log(languages);
// languages.reverse();
// console.log(languages);
// console.log(languages.indexOf('javascript'));

// nested arrays
// let nums = [[1, 2], [3, 4], [5, 6]];
// console.log(nums.length);
// console.log(nums[0]);
// console.log(nums[1][0]);
// console.log(nums[1][1]);

// Practice Qs
// let arr = [['X', null, 'O'], [null, 'X', null], ['O', null, 'X']];
// console.log(arr);
// arr[0][1] = 'O';
// console.log(arr);

// Assignment Qs
// let arr = [7, 9, 0, -2];
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.push(-2);
// arr.shift();
// console.log(arr);

// let str = "";
// if(str.length == 0) {
//     console.log("blank");
// } else {
//     console.log("not blank");
// }

// let name = "Durga";
// console.log(name[1].toLowerCase() == name[1]);

// let name1 = "     Durga     ";
// console.log(name1.trim());

// let nums = [1, 2, 3, 4];
// console.log(nums.indexOf(3));