//random number function/program
function rand(low,high)
{
	var number;
	
	number = Math.round(Math.random() * (high - low) + low);
	
	while(number > -5 && number < 5)
	{
		number = Math.round(Math.random() * (high - low) + low);
	}
	
	return number;
}
