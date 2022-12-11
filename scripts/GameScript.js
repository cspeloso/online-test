//  gets the canvas for the game
var canvas = document.querySelector('#game_canvas');
var context = canvas.getContext('2d');

context.fillRect(25,25,25,25);



function CreatePlayer(x,y,width,height,color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;

    this.radius = 10;

    this.drawPlayer = function(){
        context.save();

        context.fillStyle = this.color;
        context.translate(this.x,this.y);
        context.fillRect((-this.width/2), (-this.height/2), this.width, this.height);

        context.restore();
    }

}

var player = CreatePlayer(50,50,50,50, 'red');

player.drawPlayer();