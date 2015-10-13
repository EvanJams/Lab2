function Game(){
	this.player = new Player();	
	this.goal = new Goal();
	initCanvas();
}

Game.prototype.test = function(e)
{	
	console.log("test");
	console.log(e.keyCode);
}

Game.prototype.gameLoop = function()
{	
	if (game.player.checkCollision(game.goal))
	{
		game.goal.isAlive = false;
		game.goal.draw()
		game.player.draw()
		ctx.save();
		ctx.fillStyle=game.rgb(0,0,128);
		ctx.font = 'italic 40pt Calibri';
		ctx.textBaseline = "top";
		ctx.fillText("You Won!",200,100);
		ctx.restore();
	}
	console.log("GameLoop");
	game.draw();
	window.requestAnimationFrame(game.gameLoop);
}

/*function for rgb for convenience*/
Game.prototype.rgb = function(r, g, b) 
{ 
	return 'rgb('+this.clamp(Math.round(r),0,255)+', '+this.clamp(Math.round(g),0,255)+', '+this.clamp(Math.round(b),0,255)+')';
}

/*helper function*/
Game.prototype.clamp =  function(value, min, max)
{ 
	if(max<min) { 
		var temp = min; 
		min = max; 
		max = temp; 
	}
	return Math.max(min, Math.min(value, max)); 
}

function initCanvas()
{
	canvas = document.createElement("canvas");
	//ctx is the content we will draw on
	ctx = canvas.getContext("2d");
	document.body.appendChild(canvas);
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

Game.prototype.draw = function()
{
	this.player.draw();
}

