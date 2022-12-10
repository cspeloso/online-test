const canvas = document.getElementById('game_canvas');
const context = canvas.getContext('2d');
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 70;



context.beginPath();
context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
context.fillStyle = 'green';
context.fill();
context.lineWidth = 5;
context.strokeStyle = '#003300';
context.stroke();

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

// function GameObject(x,y,w,h,color)
class GameObject {

    //  x, y, width, height, color

    constructor(x,y,width,height,color){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

}