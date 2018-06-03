import { Enemy } from "../entities/enemy.js";
import { Player } from '../entities/player.js';
import { GUIManager } from "./gui-manager.js";

export enum GameState {
    none,
    running,
    paused
}

export class Game {
    public static state: GameState;
    guiManager: GUIManager;

    constructor() {
        // creates player and enemies
        const player = new Player();
        const enemies = Array(10)
                        .fill(0)
                        .map(_ => new Enemy());
        this.guiManager = new GUIManager([
            player,
            ...enemies
        ]);
    }

    public async start() {
        Game.state = GameState.running;
        await this.guiManager.run();
    }

    public static restart() { 

    }

}
