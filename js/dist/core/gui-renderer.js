var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Resources } from "./resources.js";
import { GameState, Game } from "./game.js";
export class GUIRenderer {
    constructor(canvas, entities) {
        this.renderCtx = canvas.getContext('2d');
        [this.player, ...this.enemies] = entities;
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.buildResourceCache();
        });
    }
    buildResourceCache() {
        return __awaiter(this, void 0, void 0, function* () {
            // load images in cache( hashmaps FTW :D )
            yield Resources.fillResourceCache([
                Resources.getConstants().images.stone,
                Resources.getConstants().images.water,
                Resources.getConstants().images.grass,
                ...[this.player, ...this.enemies].map(entity => entity.getImgPath())
            ]);
        });
    }
    /* This function initially draws the "game level", it will then call
     * the renderEntities function. Remember, this function is called every
     * game tick (or loop of the game engine) because that's how games work -
     * they are flipbooks creating the illusion of animation but in reality
     * they are just drawing the entire screen over and over.
     */
    renderScene() {
        // Before drawing, clear existing canvas
        this.renderCtx.clearRect(0, 0, Resources.getConstants().world.size.width, Resources.getConstants().world.size.height);
        /* Loop through the number of rows and columns we've defined above
         * and, using the rowImages array, draw the correct image for that
         * portion of the "grid"
         */
        for (let row = 0; row < GUIRenderer.numRows; row++) {
            for (let col = 0; col < GUIRenderer.numCols; col++) {
                this.renderCtx.drawImage(Resources.getFromCache(GUIRenderer.rowImages[row]), col * Resources.getConstants().world.moveOffset.x, row * Resources.getConstants().world.moveOffset.y);
            }
        }
        this.renderEntities();
    }
    /* This function is called by the render function and is called on each game
     * tick. Its purpose is to then call the render functions you have defined
     * on your enemy and player entities within app.js
     */
    renderEntities(dt) {
        /* Loop through all of the objects within the allEnemies array and call
         * the render function you have defined2.
         */
        [this.player, ...this.enemies].forEach((entity) => {
            // changes entity position if needed
            entity.render(dt);
            // draws entity
            this.renderCtx.drawImage(Resources.getFromCache(entity.getImgPath()), entity.getX(), entity.getY());
            this.renderCtx.strokeRect(entity.getX(), entity.getY(), 101, 171);
            this.renderCtx.strokeRect(entity.getX() + entity.getSX(), entity.getY() + entity.getSY(), entity.getWidth(), entity.getHeight());
        });
    }
    update(dt) {
        this.renderEntities(dt);
        this.checkColisions();
    }
    checkColisions() {
        let collidedMsg = '';
        if (this.player.collidesWithWater()) {
            collidedMsg = `You win!!!!`;
        }
        else if (this.player.collidesWithAny(this.enemies)) {
            collidedMsg = `You loose!!!!`;
        }
        if (collidedMsg.length !== 0) {
            // show colision game over modal!!!
            document.getElementById('modal-text').innerText = collidedMsg;
            document.getElementById('modal').style.display = 'flex';
            Game.setState(GameState.paused);
        }
    }
}
GUIRenderer.rowImages = [
    Resources.getConstants().images.water,
    Resources.getConstants().images.stone,
    Resources.getConstants().images.stone,
    Resources.getConstants().images.stone,
    Resources.getConstants().images.stone,
    Resources.getConstants().images.grass,
    Resources.getConstants().images.grass,
];
GUIRenderer.numRows = Resources.getConstants().world.size.width / Resources.getConstants().world.moveOffset.x;
GUIRenderer.numCols = Resources.getConstants().world.size.width / Resources.getConstants().world.moveOffset.x;
