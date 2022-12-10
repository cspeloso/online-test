var canvas = document.querySelector("#canvas");
var context = canvas.getContext("2d");

//frames per second. 1000 / 60 = 60 FPS
//May be referred to as "interval" in the future.
var fps = 1000/60;

var timer = setInterval(animate, fps);

squaresArray = [];

for (var i = 1;i < 10;i++)
{
	squaresArray[i] = new Square();
	squaresArray[i].color = randColor();
	squaresArray[i].x = rand(2,canvas.width);
	squaresArray[i].y = rand(1,canvas.height);
	squaresArray[i].vx = rand(0,10);
	squaresArray[i].vy = rand(0,10);
}

function animate()
		{	
			//erases old rectangle.
			context.clearRect(0,0,canvas.width,canvas.height);
	
			for (i = 1;i < 10; i++)
			{
				squaresArray[i].move();
				squaresArray[i].draw();
			}
		}