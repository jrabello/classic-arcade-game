import { Player } from "./player.js";
import { TEnemyList } from './enemy.js';
import { Resources } from "./resources.js";

export class Game {
    player: Player;
    enemies: TEnemyList;
    resources: Resources;
    scene: string[];

    constructor() {
        this.player = new Player()
        this.resources = new Resources()
        this.scene = [
            'images/stone-block.png',
            'images/water-block.png',
            'images/grass-block.png'
        ];
    }

    public async start() {
        // load images
        await this.resources.fillResourceCache([
            ...this.scene,
            'images/enemy-bug.png',
            'images/char-boy.png'
        ])
        console.log(this.resources);
        
        // initialize canvas
    }
}
