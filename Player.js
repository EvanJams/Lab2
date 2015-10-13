function Player(){
	this.x = Math.random() * window.innerWidth;
	this.y = Math.random() * window.innerHeight;
}

Player.prototype.draw = function(){

	ctx.fillStyle = game.rgb(Math.random() * 255,Math.random() * 255, Math.random() * 255);
	ctx.fillRect(this.x, this.y, 30, 30);
}

Player.prototype.update = function(e){
	ctx.clearRect(game.player.x-1, game.player.y-1, 32, 32);
	if (e.keyCode == 119 && game.player.y > 0) { //w
		game.player.y -= 8;
	}
	if (e.keyCode == 97 && game.player.x > 0) { //a
		game.player.x -= 8;
	}
	if (e.keyCode == 115 && game.player.y < window.innerHeight) { //s
		game.player.y += 8;
	}
	if (e.keyCode == 100 && game.player.x < window.innerWidth) { //d
		game.player.x += 8;
	}
	game.player.draw();
}

Player.prototype.checkCollision = function(e){
	var collides=false;
	//check collisions
        if ((this.x < e.x + e.width) &&
        (this.x + 30 > e.x) &&
        (this.y + 30 > e.y) &&
        (this.y < e.y + e.height) )
        {           
            collides = true;                     
        }         
        return collides;
}