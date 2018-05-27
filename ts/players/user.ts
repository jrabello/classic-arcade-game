import { Keyboard, IKeyboardUser } from "../keyboard.js";
import { Player } from "./player.js";


export class User extends Player implements IKeyboardUser {
    
    private keyboard: Keyboard;

    constructor() {
        super();
        this.keyboard = new Keyboard(this);
    }
    
    // IKeyboardUser compliance
    goRight(): void { }
    goLeft(): void { }
    goTop(): void { }
    goDown(): void { }

}
