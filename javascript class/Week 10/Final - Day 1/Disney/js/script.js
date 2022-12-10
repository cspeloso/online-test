//script
var mickeyBtn = document.getElementById("mickey");
var donaldBtn = document.getElementById("donald");
var goofyBtn = document.getElementById("goofy");

mickeyBtn.addEventListener("click",mickeyClick);

donaldBtn.addEventListener("click",donaldClick);

goofyBtn.addEventListener("click",goofyClick);

var quoteHTML = document.getElementById("quote");

var nameHTML = document.getElementById("name");

var imgHTML = document.getElementById("img");


function mickeyClick(){
	console.log("mickey");
	
	var mickeyObj = {};
	
	$.getJSON("http://ict.neit.edu/evanrense/disney/disney.php?character=1",function(data){
		var global = data;
		
		var mickeyObj = data;
		console.log(mickeyObj);
		
		quoteHTML.innerHTML = mickeyObj.quote;
		nameHTML.innerHTML = mickeyObj.name;
		imgHTML.src = mickeyObj.image;
	}
	
	
	)
}

function donaldClick(){
	console.log("donald");
	
	$.getJSON("http://ict.neit.edu/evanrense/disney/disney.php?character=2",function(data){
		var global = data;
		
		var donaldObj = data;
		console.log(donaldObj);
		
		quoteHTML.innerHTML = donaldObj.quote;
		nameHTML.innerHTML = donaldObj.name;
		imgHTML.src = donaldObj.image;
	}
	)
}


function goofyClick(){
	console.log("goofy");
	
	$.getJSON("http://ict.neit.edu/evanrense/disney/disney.php?character=3",function(data){
		var global = data;
		var goofyObj = data;
		console.log(goofyObj);
		
		quoteHTML.innerHTML = goofyObj.quote;
		nameHTML.innerHTML = goofyObj.name;
		imgHTML.src = goofyObj.image;
	}
)}















