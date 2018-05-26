import { Player } from "./player.js";
import { Enemy, TEnemyList } from './enemy.js';

export class Game {
    player: Player;
    enemies: TEnemyList;

    constructor(){
        this.player = new Player()
    }

    public start() {
        // load images
        // initialize canvas
    }
}
