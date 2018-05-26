export var Key;
(function (Key) {
    Key[Key["left"] = 0] = "left";
    Key[Key["right"] = 1] = "right";
    Key[Key["up"] = 2] = "up";
    Key[Key["down"] = 3] = "down";
})(Key || (Key = {}));
export class Keyboard {
    constructor() {
        this.keyMap = {
            37: Key.left,
            38: Key.up,
            39: Key.right,
            40: Key.down,
        };
    }
    isKeyValid(keyCode) {
        return this.keyMap[keyCode] !== undefined;
    }
    getDirection(keyCode) {
        return this.keyMap[keyCode];
    }
}
