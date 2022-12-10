//key movement script
var a = false;
var d = false;

document.addEventListener("keydown", press);
document.addEventListener("keyup", release);

function press(e)
{
	//a  keycode
	if(e.keyCode == 65)
	{
		w = true;
	}
	
	//d keycode
	if(e.keyCode == 68)
	{
		s = true;
	}
}

function release(e)
{
	if(e.keyCode == 65)
	{
		w = false;
	}
	
	if(e.keyCode == 68)
	{
		s = false;
	}
}



































