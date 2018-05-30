import { Entity } from "./entity.js";
import { Resources } from "../core/resources.js";
import { Utils } from "../core/utils.js";
export class Enemy extends Entity {
    constructor() {
        super({ dx: 0, dy: 0, sx: 1, sy: 77, sw: 98, sh: 67 }, { url: Resources.getConstants().images.enemy });
        this.resetEnemy();
    }
    render(dt) {
        super.incrementX(dt ? this.steps * dt : 0);
        // checks if enemy leaves board
        if (super.getX() > Resources.getConstants().world.size.width) {
            this.resetEnemy();
        }
    }
    resetEnemy() {
        super.setX(-1 * Resources.getConstants().world.moveOffset.x);
        super.setY(Utils.getRandomIntInclusive(1, 4) *
            Resources.getConstants().world.moveOffset.y);
        this.steps = Utils.getRandomIntInclusive(50 * Enemy.velocity, 80 * Enemy.velocity);
    }
}
Enemy.velocity = 1;
