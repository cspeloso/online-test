var canvas = document.querySelector("#canvas");
var startButton = document.getElementById("start");
var quitButton = document.getElementById("quit");
var random = document.getElementById("random");
var bounceColorChange = document.getElementById("colorBounce");
var bounceColorChange2 = document.getElementById("colorBounce2");
var bounceCount = 0;
var lasagnaBtn = document.getElementById("lasagnaBtn");
var lasagnaBtn2 = document.getElementById("lasagnaBtn2");

var countInput = document.getElementById("count");

var currentState = "off";

var context = canvas.getContext("2d");

//frames per second. 1000 / 60 = 60 FPS
//May be referred to as "interval" in the future.
var fps = 1000/60;

var timer = setInterval(animate, fps);
	
squaresArray = [];

for (var i = 0;i <= parseInt(countInput.value);i++)
{
	squaresArray[i] = new Square();
	squaresArray[i].color = randColor();	
	squaresArray[i].x = rand(2,canvas.width);
	squaresArray[i].y = rand(1,canvas.height);
	squaresArray[i].vx = rand(0,10);
	squaresArray[i].vy = rand(0,10);
}


var statesArray = [];

statesArray["off"] = function(){
	context.clearRect(0,0,canvas.width,canvas.height);
}

statesArray["on"] = function(){
	context.clearRect(0,0,canvas.width,canvas.height);

	for (i = 0;i < parseInt(countInput.value); i++)
	{
		squaresArray[i].move();
		squaresArray[i].draw();
	}
}

function animate()
{
	statesArray[currentState]();
}



function startGame(){
	if(lasagnaBtn.checked)
	{
		document.getElementById("canvas").style.backgroundImage = "url('images/lasagna.jpg')";
	}
	currentState = "on";
	startButton.disabled = true;
	quitButton.disabled = false;
	countInput.disabled = true;
	squaresArray = [];
	random.disabled = true;
	bounceColorChange.disabled = true;
	bounceColorChange2.disabled = true;
	speedBounce.disabled = true;
	speedBounce2.disabled = true;
	backgroundBtn.disabled = true;
	backgroundBtn2.disabled = true;
	lasagnaBtn.disabled = true;
	lasagnaBtn2.disabled = true;
	
	
	for (var i = 0;i <= parseInt(countInput.value);i++)
	{
		squaresArray[i] = new Square();
		//squaresArray[i].color = randColor();
		if(random.value === "random")
		{
			squaresArray[i].color = randColor();
		}
		else if (random.value === "red")
		{
			squaresArray[i].color = "red";
		}
		else if (random.value === "green"){
			squaresArray[i].color = "green";
		}
		else{
			squaresArray[i].color = "blue";
		}
		squaresArray[i].x = rand(2,canvas.width);
		squaresArray[i].y = rand(1,canvas.height);
		squaresArray[i].vx = rand(0,10);
		squaresArray[i].vy = rand(0,10);
	}
}

function quitGame(){
	currentState = "off";
	startButton.disabled = false;
	quitButton.disabled = true;
	countInput.disabled = false;
	squaresArray = [];
	random.disabled = false;
	bounceColorChange.disabled = false;
	bounceColorChange2.disabled = false;
	speedBounce.disabled = false;
	speedBounce2.disabled = false;
	backgroundBtn.disabled = false;
	backgroundBtn2.disabled = false;
	bounceCount = 0;
	lasagnaBtn.disabled = false;
	lasagnaBtn2.disabled = false;
	canvas.style.backgroundImage = "";
	
	document.querySelector("#epilepsy").style.color = "white";
}