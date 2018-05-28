import { Entity, IImageUrl, IPoint } from "./entity.js";
import { IKeyboardUser, Keyboard } from "../core/keyboard.js";


export class Player extends Entity implements IKeyboardUser {
    
    private keyboard: Keyboard;
    private moveOffset: IPoint;

    constructor(imgUrl: IImageUrl) {
        super({x: 101, y: 0}, imgUrl);
        this.moveOffset = {x:101, y:83}
        this.keyboard = new Keyboard(this);
    }
    
    // IKeyboardUser compliance
    goRight(): void {
        this.getPosition().x += this.moveOffset.x;
    }

    goLeft(): void {
        if(this.getPosition().x-this.moveOffset.x >= 0)
            this.getPosition().x -= this.moveOffset.x;
    }

    goUp(): void {
        if(this.getPosition().y-this.moveOffset.y >= 0)
            this.getPosition().y -= this.moveOffset.y;
    }

    goDown(): void {
        this.getPosition().y += this.moveOffset.y;
    }

}
