import { Enemy } from "../entities/enemy.js";
import { Player } from '../entities/player.js';
import { GUIManager } from "./gui-manager.js";
import { Resources } from "./resources.js";

export class Game {
    guiManager: GUIManager;

    constructor() {
        // creates player and enemies
        this.guiManager = new GUIManager([
            new Player({ url: Resources.getConstants().images.player }),
            ...Array(10)
                .fill(0)
                .map(_ => new Enemy({ url: Resources.getConstants().images.enemy }))
        ]);
    }

    public async start() {
        await this.guiManager.run();
    }
}
