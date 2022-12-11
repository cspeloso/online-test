var canvas = document.getElementById('game_canvas');
var context = canvas.getContext('2d');
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = 70;

var interval = 1000/60;
var update = setInterval(animate, interval);

$(document).on('keypress', function(e) {

    //  up
    if(e.which == 38 || e.which == 119)
    {
        context.centerY += 1;
    }

    //  down
    if(e.which == 40 || e.which == 115)
    {
        context.centerY -= 1;
    }

    //  left
    if(e.which == 37 || e.which == 97)
    {
        context.centerX -= 1;
    }

    //  right
    if(e.which == 39 || e.which == 100)
    {
        context.centerX += 1;
    }
});



function GameObject(x = canvas.width/2,y = canvas.height/2,w = 50,h = 50,color = "#FF0000") {
    
}