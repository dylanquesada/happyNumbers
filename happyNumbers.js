"use strict";

function userInput(message){
	if(message != null){
		return prompt(message);
	}
	else{
		return prompt("Enter user input:");
	}
}


function numberToArray(number){
	var numberArray = [];
	for (var i = 0; i < number.length; i++) {
		numberArray[i] = number.charAt(i);
	}
	return numberArray;
}

function squareArrayElements(array){
	var output = [];
	for (var i = 0; i < array.length; i++) {
		output[i] = array[i] * array[i];
	}
	return output;
}

function concatonateArrayToNumber(array){
	var outputString = "";
	for (var i = 0; i < array.length; i++) {
		outputString = outputString.concat(array[i])
	}
	return parseInt(outputString);
}
var x = [1,2,1];
console.log(squareArrayElements(x));
console.log(concatonateArrayToNumber(x));
console.log(concatonateArrayToNumber(squareArrayElements(x)));
// alert(numberToArray(userInput("Enter number:")));
// function testHappy(number){
// 	var 

// }

