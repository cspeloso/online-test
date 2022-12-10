//square program thing
function GameObject()
{
	this.x = 100;
	this.y = 100;
	
	this.width = 50;
	this.height = 50;
	
	this.radius = 10;
	
	this.vx = 0;
	this.vy = 0;
	
	this.color = "#ff0000";
	
	this.drawRect = function()
	{
		context.save();
			context.fillStyle = this.color;
			context.translate(this.x,this.y);
			context.fillRect((-this.width/2),(-this.height/2),this.width,this.height);
		context.restore();
	}
	
	this.drawCircle = function()
	{
		context.save();
			context.fillStyle = this.color;
			context.beginPath();
			context.translate(this.x, this.y);
			context.arc(0,0,this.width/2,0,360 *Math.PI/180, true);
			context.arc(0,0,this.width/2,0,360 *Math.PI/180, true);
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
		}
		
		if (this.x < 0 + this.width/2)
		{
			this.vx = -this.vx;
		}
		
		if (this.y > canvas.height - this.height/2)
		{
			this.vy = -this.vy;
		}
		
		if (this.y < 0 + this.height/2)
		{
			this.vy = -this.vy;
		}
	}
}