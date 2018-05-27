export var Key;
(function (Key) {
    Key[Key["left"] = 0] = "left";
    Key[Key["right"] = 1] = "right";
    Key[Key["up"] = 2] = "up";
    Key[Key["down"] = 3] = "down";
})(Key || (Key = {}));
export class Keyboard {
    constructor(kbdUser) {
        this.kbdUser = kbdUser;
        Keyboard.self = this;
    }
    getDirection(keyCode) {
        return Keyboard.keyMap[keyCode];
    }
    isKeyValid(keyCode) {
        return Keyboard.keyMap[keyCode] !== undefined;
    }
    static handleInput(keyCode) {
        // if valid key we can move player now
        switch (Keyboard.self.getDirection(keyCode)) {
            case Key.down:
                Keyboard.self.kbdUser.goDown();
                break;
            default:
                break;
        }
    }
}
Keyboard.keyMap = {
    37: Key.left,
    38: Key.up,
    39: Key.right,
    40: Key.down,
};
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    Keyboard.handleInput(e.keyCode);
});
