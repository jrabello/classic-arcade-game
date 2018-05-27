export interface IKeyboardUser {
    goRight(): void;
    goLeft(): void;
    goTop(): void;
    goDown(): void;
}

export enum Key {
    left,
    right,
    up, 
    down
}

interface IKeyCodeToAllowed {
    [keycode: number]: Key;
}


export class Keyboard {
    private user: IKeyboardUser;
    private static self: Keyboard;
    private static keyMap: IKeyCodeToAllowed = {
        37: Key.left,
        38: Key.up,
        39: Key.right,
        40: Key.down,
    };

    constructor(kbdUser: IKeyboardUser) {
        this.user = kbdUser;
    }
    
    public getDirection(keyCode: number): Key {
        return Keyboard.keyMap[keyCode];
    }

    public isKeyValid(keyCode: number): boolean {
        return Keyboard.keyMap[keyCode] !== undefined;
    }

    public static handleInput(keyCode: number) {
        // if valid key we can move player now
        switch (Keyboard.self.getDirection(keyCode)) {
            case Key.down:
                Keyboard.self.user.goDown();
                break;
            default:
                break;
        }
    }
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    Keyboard.handleInput(e.keyCode);
});
