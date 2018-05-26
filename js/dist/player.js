import { VisualEntity } from "./visual-entity.js";
export class Player extends VisualEntity {
    constructor() {
        super();
    }
    static handleKeyBoardInput(keyId) {
        console.log(`pressed: `, keyId);
    }
}
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    Player.handleKeyBoardInput(allowedKeys[e.keyCode]);
});
