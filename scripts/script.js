const canvas = document.getElementById('game_canvas');
const context = canvas.getContext('2d');
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 70;


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

var interval = 1000/60;
var update = setInterval(animate, interval);

var player = GameObject(canvas.width/2, canvas.height/2, 50, 50, 'red');

function animate(){
    context.clearRect(0,0, canvas.width, canvas.height);

    player.drawObject();
}

// function GameObject(x,y,w,h,color)
function GameObject(x,y,width,height,color) {

    this.drawObject = function(){        
		context.save();
            context.fillStyle = this.color;
            context.translate(this.x, this.y);
            context.fillRect((-this.width/2), (-this.height/2), this.width, this.height);
        context.restore();
    }

}