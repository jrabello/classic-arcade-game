import { Entity, IImageUrl } from "./entity.js";
import { IKeyboardUser, Keyboard } from "../core/keyboard.js";
import { Resources } from "../core/resources.js";
import { Utils } from "../core/utils.js";


export class Player extends Entity implements IKeyboardUser {
    
    private keyboard: Keyboard;

    constructor() {
        super({
                x:  Utils.getRandomIntInclusive(2, 3) * 
                    Resources.getConstants().world.moveOffset.x, 
                y: 5 * Resources.getConstants().world.moveOffset.y
            },
            { 
                url: Resources.getConstants().images.player 
            });
        this.keyboard = new Keyboard(this);
    }
    
    // IKeyboardUser compliance
    private canGoRight(): boolean {
        return (this.getPosition().x + Resources.getConstants().world.moveOffset.x) <
                Resources.getConstants().world.size.width
    }
    goRight(): void {
        if(this.canGoRight())
            this.getPosition().x += Resources.getConstants().world.moveOffset.x;
    }
    
    private canGoDown(): boolean {
        return this.getPosition().y + Resources.getConstants().world.moveOffset.y <
            Resources.getConstants().world.size.height - 
            (Resources.getConstants().world.moveOffset.y * 2)
    }
    goDown(): void {
        if(this.canGoDown())
            this.getPosition().y += Resources.getConstants().world.moveOffset.y;
    }

    goLeft(): void {
        if(this.getPosition().x - Resources.getConstants().world.moveOffset.x >= 0)
            this.getPosition().x -= Resources.getConstants().world.moveOffset.x;
    }

    goUp(): void {
        if(this.getPosition().y - Resources.getConstants().world.moveOffset.y >= 0)
            this.getPosition().y -= Resources.getConstants().world.moveOffset.y;
    }

}
