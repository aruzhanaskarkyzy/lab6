//Task 1
//Exercise 8

function dollarToTenge(dollar) {
	let tenge = 0;
	let rate = 449.95;
	if (dollar > 0) {
		tenge = dollar * rate;
	} else {
		return "Dollar is less than or equal 0";
	}
	return tenge;
}

let x = dollarToTenge(-10);
console.log(x);

//Task 2
//Exercise 14

function greatestNumber(num1, num2, num3) {
	if (num1 > num2) {
		if (num1 > num3) {
			return num1;
		} else {
			return num3;
		}
	} else {
		if (num2 > num3) {
			return num2;
		} else {
			return num3;
		}
	}
}

let y = greatestNumber(100, 200, 300);
console.log(y);

//Task 3
//Exercise 2

function perimeterOfRectangle(length, width) {
	if ((length > 0) && (width > 0)) {
		return 2*length + 2*width;
	}

	return "No rectangle provided";
}

let z = perimeterOfRectangle(100, 200);
console.log(z);





