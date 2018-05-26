import { VisualEntity } from "./visual-entity.js";
import { Keyboard } from "./keyboard.js";
export class Player extends VisualEntity {
    constructor() {
        super();
        this.keyboard = new Keyboard();
        Player.self = this;
    }
    static handleKeyBoardInput(keyCode) {
        console.log(`pressed: `, keyCode);
        if (Player.self.keyboard.isKeyValid(keyCode)) {
            // valid keyboard key we can move player now
        }
    }
}
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    Player.handleKeyBoardInput(e.keyCode);
});
