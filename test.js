
// ................exercise 1-2: prompt...............
var name = prompt("What is your name?");
alert("Hello " + name + "!");

exercise 2: loops
for (var i = 0; i < 600; i +=100) {
	console.log(i);
}

for (var i = 1; i <= 64; i += i) {
	console.log(i);
}

for (var i = 1; i < 4; i +=1) {
	console.log(i, i, i);
}

for (var i = 0; i <=10; i +=2) {
	console.log(i);
}

for (var i = 9; i >= 0; i -=1) {
	console.log(i);
}

var count = 0;
while (count < 3) {

	for (var i = 0; i <=3; i++) {
	console.log(i);
	}
 	count++;
 }

// ..............exercise 3: string reporter.............

var Word = prompt("enter any word: ");
var length = Word.length;
var char3 = Word[3];
var inUpper = Word.toUpperCase();
var inLower = Word.toLowerCase();
var subWord = Word.substring(1,4);

alert("the word you entered is " + Word + ". \nIt has " + length + " characters. \nThe third character is: " + char3 + ". \nIt is " + inUpper + " in upper case and " + inLower + " in lower case. \nSentence example: '" + Word + " is very nice.' \nA substring is " + subWord + ".");

// .............exercise 4: Simple Validator..............

var phone = prompt("Please enter your phone number with dashes.");
alert(phone.charAt(3) === '-' && phone.charAt(7) === "-")

var birth = prompt('Please enter your birthdate in 2 digit format, seperated by forward slashes (xx/xx/xx).');
alert(birth.charAt(2) === '/' && birth.charAt(5) === "/");

var state = prompt("Please enter your state abbreviation with 2 uppercase characters.");
alert(state.length === 2 && state === state.toUpperCase());

var married = prompt("Are you married? (yes/no)");
alert(married === "Yes" || married === "YES" || married === "yes" || married === "No" || married === "NO" || married === "no");

// ................exercise 5: fundamentals................

var victimCount = prompt("how many victims are there?");
var victims = [];
var volunteers = [];
for ( var i=0; i < victimCount; i++) {

	var victimName = prompt("Victim's name?");
	var victimPhone = prompt("Victim's phone?");
	var victimStreet = prompt("Victim's street?");
	victims.push( {'name':victimName, 'phone':victimPhone, 'street':victimStreet} );
}

var volunteerCount = prompt("how many volunteers are there?");

for ( var i = 0; i < volunteerCount; i++) {

	var volunName = prompt("Volunteers's Name?");
	var volunPhone = prompt("Volnteers's phone?");
	var volunStreet = prompt("Volunteers's street?");
	volunteers.push( {'name':volunName, 'phone':volunPhone, 'street':volunStreet} );
}

for (i=0; i < victims.length; i++) {
	console.log("Victim: " + victims[i].name + " Phone: " + victims[i].phone + " Street: " + victims[i].street);
}

for (i=0; i < volunteers.length; i++) {
	console.log("Volunteer: " + volunteers[i].name + " Phone: " + volunteers[i].phone + " Street: " + volunteers[i].street);
}

// ..............exercise 6: fuctions..............

var tripleFive = function() {
	var output;
	for (i = 1; i <= 3; i++) {
		output = console.log("Five!");
	}
	return output;
}

tripleFive();

var lastLetter = function(word) {
	letter = word.charAt(word.length -1);
	return letter;
}

console.log(lastLetter('Anthrax'));

var square = function(number, number) {
	return number * number;
}

console.log(square(5, 5));

var negate = function(number) {
		return number * -1;
}

console.log(negate(5));

var numbers = [];

var toArray = function(number1, number2, number3) {
	numbers.push(number1, number2, number3);
	return numbers;
}

console.log(toArray(1, 2, 3));

var startsWithA = function(word) {
	if (word.charAt(0) === 'A' || word.charAt(0) === 'a') {
		return true;
	}
	else {
		return false;
	}
}

console.log(startsWithA("Aardvark"));

var excite = function(word) {
	return word + "!!!";
}

console.log(excite("Pizza"));

var Sun = function(word) {
	if (word.includes("sun")) {
		return true;
	}
	else if (word.includes("Sun")) {
		return true;
	}
	else {
		return false;
	}
}

console.log(Sun("Asunder"));

var tiny = function(number) {
	if (number > 0 && number <= 1) {
		return true;
	}
	else {
		return false;
	}
}

console.log(tiny(.5));

var getSeconds = function(string) {
	var minutes = parseInt(string.substring(0,2));
	var seconds = parseInt(string.substring(3,5));

	return (minutes * 60) + seconds;
}

console.log(getSeconds('10:25'));











