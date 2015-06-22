
// exercise 1: prompt
// var name = prompt("What is your name?");
// alert("Hello " + name + "!");

//exercise 2: loops
// for (var i = 0; i < 600; i +=100) {
// 	console.log(i);
// }

// for (var i = 1; i <= 64; i += i) {
// 	console.log(i);
// }

// for (var i = 1; i < 4; i +=1) {
// 	console.log(i, i, i);
// }

// for (var i = 0; i <=10; i +=2) {
// 	console.log(i);
// }

// for (var i = 9; i >= 0; i -=1) {
// 	console.log(i);
// }

// var count = 0;
// while (count < 3) {

// 	for (var i = 0; i <=3; i++) {
// 	console.log(i);
// 	}
//  	count++;
//  }

//exercise 3: string reporter

var Word = prompt("enter any word: ");
var length = Word.length;
var char3 = Word[3];
var inUpper = Word.toUpperCase();
var inLower = Word.toLowerCase();
var subWord = Word.substring(1,4);

alert("the word you entered is " + Word + ". \nIt has " + length + " characters. \nThe third character is: " + char3 + ". \nIt is " + inUpper + " in upper case and " + inLower + " in lower case. \nSentence example: '" + Word + " is very nice.' \nA substring is " + subWord + ".");
