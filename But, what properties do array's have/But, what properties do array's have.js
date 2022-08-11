var colors = ["yellow", "blue", "red"];
console.log(colors.length); //the length of colors is 3

colors.sort(); //the new array will be ["blue", "red", "yellow"]
console.log(colors);

//The .push() method will add a new value to the array. See below:
colors.push("purple");
console.log(colors);

colors.pop(); //The .pop() method does the opposite of .push()
console.log(colors);


var numbers = ["7", "2", "9", "5"];
numbers.length;  //the length of numbers is 4
console.log(numbers);

var numbers = ["7", "2", "9"];
numbers.sort();  //the new array will be ["2", "7", "9"]

var numbers = ["7", "2", "9"];
numbers.push("5");  //the new array will be ["7", "2", "9", "5"]

var numbers = ["7", "2", "9"];
numbers.pop();  //the new array will be ["7", "2"]
