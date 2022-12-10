//js file
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var interval = 1000/60;

var timer = setInterval(animate,interval);

var player1 = new GameObject(50,400,25,100,"black");


function animate()
{
	context.clearRect(0,0,canvas.width,canvas.height);
	
	player1.drawRect();
}