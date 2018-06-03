var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Enemy } from "../entities/enemy.js";
import { Player } from '../entities/player.js';
import { GUIManager } from "./gui-manager.js";
export var GameState;
(function (GameState) {
    GameState[GameState["none"] = 0] = "none";
    GameState[GameState["running"] = 1] = "running";
    GameState[GameState["paused"] = 2] = "paused";
})(GameState || (GameState = {}));
export class Game {
    constructor() {
        Game.self = this;
        // creates player and enemies
        const player = new Player();
        const enemies = Array(10)
            .fill(0)
            .map(_ => new Enemy());
        this.entities = [
            player,
            ...enemies
        ];
        // init and run gui manager
        this.guiManager = new GUIManager(this.entities);
        this.guiManager.run();
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            Game.self.state = GameState.running;
        });
    }
    static restart() {
        // hide modal
        document.getElementById('modal').style.display = 'none';
        // reset entities
        Game.self.entities.forEach((entity) => entity.reset());
        Game.self.state = GameState.running;
    }
    static getState() {
        return Game.self.state;
    }
    static setState(state) {
        return Game.self.state = state;
    }
}
function onCloseBtnClicked() {
    Game.restart();
}
document.getElementById('close-btn').addEventListener('click', () => {
    onCloseBtnClicked();
});
