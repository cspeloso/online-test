var canvas = document.querySelector("#canvas");
var context = canvas.getContext("2d");

//frames per second. 1000 / 60 = 60 FPS
//May be referred to as "interval" in the future.
var fps = 1000/60;

var timer = setInterval(animate, fps);

squaresArray = [];

colorsArray = [];
colorsArray[0] = "red";
colorsArray[1] = "blue";
colorsArray[2] = "green";
colorsArray[3] = "yellow";
colorsArray[4] = "pink";
colorsArray[5] = "black";
colorsArray[6] = "purple";
colorsArray[7] = "orange";
colorsArray[8] = "red";
colorsArray[9] = "blue";
colorsArray[10] = "green";

for (var i = 1;i < 10;i++)
{
	squaresArray[i] = new Square();
	squaresArray[i].color = colorsArray[i];
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