import { Entity } from "./entity.js";
import { Keyboard } from "../core/keyboard.js";
import { Resources } from "../core/resources.js";
import { Utils } from "../core/utils.js";
export class Player extends Entity {
    constructor() {
        super({ dx: 0, dy: 0, sx: 17, sy: 63, sw: 68, sh: 77 }, { url: Resources.getConstants().images.player });
        this.reset();
        this.keyboard = new Keyboard(this);
    }
    collidesWithAny(enemies) {
        for (const enemy of enemies) {
            // we take advantage of knowing ahead of time that 
            // both enemies and player share same x position, so we can ignore 
            // any enemy outside y range of player
            if (enemy.getY() == super.getY() && super.collidesWith(enemy)) {
                return true;
            }
        }
        return false;
    }
    // IKeyboardUser compliance
    canGoRight() {
        return (this.getX() + Resources.getConstants().world.moveOffset.x) <
            Resources.getConstants().world.size.width;
    }
    goRight() {
        if (this.canGoRight())
            this.incrementX(Resources.getConstants().world.moveOffset.x);
    }
    canGoDown() {
        return this.getY() + Resources.getConstants().world.moveOffset.y <
            Resources.getConstants().world.size.height -
                (Resources.getConstants().world.moveOffset.y * 2);
    }
    goDown() {
        if (this.canGoDown())
            this.incrementY(Resources.getConstants().world.moveOffset.y);
    }
    goLeft() {
        if (this.getX() - Resources.getConstants().world.moveOffset.x >= 0)
            this.decrementX(Resources.getConstants().world.moveOffset.x);
    }
    goUp() {
        if (this.getY() - Resources.getConstants().world.moveOffset.y >= 0)
            this.decrementY(Resources.getConstants().world.moveOffset.y);
    }
    // player does not need to render because keyboard controls its coordinates
    render(dt) { }
    reset() {
        const initialX = Utils.getRandomIntInclusive(0, 1) *
            Resources.getConstants().world.moveOffset.x;
        const initialY = 5 * Resources.getConstants().world.moveOffset.y;
        super.setX(initialX);
        super.setY(initialY);
    }
}
