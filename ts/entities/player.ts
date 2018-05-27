import { Keyboard, IKeyboardUser } from "../keyboard.js";
import { Entity, IImageUrl } from "./entity.js";


export class Player extends Entity implements IKeyboardUser {
    private keyboard: Keyboard;

    constructor(imgUrl: IImageUrl) {
        super({x: 0, y: 0}, imgUrl);
        this.keyboard = new Keyboard(this);
    }
    
    // IKeyboardUser compliance
    goRight(): void { }
    goLeft(): void { }
    goTop(): void { }
    goDown(): void { }

}
