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
var x = [1,2,1];
console.log(squareArrayElements(x));
// alert(numberToArray(userInput("Enter number:")));
// function testHappy(number){
// 	var 

// }

