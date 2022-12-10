//game.js script
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var interval = 1000/60;

var timer = setInterval(animate,interval);

var player1 = new GameObject(50,400,25,100,"black");

var ball = new GameObject(900,canvas.height/2,50,50,"red");

ball.vx = rand(-18,18);
ball.vy = rand(-18,18);

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
	
	if((player1.right() >= ball.left()) && player1.top() <= ball.bottom())
	{
		ball.vx = -ball.vx;
		ball.vy = -ball.vy;
	}
	
	if ((player1.right() >= ball.left()) && (player1.bottom() <= ball.top()))
	{
		ball.vx = -ball.vx;
		ball.vy = -ball.vy;
	}
	
	
	
	ball.move();
	
	ball.drawCircle();
	player1.drawRect();
}
































