import { Keyboard } from "../keyboard.js";
import { Player } from "./player.js";
export class User extends Player {
    constructor() {
        super();
        this.keyboard = new Keyboard(this);
    }
    // IKeyboardUser compliance
    goRight() { }
    goLeft() { }
    goTop() { }
    goDown() { }
}
