//random color script
function randColor()
{
	var color="";
	color += "rgb(";
	color += Math.floor(Math.random()*255.9);
	color += ",";
	color += Math.floor(Math.random()* 255.9);
	color += ",";
	color += Math.floor(Math.random()*255.9);
	color += ")";
	
	return color;
}