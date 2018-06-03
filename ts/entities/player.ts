import { Entity } from "./entity.js";
import { IKeyboardUser, Keyboard } from "../core/keyboard.js";
import { Resources } from "../core/resources.js";
import { Utils } from "../core/utils.js";
import { TEnemyList } from "./enemy.js";


export class Player extends Entity implements IKeyboardUser {
    private keyboard: Keyboard;

    constructor() {
        super(
            { dx: 0, dy: 0 , sx: 17, sy: 63, sw: 68, sh: 77}, 
            { path: Resources.getConstants().images.player });
        this.reset();
        this.keyboard = new Keyboard(this);
    }

    collidesWithAny(enemies: TEnemyList): boolean {
        for (const enemy of enemies) {
            // we take advantage of knowing ahead of time that 
            // both enemies and player share same x position, so we can ignore 
            // any enemy outside y range of player
            if(enemy.getY() == super.getY() && super.collidesWith(enemy)) {
                return true;
            }
        }
        return false;
    }
    
    collidesWithWater(): boolean {
        return super.getY() === 0;
    }

    // IKeyboardUser compliance
    goRight(): void {
        if(this.canGoRight())
            this.incrementX(Resources.getConstants().world.moveOffset.x);
    }

    goDown(): void {
        if(this.canGoDown())
            this.incrementY(Resources.getConstants().world.moveOffset.y);
    }

    goLeft(): void {
        if(this.getX() - Resources.getConstants().world.moveOffset.x >= 0)
            this.decrementX(Resources.getConstants().world.moveOffset.x);
    }

    goUp(): void {
        if(this.getY() - Resources.getConstants().world.moveOffset.y >= 0)
            this.decrementY(Resources.getConstants().world.moveOffset.y);
    }

    // player does not need to implement render method 
    // because keyboard controls its movements
    render(dt?: number): void { }

    reset(): void {
        const initialX = 
            Utils.getRandomIntInclusive(0, 1) * 
            Resources.getConstants().world.moveOffset.x;
        const initialY = 5 * Resources.getConstants().world.moveOffset.y;
        super.setX(initialX);
        super.setY(initialY);
    }

    private canGoRight(): boolean {
        return (this.getX() + Resources.getConstants().world.moveOffset.x) <
                Resources.getConstants().world.size.width
    }
  
    private canGoDown(): boolean {
        return this.getY() + Resources.getConstants().world.moveOffset.y <
            Resources.getConstants().world.size.height - 
            (Resources.getConstants().world.moveOffset.y * 2)
    }
}
