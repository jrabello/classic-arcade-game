import { VisualEntity } from "./visual-entity.js";

enum Key {
    left,
    right,
    up, 
    down
}
const keyMap = {
    37: Key.left,
    38: Key.up,
    39: Key.right,
    40: Key.down,
};

export class Player extends VisualEntity {
    constructor() {
        super();
    }

    public static handleKeyBoardInput(keyCode: number) {
        console.log(`pressed: `, keyCode);
        if(keyMap[keyCode]) {
            // valid keyboard key
        }
    }
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    Player.handleKeyBoardInput(e.keyCode);
});
