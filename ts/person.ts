import { Keyboard, IKeyboardUser } from "./keyboard.js";


export class Person implements IKeyboardUser {
    
    private keyboard: Keyboard;

    constructor() {
        this.keyboard = new Keyboard(this);
    }
    
    // IKeyboardUser compliance
    goRight(): void { }
    goLeft(): void { }
    goTop(): void { }
    goDown(): void { }

}
