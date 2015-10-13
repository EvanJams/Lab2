var game;

function main()
{
	game = new Game();
	game.gameLoop();
	game.goal.draw();
	window.addEventListener("keypress", game.player.update);

}