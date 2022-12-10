//script
var canvas = document.getElementById("canvas");

var context = canvas.getContext("2d");

var startBtn = document.getElementById("start");

var boolThing = false;

var currentState = "off";

startBtn.addEventListener("click",function(){
	console.log("test");
	
	if(boolThing)
	{
		boolThing = false;
		startBtn.value = "Start";
		currentState = "off";
	}
	
	else
	{
		boolThing = true;
		startBtn.value = "Stop";
		currentState = "on";
	}
	
});

var car = new CarObject(canvas.width/2,canvas.height/2,50,25,"red");

car.vx = 5;
car.vy = 0;

var interval = 1000/60;

var timer = setInterval(animate,interval);

statesArray = [];

statesArray["off"] = function() {
	context.clearRect(0,0,canvas.width,canvas.height);
	car.x = canvas.width/2;
	car.y = canvas.height/2;
}

statesArray["on"] = function() {
	context.clearRect(0,0,canvas.width,canvas.height);
	
	car.move();
	car.drawRect();
}

function animate()
{
	statesArray[currentState]();
	console.log(currentState);
}

function btnClickFunc()
{
	if(startBtn.value == "on")
	{
		startBtn.value === "off";
	}
	if(startBtn.value == "off")
	{
		startBtn.value === "on";
	}
}



































