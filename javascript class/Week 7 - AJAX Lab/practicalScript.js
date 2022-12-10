//javascript file thing
var global;

var globalArray = [];

var globalObj = [];

var databaseAnalysts = [];
var webDevelopers = [];
var softwareDevelopers = [];

var databaseAnalystObj = {};
var webDeveloperObj = {};
var softwareDeveloperObj = {};

var highestIncomeDBA = 0;
var highestIncomeWD = 0;
var highestIncomeSE = 0;

var dba;
var wd;
var se;

var averageIncomeDBA = 0;
var averageIncomeWD = 0;
var averageIncomeSE = 0;

var averageIncomePlaceHolder = 0;

var avgNumDBA = 0;
var avgNumWD = 0;
var avgNumSE = 0;

var listOutput = document.getElementById("listOutputThing");
var searchOutput = document.getElementById("searchOutputThing");

var listDatabaseAnalysts = document.getElementById("list-database-analyst");
listDatabaseAnalysts.addEventListener("click",listDBA);

var listWebDevelopers = document.getElementById("list-web-developer");
listWebDevelopers.addEventListener("click",listWD);

var listSoftwareEngineers = document.getElementById("list-software-engineer");
listSoftwareEngineers.addEventListener("click",listSE);


var firstNameSearch = document.getElementById("first-name");
var lastNameSearch = document.getElementById("last-name");
var searchBtn = document.getElementById("search-submit");
searchBtn.addEventListener("click",searchFunction);

//puts linked objects into an array
$.getJSON("http://ict.neit.edu/evanrense/salaries.php",
	function(data) {
		global = data;
		
		globalObj = data;
		globalArray.push(globalObj);
		
		console.log(globalArray);
		
		for(i = 0; i < globalArray[0].length; i++)
		{
			if(globalArray[0][i].jobTitle == "Database Analyst")
			{			
				averageIncomePlaceHolder = parseInt(globalArray[0][i].salary);
				averageIncomeDBA += averageIncomePlaceHolder;
				avgNumDBA++;
			
				if(globalArray[0][i].salary > highestIncomeDBA)
				{
					highestIncomeDBA = globalArray[0][i].salary;
					dba = i;
				}
			}
			
			else if(globalArray[0][i].jobTitle == "Web Developer")
			{
				averageIncomePlaceHolder = parseInt(globalArray[0][i].salary);
				averageIncomeWD += averageIncomePlaceHolder;
				avgNumWD++;
				
				if(globalArray[0][i].salary > highestIncomeWD)
				{
					highestIncomeWD = globalArray[0][i].salary;
					wd = i;
				}
			}
			
			else if(globalArray[0][i].jobTitle == "Software Developer")
			{
				averageIncomePlaceHolder = parseInt(globalArray[0][i].salary);
				averageIncomeSE += averageIncomePlaceHolder;
				avgNumSE++;
				
				if(globalArray[0][i].salary > highestIncomeSE)
				{
					highestIncomeSE = globalArray[0][i].salary;
					se = i;
				}
			}
			
			
		}
	
		averageIncomeDBA /= avgNumDBA;
		averageIncomeWD /= avgNumWD;
		averageIncomeSE /= avgNumSE;
		
		var firstDBA = document.getElementById("firstDBA");
		var lastDBA = document.getElementById("lastDBA");
		var highestDBA = document.getElementById("highestDBA");
		var averageDBA = document.getElementById("averageDBA");
		
		firstDBA.innerHTML = globalArray[0][dba].name.first;
		lastDBA.innerHTML = globalArray[0][dba].name.last;
		highestDBA.innerHTML = globalArray[0][dba].salary;
		averageDBA.innerHTML = parseInt(averageIncomeDBA);
		
		var firstWD = document.getElementById("firstWD");
		var lastWD = document.getElementById("lastWD");
		var highestWD = document.getElementById("highestWD");
		var averageWD = document.getElementById("averageWD");
		
		firstWD.innerHTML = globalArray[0][wd].name.first;
		lastWD.innerHTML = globalArray[0][wd].name.last;
		highestWD.innerHTML = globalArray[0][wd].salary;
		averageWD.innerHTML = parseInt(averageIncomeWD);
		
		var firstSE = document.getElementById("firstSE");
		var lastSE = document.getElementById("lastSE");
		var highestSE = document.getElementById("highestSE");
		var averageSE = document.getElementById("averageSE");
		
		firstSE.innerHTML = globalArray[0][se].name.first;
		lastSE.innerHTML = globalArray[0][se].name.last;
		highestSE.innerHTML = globalArray[0][se].salary;
		averageSE.innerHTML = parseInt(averageIncomeSE);
		
		if((parseInt(averageDBA.innerHTML) > parseInt(averageWD.innerHTML)) && (parseInt(averageDBA.innerHTML) > parseInt(averageSE.innerHTML)))
		{
			averageDBA.style.color = "limegreen";
		}
		else if((parseInt(averageWD.innerHTML) > parseInt(averageDBA.innerHTML)) && (parseInt(averageWD.innerHTML) > parseInt(averageSE.innerHTML)))
		{
			averageWD.style.color = "limegreen";
		}
		else if((parseInt(averageSE.innerHTML) > parseInt(averageDBA.innerHTML)) && (parseInt(averageSE.innerHTML) > parseInt(averageWD.innerHTML)))
		{
			averageSE.style.color = "limegreen";
		}
	}
)






//lists Database Analysts
function listDBA()
{	
	listOutput.innerHTML = "";
	listOutput.innerHTML += "<b>Database Analysts<br><br></b>";

	for(i = 0; i < globalArray[0].length; i++)
	{
		if(globalArray[0][i].jobTitle == "Database Analyst")
		{
			listOutput.innerHTML += "<b>NAME: </b>"
			listOutput.innerHTML += globalArray[0][i].name.first;
			listOutput.innerHTML += " ";
			listOutput.innerHTML += globalArray[0][i].name.last;
			listOutput.innerHTML += "<br><b>SALARY: </b>";
			listOutput.innerHTML += globalArray[0][i].salary;
			listOutput.innerHTML += "<br><br>";
		}
	}
}

//lists Web Developers
function listWD()
{	
	listOutput.innerHTML = "";
	listOutput.innerHTML += "<b>Web Developers<br><br></b>";
	
	for(i = 0; i < globalArray[0].length; i++)
	{
		if(globalArray[0][i].jobTitle == "Web Developer")
		{
			listOutput.innerHTML += "<b>NAME: </b>"
			listOutput.innerHTML += globalArray[0][i].name.first;
			listOutput.innerHTML += " ";
			listOutput.innerHTML += globalArray[0][i].name.last;
			listOutput.innerHTML += "<br><b>SALARY: </b>";
			listOutput.innerHTML += globalArray[0][i].salary;
			listOutput.innerHTML += "<br><br>";
		}
	}
	
	
}

//lists Software developers
function listSE()
{	
	listOutput.innerHTML = "";
	listOutput.innerHTML += "<b>Software Developers<br><br></b>";
	for(i = 0; i < globalArray[0].length; i++)
	{
		if(globalArray[0][i].jobTitle == "Software Developer")
		{
			listOutput.innerHTML += "<b>NAME: </b>"
			listOutput.innerHTML += globalArray[0][i].name.first;
			listOutput.innerHTML += " ";
			listOutput.innerHTML += globalArray[0][i].name.last;
			listOutput.innerHTML += "<br><b>SALARY: </b>";
			listOutput.innerHTML += globalArray[0][i].salary;
			listOutput.innerHTML += "<br><br>";			
		}
	}
	
	
	
	
	
	
}

function searchFunction()
{
	searchOutput.innerHTML = "";
	console.log("test");
	for(i = 0;i < globalArray[0].length;i++)
	{
		if(globalArray[0][i].name.first == firstNameSearch.value)
		{
			searchOutput.innerHTML += "<b>NAME: </b>";
			searchOutput.innerHTML += globalArray[0][i].name.first;
			searchOutput.innerHTML += " ";
			searchOutput.innerHTML += globalArray[0][i].name.last;
			searchOutput.innerHTML += "<br><b>SALARY: </b>";
			searchOutput.innerHTML += globalArray[0][i].salary;
			i = globalArray[0].length;
		}
		else if(globalArray[0][i].name.last == lastNameSearch.value)
		{
			searchOutput.innerHTML += "<b>NAME: </b>";
			searchOutput.innerHTML += globalArray[0][i].name.first;
			searchOutput.innerHTML += " ";
			searchOutput.innerHTML += globalArray[0][i].name.last;
			searchOutput.innerHTML += "<br><b>SALARY: </b>";
			searchOutput.innerHTML += globalArray[0][i].salary;
			i = globalArray[0].length;
		}
		else
		{
			console.log("searching..");
		}
	}
}














































