//square program thing
function Square()
{
	var bounceNumber = document.getElementById("bounceNumber");
	var colorBounce1 = document.getElementById("colorBounce");
	var colorBounce2 = document.getElementById("colorBounce2");
	
	var speedBounce = document.getElementById("speedBounce");
	var speedBounce2 = document.getElementById("speedBounce2");
	
	var backgroundBtn = document.getElementById("backgroundBtn");
	var backgroundBtn2 = document.getElementById("backgroundBtn2");
	
	var bounceCounter = document.getElementById("bounceCounter");
	
	this.x = 100;
	this.y = 100;
	
	this.width = 50;
	this.height = 50;
	
	this.radius = 10;
	
	this.vx = 0;
	this.vy = 0;
	
	this.color = "#ff0000";
	
	this.draw = function()
	{
		context.save();
			context.fillStyle = this.color;
			context.translate(this.x,this.y);
			context.fillRect((-this.width/2), (-this.height/2),this.width,this.height);
		context.restore();
	}
	
	this.move = function()
	{
		this.x += this.vx;
		this.y += this.vy;
		
		if (this.x > canvas.width - this.width/2)
		{
			this.vx = -this.vx;
			if (colorBounce1.checked){
				this.color = randColor();
				document.querySelector("#epilepsy").style.color = "#5e9ff9";
			}
			
			if (speedBounce.checked) {
				this.vy = rand(5,40);
			}
			
			bounceCount++;
			bounceCounter.innerHTML = bounceCount;
		}
		
		if (this.x < 0 + this.width/2)
		{
			this.vx = -this.vx;
			if (colorBounce1.checked){
				this.color = randColor();
				document.querySelector("#epilepsy").style.color = "#5e9ff9";
			}
			
			bounceCount++;
			bounceCounter.innerHTML = bounceCount;
		}
		
		if (this.y > canvas.height - this.height/2)
		{
			this.vy = -this.vy;
			if (colorBounce1.checked){
				this.color = randColor();
				document.querySelector("#epilepsy").style.color = "#5e9ff9";
			}
			
			bounceCount++;
			bounceCounter.innerHTML = bounceCount;
		}
		
		if (this.y < 0 + this.height/2)
		{
			this.vy = -this.vy;
			if (colorBounce1.checked){
				this.color = randColor();
				document.querySelector("#epilepsy").style.color = "#5e9ff9";
			}
			
			if (speedBounce.checked) {
				this.vx = rand(5,40);
			}
			
			if (backgroundBtn.checked) {
				document.querySelector("#canvas").style.backgroundColor = randColor();
				document.querySelector("#epilepsy").style.color = "#5e9ff9";
			}
			
			bounceCount++;
			bounceCounter.innerHTML = bounceCount;
		}
	}
	
}








