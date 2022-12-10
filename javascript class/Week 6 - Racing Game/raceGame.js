//race game
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var replayButton = document.getElementById("replay");

var redRaceCar = new GameObject(100,200,90,45,"red",rand(3,6));

var blueRaceCar = new GameObject(100,400,90,45,"blue",rand(3,6));

var finishLine = new GameObject(800,canvas.height/2,30,canvas.height,"pink");

var yellowLine0 = new GameObject(0,canvas.height/2,30,10,"yellow");
var yellowLine1 = new GameObject(100,canvas.height/2,30,10,"yellow");
var yellowLine2 = new GameObject(200,canvas.height/2,30,10,"yellow");
var yellowLine3 = new GameObject(300,canvas.height/2,30,10,"yellow");
var yellowLine4 = new GameObject(400,canvas.height/2,30,10,"yellow");
var yellowLine5 = new GameObject(500,canvas.height/2,30,10,"yellow");
var yellowLine6 = new GameObject(600,canvas.height/2,30,10,"yellow");
var yellowLine7 = new GameObject(700,canvas.height/2,30,10,"yellow");

var winnerTag = document.getElementById("winner");

var winnerColorTag = document.getElementById("carWinnerTag");

var redWinNumber = document.getElementById("redWinNumber");

var blueWinNumber = document.getElementById("blueWinNumber");

var interval = 1000/60;

var timer = setInterval(animate,interval);

var redRaceCarWins = 0;

var blueRaceCarWins = 0;

function animate()
{
	context.clearRect(0,0,canvas.width,canvas.height);	
	
	redRaceCar.move();
	blueRaceCar.move();
	
	if((redRaceCar.x >= finishLine.x - redRaceCar.width/2) && (blueRaceCar.x >= finishLine.x - blueRaceCar.width/2))
	{
		redRaceCar.x -= 1;
		blueRaceCar.x -= 1;
		redRaceCar.vx = 0;
		blueRaceCar.vx = 0;
		
		winnerTag.innerHTML = "<b>TIE!</b>";
		
		//console.log("TIE");
	}
	
	else if(redRaceCar.x >= finishLine.x - redRaceCar.width/2)
	{
		redRaceCar.x -= 10;
		redRaceCar.vx = 0;
		blueRaceCar.vx = 0;
		
		winnerTag.innerHTML = "Winner";
		
		winnerColorTag.innerHTML = "Red!";
		
		winnerColorTag.style.color = "red";
		
		redRaceCarWins++;
		
		redWinNumber.innerHTML = redRaceCarWins;		
		
		console.log("red race car win count: " + redRaceCarWins);
	}
	
	else if(blueRaceCar.x >= finishLine.x - blueRaceCar.width/2)
	{
		blueRaceCar.x -= 10;
		redRaceCar.vx = 0;
		blueRaceCar.vx = 0;
		
		winnerTag.innerHTML = "Winner";
		
		winnerColorTag.innerHTML = "Blue!";
		
		winnerColorTag.style.color = "blue";
		
		blueRaceCarWins++;
		
		blueWinNumber.innerHTML = blueRaceCarWins;
		
		console.log("blue race car win count: " + blueRaceCarWins);
	}	
	
	//draws stuff to screen
	yellowLine0.drawRect();
	yellowLine1.drawRect();
	yellowLine2.drawRect();
	yellowLine3.drawRect();
	yellowLine4.drawRect();
	yellowLine5.drawRect();
	yellowLine6.drawRect();
	yellowLine7.drawRect();
	
	redRaceCar.drawRect();
	blueRaceCar.drawRect();
	finishLine.drawRect();	
}

function replay()
{
	context.clearRect(0,0,canvas.width,canvas.height);
	
	redRaceCar.x = 100;
	blueRaceCar.x = 100;
	
	redRaceCar.vx = rand(3,6);
	blueRaceCar.vx = rand(3,6);
	
	winnerTag.innerHTML = "";
	winnerColorTag.innerHTML = "";
}



































