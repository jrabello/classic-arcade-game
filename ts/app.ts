import { Game } from "./game";

/**
 * Called when DOM is loaded
 * It's responsible for building necessary data structures and then start the game
 */
function onInit(): void {
    const game = new Game();
    game.start();
}

// Called when DOM is parsed and ready to be modified
document.addEventListener("DOMContentLoaded", () => {
    onInit();
});

