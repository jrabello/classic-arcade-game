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
import { Resources } from "./resources.js";
export class Game {
    constructor() {
        // creates player and enemies
        this.guiManager = new GUIManager([
            new Player({ url: Resources.getConstants().images.player }),
            ...Array(10)
                .fill(0)
                .map(_ => new Enemy({ url: Resources.getConstants().images.enemy }))
        ]);
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.guiManager.run();
        });
    }
}
