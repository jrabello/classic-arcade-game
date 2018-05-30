import { Entity } from "./entity.js";
import { Resources } from "../core/resources.js";
import { Utils } from "../core/utils.js";

export declare type TEnemyList = Enemy[];

export class Enemy extends Entity {
    
    private steps;

    constructor() {
        super(
            { x: 0, y: 0 }, 
            { url: Resources.getConstants().images.enemy });
        this.resetEnemy();
    }

    public render(dt?: number): void {
        super.getPosition().x += dt ? this.steps * dt : 0;

        if(super.getPosition().x > Resources.getConstants().world.size.width){
            this.resetEnemy();
        }
    }

    resetEnemy(): any {
        super.getPosition().x = -1 * Resources.getConstants().world.moveOffset.x;
        super.getPosition().y = 
            Utils.getRandomIntInclusive(1, 4) *
            Resources.getConstants().world.moveOffset.y;
        this.steps = Utils.getRandomIntInclusive(400, 600);
    }
}