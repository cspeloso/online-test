//script file
var number1 = randomNumber(1,100);
var number2 = randomNumber(1,100);
var genNumber = document.querySelector("#gridGenerate");

genNumber = parseInt(genNumber);

genNumber *= genNumber;

numberArray = [];

for (var i = 0;i < genNumber;i++)
{
	numberArray[i] = randomNumber(1,100)
}