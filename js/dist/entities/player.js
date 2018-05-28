import { Entity } from "./entity.js";
import { Keyboard } from "../core/keyboard.js";
import { Resources } from "../core/resources.js";
import { Utils } from "../core/utils.js";
export class Player extends Entity {
    constructor() {
        const initialX = Utils.getRandomIntInclusive(2, 3) *
            Resources.getConstants().world.moveOffset.x;
        const initialY = 5 * Resources.getConstants().world.moveOffset.y;
        super({ x: initialX, y: initialY }, { url: Resources.getConstants().images.player });
        this.keyboard = new Keyboard(this);
    }
    // IKeyboardUser compliance
    canGoRight() {
        return (this.getPosition().x + Resources.getConstants().world.moveOffset.x) <
            Resources.getConstants().world.size.width;
    }
    goRight() {
        if (this.canGoRight())
            this.getPosition().x += Resources.getConstants().world.moveOffset.x;
    }
    canGoDown() {
        return this.getPosition().y + Resources.getConstants().world.moveOffset.y <
            Resources.getConstants().world.size.height -
                (Resources.getConstants().world.moveOffset.y * 2);
    }
    goDown() {
        if (this.canGoDown())
            this.getPosition().y += Resources.getConstants().world.moveOffset.y;
    }
    goLeft() {
        if (this.getPosition().x - Resources.getConstants().world.moveOffset.x >= 0)
            this.getPosition().x -= Resources.getConstants().world.moveOffset.x;
    }
    goUp() {
        if (this.getPosition().y - Resources.getConstants().world.moveOffset.y >= 0)
            this.getPosition().y -= Resources.getConstants().world.moveOffset.y;
    }
}
