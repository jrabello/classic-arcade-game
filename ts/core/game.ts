import { Resources } from "../resources.js";
import { TEnemyList, Enemy } from "../entities/enemy.js";
import { Player } from '../entities/player.js';
import { GUIManager } from "./gui-manager.js";

export class Game {
    player: Player;
    enemies: TEnemyList;
    guiManager: GUIManager;

    constructor() {
        this.player = new Player();
        this.enemies = Array(10).fill(0).map(_ => new Enemy());
    }

    public async start() {
        await this.guiManager.run();
    }
}
