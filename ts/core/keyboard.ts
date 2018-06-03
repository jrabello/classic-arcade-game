export interface IKeyboardUser {
    goRight(): void;
    goLeft(): void;
    goUp(): void;
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
    private kbdUser: IKeyboardUser;
    private static self: Keyboard;
    private static keyMap: IKeyCodeToAllowed = {
        37: Key.left,
        38: Key.up,
        39: Key.right,
        40: Key.down,
    };

    constructor(kbdUser: IKeyboardUser) {
        this.kbdUser = kbdUser;
        Keyboard.self = this;
    }

    public getDirection(keyCode: number): Key {
        return Keyboard.keyMap[keyCode];
    }

    public static handleInput(keyCode: number): void {
        // if valid key we can move player now
        switch (Keyboard.self.getDirection(keyCode)) {
            case Key.down:
                Keyboard.self.kbdUser.goDown();
                break;
            case Key.up:
                Keyboard.self.kbdUser.goUp();
                break;
            case Key.right:
                Keyboard.self.kbdUser.goRight();
                break;
            case Key.left:
                Keyboard.self.kbdUser.goLeft();
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
