import { Entity } from "./entity.js";
import { IKeyboardUser, Keyboard } from "../core/keyboard.js";
import { Resources } from "../core/resources.js";
import { Utils } from "../core/utils.js";
import { TEnemyList } from "./enemy.js";


export class Player extends Entity implements IKeyboardUser {
    
    private keyboard: Keyboard;

    constructor() {
        const initialX = 
            Utils.getRandomIntInclusive(2, 3) * 
            Resources.getConstants().world.moveOffset.x;
        const initialY = 5 * Resources.getConstants().world.moveOffset.y;
        super(
            { dx: initialX, dy: initialX , sx: 17, sy: 63, sw: 68, sh: 77}, 
            { url: Resources.getConstants().images.player });
        this.keyboard = new Keyboard(this);
    }

    collidesWithSome(enemies: TEnemyList): boolean {
        for (const enemy of enemies) {
            // we take advantage of knowing ahead of time that 
            // both enemies and player share same x position, so we can ignore 
            // any enemy outside y range of player
            if(enemy.getY() == super.getY()) {
                return true;
            }
        }
        return false;
    }
    
    // IKeyboardUser compliance
    private canGoRight(): boolean {
        return (this.getX() + Resources.getConstants().world.moveOffset.x) <
                Resources.getConstants().world.size.width
    }
    goRight(): void {
        if(this.canGoRight())
            this.incrementX(Resources.getConstants().world.moveOffset.x);
    }
    
    private canGoDown(): boolean {
        return this.getY() + Resources.getConstants().world.moveOffset.y <
            Resources.getConstants().world.size.height - 
            (Resources.getConstants().world.moveOffset.y * 2)
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

    // player does not need to render because
    public render(dt?: number): void { }

}
