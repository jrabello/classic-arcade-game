import { Game } from "./core/game.js";

// compile it going into ts folder and typing:
// tsc -t es6 --outDir ../js/dist app.ts

/**
 * Called when DOM is loaded
 * It's responsible for building necessary data structures and then start the game
 */
function onInit(): void {
    var game = new Game();
    game.start();
}

// Called when DOM is parsed and ready to be modified
document.addEventListener("DOMContentLoaded", () => {
    onInit();
});
