import { Entity } from "./entity.js";
import { Keyboard } from "../core/keyboard.js";
export class Player extends Entity {
    constructor(imgUrl) {
        super({ x: 101, y: 0 }, imgUrl);
        this.movementOffset = { x: 101, y: 83 };
        this.keyboard = new Keyboard(this);
    }
    // IKeyboardUser compliance
    goRight() {
        this.getPosition().x += this.movementOffset.x;
    }
    goLeft() {
        if (this.getPosition().x - this.movementOffset.x >= 0)
            this.getPosition().x -= this.movementOffset.x;
    }
    goUp() {
        if (this.getPosition().y - this.movementOffset.y >= 0)
            this.getPosition().y -= this.movementOffset.y;
    }
    goDown() {
        this.getPosition().y += this.movementOffset.y;
    }
}
