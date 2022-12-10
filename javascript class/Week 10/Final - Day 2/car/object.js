//object script
function CarObject(x,y,w,h,color,vx,vy)
{
	if(x == undefined)
	{
		this.x = canvas.width/2;
	}
	else
	{
		this.x = x;
	}
	
	if(y == undefined)
	{
		this.y = canvas.height/2;
	}
	else
	{
		this.y = y;
	}
	
	if(w == undefined)
	{
		this.width = 100;
	}
	else
	{
		this.width = w;
	}
	
	if(h == undefined)
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
	
	if(vx == undefined)
	{
		this.vx = 0;
	}
	else
	{
		this.vx = vx;
	}
	
	if(vy == undefined)
	{
		this.vy = 0;
	}
	else
	{
		this.vy = vy;
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
	
	this.move = function()
	{
		this.x += this.vx;
		this.y += this.vy;
		
		
		if(this.x >= canvas.width - this.width/2)
		{	
			this.vx = 0;
			this.vy = 5;	
			
			this.width = 25;
			this.height = 50;
		}		
		
		if(this.y > canvas.height - this.height/2)
		{
			this.vx = -5;
			this.vy = 0;
			
			this.width = 50;
			this.height = 25;			
		}
		
		if(this.x < 0 + this.width/2)
		{
			this.vx = 0;
			this.vy = -5;
			
			this.width = 25;
			this.height = 50;		
		}
		
		if(this.y < 0 + this.height/2)
		{
			this.vx = 5;
			this.vy = 0;
			
			
			this.width = 50;
			this.height = 25;			
		}
	}
	
}




































