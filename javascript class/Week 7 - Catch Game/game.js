//game script file
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var player = new GameObject(canvas.width/2,(canvas.height - 75),50,50,"ffff00");

var interval = 1000/60;

var timer = setInterval(animate,interval);

function animate()
{
	context.clearRect(0,0,canvas.width,canvas.height);
	
	if(a)
	{
		player.x -= 5;
	}
	
	if(d)
	{
		player.x += 5;
	}
	
	
	
	
	player.move();
	
	player.drawRect();
}



































