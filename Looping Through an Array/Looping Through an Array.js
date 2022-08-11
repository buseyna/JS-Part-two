var myArray = [3, 5, 9, 11, 18];
//myArray[0] // must start from zero and it should give 3 

console.log(myArray[2]);
// the way it works with looping
//The length tills you the number with items within the Array
for (var i = 0; i < myArray.length;i++){
    if (myArray[i] >= 10) {
        console.log("The value" + myArray[i] + "is double digits!");
    }
    else {
        console.log("The value" +myArray[i] + "is single digits")
    }
}
