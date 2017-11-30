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


