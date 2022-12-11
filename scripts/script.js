var canvas = document.getElementById('game_canvas');
var context = canvas.getContext('2d');
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = 70;

var interval = 1000/60;
var update = setInterval(animate, interval);

var player = new Player(50,100, 50, 50, "red");


function animate() {
    context.clearRect(0,0,canvas.width, canvas.height);

    if(w && player.top() > 0) player.y -= 8;
    if(s && player.bottom() < canvas.height) player.y += 8;
    if(a && player.left() > 0) player.x -= 8;
    if(d && player.right() < canvas.width) player.x += 8;

    if(player.bottom() > canvas.height)
        player.y = canvas.height - player.h/2;
    if(player.top() < 0)
        player.y = 0 + player.h/2;
    if(player.left() < 0)
        player.x = 0 + player.h/2;
    if(player.right() > canvas.width)
        player.x = canvas.width - player.w/2;

    player.drawRect();
}

function Player(x = canvas.width/2,y = canvas.height/2,w = 50,h = 50,color = "#FF0000") {
    
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;

    this.radius = 10;

    this.drawRect = function() {
        context.save();
        context.fillStyle = this.color;
        context.translate(this.x, this.y);
        context.fillRect((-this.w/2), (-this.h/2), this.w, this.h);

        context.restore();
    }

    this.left = function() {
        return this.x - this.w/2;
    }
    this.right = function() {
        return this.x + this.w/2;
    }

    this.top = function() {
        return this.y - this.h/2;
    }
    this.bottom = function() {
        return this.y + h/2;
    }

}