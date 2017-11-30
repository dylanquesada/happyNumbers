"use strict";

function userInput(message){
	if(message != null){
		return prompt(message);
	}
	else{
		return prompt("Enter user input:");
	}
}


function numberToArray(input){
	let numberArray = [];
	let number = input.toString();
	for (let i = 0; i < number.length; i++) {
		numberArray[i] = number.charAt(i);
	}
	return numberArray;
}

function squareArrayElements(array){
	let output = [];
	for (let i = 0; i < array.length; i++) {
		output[i] = array[i] * array[i];
	}
	return output;
}


function addArrayElements(array){
	let outputNumber = 0;
	for (var i = 0; i < array.length; i++) {
		outputNumber = outputNumber + parseInt(array[i]);
	}
	return parseInt(outputNumber);
}
function concatonateArrayToNumber(array){
	let outputString = "";
	for (let i = 0; i < array.length; i++) {
		outputString = outputString.concat(array[i]);
	}
	return parseInt(outputString);
}

// function runIsHappyNumber(){
// 	var end = userInput("Enter a positive integer:");
// 	var number = end;
// 	var value = 0;
// 	for (var i = 0; i < 10; i++) {
// 		if(value === end){
// 			console.log("The number is happy.");
// 			return true;
// 		}
// 		else{
// 			value = numberToArray()
// 		}
// 	}
// }

function numberToString(number){
	let output = "number";
}

function runIsHappy(){
	let value = userInput("Enter a positive integer:");
	var display = value;
	let testArray = [];
	for (let i = 0; i < 1000; i++) {
		value = numberToArray(value);
		value = squareArrayElements(value);
		value = addArrayElements(value);
		console.log(value);
		for (var j = 0; j < testArray.length; j++) {
			if(testArray[j] === value){
				alert(display + " is sad.");
				return false;
			}
		}
		testArray[i] = value;
		if(value === 1){
			alert(display + " is a happy number!");
			return true;
		}
	}
	alert(display + " is probably sad.");
	return false;
}

runIsHappy();

// var x = [1,2,1];
// console.log(squareArrayElements(x));
// console.log(concatonateArrayToNumber(x));
// console.log(concatonateArrayToNumber(squareArrayElements(x)));
// // alert(numberToArray(userInput("Enter number:")));
// // function testHappy(number){
// // 	var 

// }

