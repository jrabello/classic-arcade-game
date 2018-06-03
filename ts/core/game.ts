import { Enemy } from "../entities/enemy.js";
import { Player } from '../entities/player.js';
import { GUIManager } from "./gui-manager.js";
import { TEntityList, Entity } from "../entities/entity.js";

export enum GameState {
    none,
    running,
    paused
}

export class Game {
    private state: GameState;
    private entities: TEntityList;
    private guiManager: GUIManager;
    private static self: Game; 

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

    public async start() {
        Game.self.state = GameState.running;
    }

    public static restart() {
        // hide modal
        (<HTMLElement>document.getElementById('modal')).style.display = 'none';

        // reset entities
        Game.self.entities.forEach((entity: Entity) => entity.reset());
        Game.self.state = GameState.running;
    }

    public static getState(): GameState {
        return Game.self.state;
    }

    public static setState(state: GameState): GameState {
        return Game.self.state = state;
    }

}

function onCloseBtnClicked(): void {
    Game.restart();
}
(<HTMLElement>document.getElementById('close-btn')).addEventListener('click', () => {
    onCloseBtnClicked();
})
