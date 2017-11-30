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
// function testHappy(number){
// 	var 

// }

alert(numberToArray(userInput("Enter number:")));