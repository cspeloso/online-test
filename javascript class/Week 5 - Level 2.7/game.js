//game.js script
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var score = document.getElementById("score");
var lives = document.getElementById("lives");
var liveNum = 3;
var num = 0;
score.innerHTML = 0;
lives.innerHTML = 3;

var interval = 1000/60;

var timer = setInterval(animate,interval);

var player1 = new GameObject(50,400,25,100,"black");

var ball = new GameObject(900,300,50,50,"red");

var player1top = (player1.y - (player1.h * .17))

/*ball.vx = rand(-18,18);
ball.vy = rand(-18,18);*/
ball.vx = -5;
ball.vy = 0;

console.log(ball);



function animate()
{
	context.clearRect(0,0,canvas.width,canvas.height);
	
	if(w)
	{
		player1.y -= 8;
		console.log()
	}
	
	if(s)
	{
		player1.y += 8;
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
		console.log("ass");
		/*if((player1.right() >= ball.left()) && player1.top() <= ball.bottom())

		{
			ball.vx = 10;
			ball.vy = -10;
		}
		
		if ((player1.right() >= ball.left()) && (player1.bottom() <= ball.top()))
		{
		
			ball.vx = 10;
			ball.vy = 10;
		}	*/
		if(player1.right() > ball.left())
		{
			console.log("test two");
			
			
		}
	
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
			
	/*if(hitTestObject(player1,ball))
	{
		//ball hits top
		if(ball.y < player1.y - (player1.h * .16))
		{
			ball.vx = 5;
			ball.vy = 5;
		}
		
		if(ball.y > player1.y - (player1.h * .83))
		{
			ball.vx = 5;
			ball.vy = 5;
		}
	}*/
	
	
	
	ball.move();
	
	ball.drawCircle();
	player1.drawRect();
}

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

































