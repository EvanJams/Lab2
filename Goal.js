function Goal(){
	this.x = Math.random() * window.innerWidth;
	this.y = Math.random() * window.innerHeight;
	this.width = 36;
	this.height = 36;
	this.r = Math.random() * 255;
	this.b = Math.random() * 255;
	this.IsAlive = true;
}

Goal.prototype.draw = function(){
	if (this.IsAlive)
	{
		console.log("m");
		ctx.strokeStyle = game.rgb(this.r, 0, this.b);
		ctx.strokeRect(this.x, this.y, this.width, this.height);
	}
	else{
		ctx.clearRect(this.x-1, this.y-1, this.width+2, this.height+2);
	}
}