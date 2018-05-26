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
    keyMap: IKeyCodeToAllowed;

    constructor() {
        this.keyMap = {
            37: Key.left,
            38: Key.up,
            39: Key.right,
            40: Key.down,
        };
    }

    public isKeyValid(keyCode: number): boolean {
        return this.keyMap[keyCode] !== undefined;
    }

    public getDirection(keyCode: number): Key{
        return this.keyMap[keyCode];
    }
}