//game.js script
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var score = document.getElementById("score");
var lives = document.getElementById("lives");

var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");

var loseScreen = document.getElementById("loseScreen");
//var livesVar = false;
var ballRand = rand(-20,20);
console.log(ballRand);

var bounceCount = document.getElementById("bounceCount");

//var liveNum = 3;
var p1Wins = 0;
var p2Wins = 0;

var p1WinsBool = false;
var p2WinsBool = false;

var p1Won = false;
var p2Won = false;

var p1WinsCount = document.getElementById("p1WinsCount");
var p2WinsCount = document.getElementById("p2WinsCount");

var num = 0;
//score.innerHTML = 0;
//lives.innerHTML = 3;

var currentState = "off";

var interval = 1000/60;

var timer = setInterval(animate,interval);

var player1 = new GameObject(50,300,25,100,"black");

var player2 = new GameObject(950,300,25,100,"black");
	
var ball = new GameObject(canvas.width/2,canvas.height/2,50,50,"red");

var player1top = (player1.y - (player1.h * .17))

stopButton.disabled = true;

if(ballRand <= 0)
{
	ball.vx = -5;
	ball.vy = 0;
}

else
{
	ball.vx = 5;
	ball.vy = 0;
}

console.log(ball);

statesArray = [];

statesArray["off"] = function() {
	context.clearRect(0,0,canvas.width,canvas.height);
}

statesArray["on"] = function() {
	context.clearRect(0,0,canvas.width,canvas.height);
	
	
	
	if(w)
	{
		player1.y -= 16;
	}
	
	if(s)
	{
		player1.y += 16;
	}
	
	if(up)
	{
		player2.y -= 16;
	}
	
	if(down)
	{
		player2.y += 16;
	}

	//player1 bottom collision
	if(player1.bottom() > canvas.height)
	{
		player1.y = canvas.height - player1.height/2;
		console.log("colliding");
	}
	
	//player2 bottom collision
	if(player2.bottom() > canvas.height)
	{
		player2.y = canvas.height - player2.height/2;
		console.log("colliding p2");
	}
	
	//player1 top collision
	if(player1.top() < 0)
	{
		player1.y = 0 + player1.height/2;
		console.log("colliding");
	}
	
	//player2 top collision
	if(player2.top() < 0)
	{
		player2.y = 0 + player2.height/2;
		console.log("colliding p2");
	}
	
	
	
	//paddle 1 hit
	if(hitTestObject(player1,ball))
	{
		//num++;
		//score.innerHTML = num;
	
		if (ball.y <= player1.y - (player1.height * .17))
		{
			console.log("top");
			ball.vx = rand(5,18);
			ball.vy = rand(-18,-5);
		}
		
		if((ball.y >= player1.y - (player1.height * .17)) && (ball.y <= player1.y + (player1.height * .17)))
		{
			console.log("middle");
			ball.vx = -ball.vx;
		}
		
		if(ball.y >= player1.y + (player1.height * .17))
		{
			console.log("bottom");
			ball.vx = rand(5,18);
			ball.vy = rand(5,18);
		}
	}
	
	//paddle 2 hit
	if(hitTestObject(player2,ball))
	{
		if(ball.y <= player2.y -(player2.height * .17))
		{
			console.log("top p2");
			ball.vx = rand(-18,-5);
			ball.vy = rand(-5,-18);
		}
		
		if((ball.y >= player2.y - (player2.height * .17)) && (ball.y <= player2.y + (player2.height * .17)))
		{
			ball.vx = -ball.vx;
		}
		
		if(ball.y >= player2.y + (player2.height * .17))
		{
			ball.vx = rand(-18,-5);
			ball.vy = rand(5,18);
		}
	}
	
	if (ball.x < 0 + ball.width/2)
	{
		p2WinsBool = true;
	}
	
	if(ball.x > canvas.width + ball.width/2)
	{
		p1WinsBool = true;
	}
	
	
	ball.move();
	
	ball.drawCircle();
	player1.drawRect();	
	player2.drawRect();
	
	/*if(liveNum < 0)
	{
		livesVar = true;
		stopGame();
	}*/
	
	if(p1Wins > 3)
	{
		p1Won = true;
		stopGame();
	}
	
	if(p2Wins > 3)
	{
		p2Won = true;
		stopGame();
	}
	
	//color changer coding
	if(ballColor.value === "red")
	{
		ball.color = "red";
	}
	
	else if (ballColor.value === "orange")
	{
		ball.color = "orange";
	}
	
	else if (ballColor.value === "blue")
	{
		ball.color = "blue";
	}
	
	else if (ballColor.value === "green")
	{
		ball.color = "green";
	}
	
	else
	{
		ball.color = "#840AFF";
	}
}


function animate()
{
	statesArray[currentState]();
}

//detects if the ball hits the paddle
function hitTestObject(player1,ball)
{
	if(player1.left() < ball.right() &&
		player1.right() > ball.left() &&
		player1.top() < ball.bottom() &&
		player1.bottom() > ball.top())
		{
			return true;
		}
		return false;
}

function startGame()
{
	startButton.disabled = true;
	stopButton.disabled = false;
	ballColor.disabled = true;
	
	var startTimer = setTimeout(startTimeFunction,3000);
	
	loseScreen.style.fontSize = "0px";
	loseScreen.style.color = "white";
	loseScreen.style.marginTop = "0px";
	loseScreen.style.marginLeft = "400px";
	
	bounceCount.style.color = "white";
}

function stopGame()
{	
	console.log(wallBounceCount);
	
	currentState = "off";
	startButton.disabled = false;
	stopButton.disabled = true;
	ballColor.disabled = false;
	
	p1Wins = 0;
	p2Wins = 0;
	
	p1WinsCount.innerHTML = p1Wins;
	p2WinsCount.innerHTML = p2Wins;
	
	//liveNum = 3;
	//lives.innerHTML = liveNum;
	//score.innerHTML = 0;
	
	canvas.style.border = "0 solid black";
	
	p1WinsCount.style.color = "white";
	p1WinsCount.style.border = "0";
	
	//score.style.color = "white";
	//score.style.border = "0";
	
	p2WinsCount.style.color = "white";
	p2WinsCount.style.border = "0";
	
	//lives.style.color = "white";
	//lives.style.border = "0";
	
	bounceCount.style.color = "black";
	
	ball.x = canvas.width/2;
	ball.y = canvas.height/2;
	
	ballRand = rand(-20,20);
	
	if(ballRand <= 0)
	{
		ball.vx = -5;
		ball.vy = 0;
	}

	else
	{
		ball.vx = 5;
		ball.vy = 0;
	}
	
	wallBounceCount = 0;
	
	/*if(livesVar)
	{
		youLose();
	}*/
	
	if(p1Won)
	{
		playerWins();
	}
	
	if(p2Won)
	{
		playerWins();
	}
}

function reset()
{	
	console.log("RESET!");
	context.clearRect(0,0,canvas.width,canvas.height);
	
	ball.x = canvas.width/2;
	ball.y = canvas.height/2;
	
	ballRand = rand(-20,20);
				
	if(ballRand > 0)
	{
		ball.vx = 5;
	}
	
	else
	{
		ball.vx = -5;
	}
	
	if(p1WinsBool === true)
	{
		p1Wins++;
		
		p1WinsCount.innerHTML = p1Wins;
				
		console.log("winner: player1 - " + p1Wins);
		
		p1WinsBool = false;
	}
	
	if(p2WinsBool === true)
	{
		p2Wins++;
		
		p2WinsCount.innerHTML = p2Wins;
				
		console.log("winner: player2 - " + p2Wins);
		
		p2WinsBool = false;
	}
	
	
	
	//liveNum--;
	//lives.innerHTML = liveNum;
	
	ballOffScrn = true;
}

function startTimeFunction()
{
	currentState = "on";
	canvas.style.border = "1px solid black";
	
	//P1Wins CSS STYLING
	p1WinsCount.style.color = "red";
	p1WinsCount.style.border = "1px solid black";
	p1WinsCount.style.position = "absolute";
	p1WinsCount.style.backgroundColor = "white";
	
	//P2Wins CSS STYLING
	p2WinsCount.style.color = "red";
	p2WinsCount.style.border = "1px solid black";
	p2WinsCount.style.position = "absolute";
	p2WinsCount.style.backgroundColor = "white";
	
	
	
	/*//SCORE CSS STYLING
	score.style.color = "red";
	score.style.border = "1px solid black";
	score.style.position = "absolute";
	score.style.backgroundColor = "white";*/

	/*LIVES CSS STYLING
	lives.style.color = "blue";
	lives.style.border = "1px solid black";
	lives.style.position = "absolute";
	lives.style.backgroundColor = "white";	*/
	
	var player1 = new GameObject(50,300,25,100,"black");
	
	var player2 = new GameObject(950,300,25,100,"black");
	
	var ball = new GameObject(canvas.width/2,canvas.height/2,50,50,"red");
	
	ballRand = rand(-20,20);
	
	if(ballRand <= 0)
	{
		ball.vx = -5;
		ball.vy = 0;
	}

	else
	{
		ball.vx = 5;
		ball.vy = 0;
	}
	
	p1WinsCount.innerHTML = 0;
	p2WinsCount.innerHTML = 0;
}

function youLose()
{
	console.log("you lose");
	
	loseScreen.style.fontSize = "100px";
	loseScreen.style.marginTop = "300px";
	loseScreen.style.marginLeft = "100px";
	loseScreen.style.color = "red";
	
	loseScreen.innerHTML = "<b>You lose! :(</b>";
}

function playerWins()
{
	if(p1Won)
	{
		console.log("Player 1 Wins");
		
		context.fillText("blue",100,200);
		
		context.font = "20px Arial";
		/*loseScreen.style.fontSize = "100px";
		loseScreen.style.marginTop = "300px";
		loseScreen.style.marginLeft = "100px";
		loseScreen.style.color = "blue"; 
		
		loseScreen.innerHTML = "<b>Player 1 Wins!</b>";*/
	}
	
	if(p2Won)
	{
		console.log("Player 2 Wins");
		
		loseScreen.style.fontSize = "100px";
		loseScreen.style.marginTop = "300px";
		loseScreen.style.marginLeft = "100px";
		loseScreen.style.color = "blue";
		
		loseScreen.innerHTML = "<b>Player 2 Wins!</b>";
	}
	
	p1Won = false;
	p2Won = false;
}






























