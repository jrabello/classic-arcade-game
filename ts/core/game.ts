import { Enemy } from "../entities/enemy.js";
import { Player } from '../entities/player.js';
import { GUIManager } from "./gui-manager.js";


export class Game {
    guiManager: GUIManager;

    constructor() {
        // creates player and enemies
        const player = new Player();
        const enemies = Array(6)
                        .fill(0)
                        .map(_ => new Enemy());
        this.guiManager = new GUIManager([
            player,
            ...enemies
        ]);
    }

    public async start() {
        await this.guiManager.run();
    }

    public restart() {
    }

}
