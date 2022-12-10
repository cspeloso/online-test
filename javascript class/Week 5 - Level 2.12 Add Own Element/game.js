//game.js script
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var score = document.getElementById("score");
var lives = document.getElementById("lives");

var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");

var loseScreen = document.getElementById("loseScreen");
var livesVar = false;

var bounceCount = document.getElementById("bounceCount");

var liveNum = 3;
var num = 0;
score.innerHTML = 0;
lives.innerHTML = 3;

var currentState = "off";

var interval = 1000/60;

var timer = setInterval(animate,interval);

var player1 = new GameObject(50,300,25,100,"black");
	
var ball = new GameObject(900,300,50,50,"red");

var player1top = (player1.y - (player1.h * .17))

stopButton.disabled = true;

/*ball.vx = rand(-18,18);
ball.vy = rand(-18,18);*/
ball.vx = -5;
ball.vy = 0;

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

	if(player1.bottom() > canvas.height)
	{
		player1.y = canvas.height - player1.height/2;
		console.log("colliding");
	}
	
	if(player1.top() < 0)
	{
		player1.y = 0 + player1.height/2;
		console.log("colliding");
	}
	
	
	
	
	if(hitTestObject(player1,ball))
	{
		num++;
		score.innerHTML = num;
	
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
	
	
	
	ball.move();
	
	ball.drawCircle();
	player1.drawRect();	
	
	if(liveNum < 1)
	{
		livesVar = true;
		stopGame();
	}
	
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
	
	liveNum = 3;
	lives.innerHTML = liveNum;
	
	score.innerHTML = 0;
	
	canvas.style.border = "0 solid black";
	
	score.style.color = "white";
	score.style.border = "0";
	
	lives.style.color = "white";
	lives.style.border = "0";
	
	bounceCount.style.color = "black";
	
	ball.x = 900;
	ball.y = 300;
	
	ball.vx = rand(5,18);
	ball.vy = rand(-18,18);
	
	wallBounceCount = 0;
	
	if(livesVar)
	{
		youLose();
	}
}

function reset()
{	
	console.log("RESET!");
	context.clearRect(0,0,canvas.width,canvas.height);
	
	ball.x = 900;
	ball.y = 300;
	
	ball.vy = rand(-18,18);
	ball.vx = rand(5,18);
	
	liveNum--;
	lives.innerHTML = liveNum;
	
	ballOffScrn = true;
}

function startTimeFunction()
{
	currentState = "on";
	canvas.style.border = "1px solid black";
	
	//SCORE CSS STYLING
	score.style.color = "red";
	score.style.border = "1px solid black";
	score.style.position = "absolute";
	score.style.backgroundColor = "white";

	//LIVES CSS STYLING
	lives.style.color = "blue";
	lives.style.border = "1px solid black";
	lives.style.position = "absolute";
	lives.style.backgroundColor = "white";
	
	
	
	
	var player1 = new GameObject(50,300,25,100,"black");
	
	var ball = new GameObject(900,300,50,50,"red");
}

function youLose()
{
	console.log("you lose");
	
	loseScreen.style.fontSize = "100px";
	loseScreen.style.marginTop = "300px";
	loseScreen.style.marginLeft = "100px";
	loseScreen.style.color = "red";
	
	loseScreen.innerHTML = "<b>You lose! :(</b>"
}






























