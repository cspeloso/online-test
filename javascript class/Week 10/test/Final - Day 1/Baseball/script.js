//baseball js
var standings = [
	{team:"Boston", wins: 81, losses:62, percentage: 0.566},
	{team:"New York", wins: 77, losses:65, percentage: 0.542},
	{team:"Baltimore", wins: 71, losses:72, percentage: 0.497},
	{team:"Tampa Bay", wins: 71, losses:73, percentage: 0.493},
	{team:"Toronto", wins: 66, losses:77, percentage: 0.462}	
];

var teamBoston = "";
var teamNewYork = "";
var teamBaltimore = "";
var teamTampaBay = "";
var teamToronto = "";

var tableHTML = document.getElementById("table");

tableHTML.innerHTML = "<tr><th>Team</th><th>Wins</th><th>Losses</th><th>Percentage</th></tr>"

for (var i = 0;i < standings.length; i++)
{
	tableHTML.innerHTML += "<tr><td>" + standings[i].team + "</t><td>" + standings[i].wins + "</td><td>" + standings[i].losses + "</td><td>" + standings[i].percentage + "</td><tr>";
	
	
	
	if(standings[i].percentage > .500)
	{
		standings[i].record = "winning";
	}
	
	if(standings[i].percentage <= .500)
	{
		standings[i].record = "losing";
	}
}

for (var i = 1;i < standings.length; i++)
{
	if(standings[i].record === "winning")
	{
		tableHTMLcolor = document.getElementById("table").rows[1].cells;
		
		tableHTMLcolor[0].style.color = "blue";
		tableHTMLcolor[1].style.color = "blue";
		tableHTMLcolor[2].style.color = "blue";
		tableHTMLcolor[3].style.color = "blue";
		
		tableHTMLcolor = document.getElementById("table").rows[3].cells;
		
		tableHTMLcolor[0].style.color = "blue";
		tableHTMLcolor[1].style.color = "blue";
		tableHTMLcolor[2].style.color = "blue";
		tableHTMLcolor[3].style.color = "blue";
	}
	
	if(standings[i].record === "losing")
	{
		tableHTMLcolor = document.getElementById("table").rows[5].cells;
		
		tableHTMLcolor[0].style.color = "red";
		tableHTMLcolor[1].style.color = "red";
		tableHTMLcolor[2].style.color = "red";
		tableHTMLcolor[3].style.color = "red";
		
		tableHTMLcolor = document.getElementById("table").rows[7].cells;
		
		tableHTMLcolor[0].style.color = "red";
		tableHTMLcolor[1].style.color = "red";
		tableHTMLcolor[2].style.color = "red";
		tableHTMLcolor[3].style.color = "red";
		
		tableHTMLcolor = document.getElementById("table").rows[9].cells;
		
		tableHTMLcolor[0].style.color = "red";
		tableHTMLcolor[1].style.color = "red";
		tableHTMLcolor[2].style.color = "red";
		tableHTMLcolor[3].style.color = "red";
	}
}

console.log(standings);



































