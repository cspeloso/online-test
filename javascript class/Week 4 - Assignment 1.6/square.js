//square program thing
function Square()
{
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