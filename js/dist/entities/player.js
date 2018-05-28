import { Entity } from "./entity.js";
import { Keyboard } from "../core/keyboard.js";
export class Player extends Entity {
    constructor(imgUrl) {
        super({ x: 101, y: 0 }, imgUrl);
        this.moveOffset = { x: 101, y: 83 };
        this.keyboard = new Keyboard(this);
    }
    // IKeyboardUser compliance
    goRight() {
        this.getPosition().x += this.moveOffset.x;
    }
    goLeft() {
        if (this.getPosition().x - this.moveOffset.x >= 0)
            this.getPosition().x -= this.moveOffset.x;
    }
    goUp() {
        if (this.getPosition().y - this.moveOffset.y >= 0)
            this.getPosition().y -= this.moveOffset.y;
    }
    goDown() {
        this.getPosition().y += this.moveOffset.y;
    }
}
