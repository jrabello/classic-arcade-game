import { Enemy } from "../entities/enemy.js";
import { Player } from '../entities/player.js';
import { GUIManager } from "./gui-manager.js";
import { Resources } from "./resources.js";



export class Game {
    guiManager: GUIManager;

    constructor() {
        // creates player and enemies
        const enemies = Array(10)
                        .fill(0)
                        .map(_ => new Enemy({ 
                            url: Resources.getConstants().images.enemy
                        }));
        const player = new Player({ 
            url: Resources.getConstants().images.player 
        });
        this.guiManager = new GUIManager([
            player,
            ...enemies
        ]);
    }

    public async start() {
        await this.guiManager.run();
    }

    public reStart() {
    }


}
