import { Entity } from "./entity.js";
import { Resources } from "../core/resources.js";
import { Utils } from "../core/utils.js";
export class Enemy extends Entity {
    constructor() {
        super({ dx: 0, dy: 0, sx: 1, sy: 77, sw: 98, sh: 67 }, { path: Resources.getConstants().images.enemy });
        this.reset();
    }
    render(dt) {
        // move enemy
        super.incrementX(dt ? this.steps * dt : 0);
        // checks if enemy leaves board
        if (super.getX() > Resources.getConstants().world.size.width) {
            this.reset();
        }
    }
    reset() {
        const outsideMap = -1 * Resources.getConstants().world.moveOffset.x;
        const random = Utils.getRandomIntInclusive(1, 4) *
            Resources.getConstants().world.moveOffset.y;
        super.setX(outsideMap);
        super.setY(random);
        this.steps = Utils.getRandomIntInclusive(15 * Enemy.velocity, 100 * Enemy.velocity);
    }
}
Enemy.velocity = 5;
