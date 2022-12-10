//gameobject.js
//square program thing
var ballOffScrn = true;
var wallBounceCount = 0;

function GameObject(x,y,w,h,color)
{
	if (x == undefined)
	{
		this.x = canvas.width/2;
	}
	else
	{
		this.x = x;
	}
	
	if (y == undefined)
	{
		this.y = canvas.height/2;
	}
	else
	{
		this.y = y;
	}
	
	if (w == undefined)
	{
		this.width = 100;
	}
	else
	{
		this.width = w;
	}
	
	if (h == undefined)
	{
		this.height = 100;
	}
	else
	{
		this.height = h;
	}
	
	if (color == undefined)
	{
		this.color = "#FF0000";
	}
	else
	{
		this.color = color;
	}
	
	this.radius = 10;
	
	this.drawRect = function()
	{
		context.save();
			context.fillStyle = this.color;
			context.translate(this.x, this.y);
			context.fillRect((-this.width/2), (-this.height/2), this.width, this.height);
		context.restore();
	}
	
	this.drawCircle = function()
	{
		context.save();
			context.fillStyle = this.color;
			context.beginPath();
			context.translate(this.x, this.y);
			context.arc(0,0,this.width/2,0,360  *Math.PI/180, true);
			context.arc(0,0,this.width/2,0,360  *Math.PI/180, true);
			context.closePath();
			context.fill();
		context.restore();
	}
	
	this.move = function()
	{
		this.x += this.vx;
		this.y += this.vy;
		
		
		if (this.x > canvas.width - this.width/2)
		{
			this.vx = -this.vx;
			wallBounceCount++;
			bounceCount.innerHTML = wallBounceCount;
		}
		
		if (this.x < 0 + this.width/2)
		{
			if(ballOffScrn)
			{
				ballOffScrn = false;
				
				var resetTimer = setTimeout(reset,1000);				
			}
		}
		
		if (this.y > canvas.height - this.height/2)
		{
			this.vy = -this.vy;
			wallBounceCount++;
			bounceCount.innerHTML = wallBounceCount;
		}
		
		if (this.y < 0 + this.height/2)
		{
			this.vy = -this.vy;
			wallBounceCount++;
			bounceCount.innerHTML = wallBounceCount;
		}
	}
	
	this.left = function()
	{
		return this.x - this.width/2;
	}
	
	this.right = function()
	{
		return this.x + this.width/2;
	}
	
	this.top = function()
	{
		return this.y - this.height/2;
	}
	
	this.bottom = function()
	{
		return this.y + this.height/2;
	}
	
}













































