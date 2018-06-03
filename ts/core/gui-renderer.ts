import { Resources } from "./resources.js";
import { TEntityList, Entity } from "../entities/entity.js";
import { TEnemyList } from "../entities/enemy.js";
import { Player } from "../entities/player.js";
import { GameState, Game } from "./game.js";


export class GUIRenderer {
    player: Player;
    enemies: TEnemyList;
    renderCtx: CanvasRenderingContext2D;
    private static rowImages: string[] = [
        Resources.getConstants().images.water,   // Top row is water
        Resources.getConstants().images.stone,   // Row 1 of 3 of stone
        Resources.getConstants().images.stone,   // Row 2 of 3 of stone
        Resources.getConstants().images.stone,   // Row 3 of 3 of stone
        Resources.getConstants().images.stone,   // Row 1 of 2 of grass
        Resources.getConstants().images.grass,    // Row 2 of 2 of grass
        Resources.getConstants().images.grass,    // Row 2 of 2 of grass
    ];
    private static numRows: number = 
        Resources.getConstants().world.size.width/Resources.getConstants().world.moveOffset.x;
    private static numCols: number = 
        Resources.getConstants().world.size.width/Resources.getConstants().world.moveOffset.x;


    constructor(canvas: HTMLCanvasElement, entities: TEntityList) {
        this.renderCtx = canvas.getContext('2d');
        [this.player as Entity, ...this.enemies as TEntityList] = entities;
    }

    async init() {
        await this.buildResourceCache();
    }

    private async buildResourceCache() {
        // load images in cache( hashmaps FTW :D )
        await Resources.fillResourceCache([
            Resources.getConstants().images.stone,
            Resources.getConstants().images.water,
            Resources.getConstants().images.grass,
            ...[this.player, ...this.enemies].map(entity => entity.getImgPath())
        ]);
    }

    /* This function initially draws the "game level", it will then call
     * the renderEntities function. Remember, this function is called every
     * game tick (or loop of the game engine) because that's how games work -
     * they are flipbooks creating the illusion of animation but in reality
     * they are just drawing the entire screen over and over.
     */
    renderScene(): void {
        // Before drawing, clear existing canvas
        this.renderCtx.clearRect(0,0, 
            Resources.getConstants().world.size.width, 
            Resources.getConstants().world.size.height)

        /* Loop through the number of rows and columns we've defined above
         * and, using the rowImages array, draw the correct image for that
         * portion of the "grid"
         */
        for (let row = 0; row < GUIRenderer.numRows; row++) {
            for (let col = 0; col < GUIRenderer.numCols; col++) {
                this.renderCtx.drawImage(
                    Resources.getFromCache(GUIRenderer.rowImages[row]),
                    col * Resources.getConstants().world.moveOffset.x, 
                    row * Resources.getConstants().world.moveOffset.y);
            }
        }

        this.renderEntities();
    }

    /* This function is called by the render function and is called on each game
     * tick. Its purpose is to then call the render functions you have defined
     * on your enemy and player entities within app.js
     */
    renderEntities(dt?: number): void {
        /* Loop through all of the objects within the allEnemies array and call
         * the render function you have defined2.
         */
        [this.player, ...this.enemies].forEach((entity: Entity) => {
            // changes entity position if needed
            entity.render(dt);

            // draws entity
            this.renderCtx.drawImage(
                Resources.getFromCache(entity.getImgPath()), 
                entity.getX(),
                entity.getY(),
            );

            this.renderCtx.strokeRect(
                entity.getX(),
                entity.getY(),
                101,
                171
            );

            this.renderCtx.strokeRect(
                entity.getX()+entity.getSX(),
                entity.getY()+entity.getSY(),
                entity.getWidth(),
                entity.getHeight(),
            );

        });
    }

    update(dt): void {
        this.renderEntities(dt);
        this.checkColisions();
    }

    checkColisions(): void {
        let collidedMsg: string = '';

        if (this.player.collidesWithWater()) {
            collidedMsg = `You win!!!!`;
        } else if (this.player.collidesWithAny(this.enemies)) {
            collidedMsg = `You loose!!!!`;
        }

        if (collidedMsg.length !== 0) {
            // show colision game over modal!!!
            (<HTMLElement>document.getElementById('modal-text')).innerText = collidedMsg;
            (<HTMLElement>document.getElementById('modal')).style.display = 'flex';
            Game.setState(GameState.paused);
        }
    }

}
