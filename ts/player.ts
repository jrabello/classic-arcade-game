import { VisualEntity } from "./visual-entity.js";
import { Keyboard, Key } from "./keyboard.js";



export class Player extends VisualEntity {
    private static self: Player;
    private keyboard: Keyboard;

    constructor() {
        super();
        this.keyboard = new Keyboard();
        Player.self = this;
    }

    public static handleKeyBoardInput(keyCode: number) {
        // player not init yet
        if(!Player.self)
            return;

        // if valid key we can move player now
        switch (Player.self.keyboard.getDirection(keyCode)) {
            case Key.down:
                console.log(`dooooooooooooown!!!!`);
                
                break;

            default:
                break;
        }
    }
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    Player.handleKeyBoardInput(e.keyCode);
});
