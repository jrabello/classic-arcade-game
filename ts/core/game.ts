import { Enemy } from "../entities/enemy.js";
import { Player } from '../entities/player.js';
import { GUIManager } from "./gui-manager.js";

export class Game {
    guiManager: GUIManager;

    constructor() {
        this.guiManager = new GUIManager([
            new Player({url: ``}),
            ...Array(10).fill(0).map(_ => new Enemy({url: ``}))]);
    }

    public async start() {
        await this.guiManager.run();
    }
}
