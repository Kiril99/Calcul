var firstNumber;
var secondNumber;

firstNumber = Number(prompt("input first number"));
secondNumber = Number(prompt("input first number"));

sign= Number (prompt("/ input1, * input2, + input3, - input4"));

	if (sign===1) {
		var a = firstNumber / secondNumber;
		document.write(a);

	}
	if (sign===2) {
		var b = firstNumber * secondNumber;
		document.write(b);
		
	}
	if (sign===3) {
		var c = firstNumber + secondNumber;
		document.write(c);
		
	}
	if (sign===4) {
		var d = firstNumber - secondNumber;
		document.write(d);
		
	}