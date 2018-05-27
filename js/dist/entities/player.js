import { Entity } from "./entity.js";
import { Keyboard } from "../core/keyboard.js";
export class Player extends Entity {
    constructor(imgUrl) {
        super({ x: 0, y: 0 }, imgUrl);
        this.keyboard = new Keyboard(this);
    }
    // IKeyboardUser compliance
    goRight() { }
    goLeft() { }
    goTop() { }
    goDown() { }
}
