var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Resources } from "./resources.js";
export class GUIRenderer {
    constructor(canvas, entities) {
        this.renderCtx = canvas.getContext('2d');
        this.entities = entities;
    }
    buildResourceCache() {
        return __awaiter(this, void 0, void 0, function* () {
            // load images in cache( hashmaps FTW :D )
            yield Resources.fillResourceCache([
                Resources.getConstants().images.stone,
                Resources.getConstants().images.water,
                Resources.getConstants().images.grass,
                ...this.entities.map(entity => entity.getImgUrl().url)
            ]);
        });
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.buildResourceCache();
        });
    }
    /* This function initially draws the "game level", it will then call
     * the renderEntities function. Remember, this function is called every
     * game tick (or loop of the game engine) because that's how games work -
     * they are flipbooks creating the illusion of animation but in reality
     * they are just drawing the entire screen over and over.
     */
    renderScene() {
        /* This array holds the relative URL to the image used
         * for that particular row of the game level.
         */
        const rowImages = [
            Resources.getConstants().images.water,
            Resources.getConstants().images.stone,
            Resources.getConstants().images.stone,
            Resources.getConstants().images.stone,
            Resources.getConstants().images.grass,
            Resources.getConstants().images.grass,
            Resources.getConstants().images.grass,
        ], numRows = Resources.getConstants().world.size.width / Resources.getConstants().world.moveOffset.x, numCols = Resources.getConstants().world.size.width / Resources.getConstants().world.moveOffset.x;
        // Before drawing, clear existing canvas
        this.renderCtx.clearRect(0, 0, Resources.getConstants().world.size.width, Resources.getConstants().world.size.height);
        /* Loop through the number of rows and columns we've defined above
         * and, using the rowImages array, draw the correct image for that
         * portion of the "grid"
         */
        for (let row = 0; row < numRows; row++) {
            for (let col = 0; col < numCols; col++) {
                /* The drawImage function of the canvas' context element
                 * requires 3 parameters: the image to draw, the x coordinate
                 * to start drawing and the y coordinate to start drawing.
                 * We're using our Resources helpers to refer to our images
                 * so that we get the benefits of caching these images, since
                 * we're using them over and over.
                 */
                this.renderCtx.drawImage(Resources.getFromCache(rowImages[row]), col * Resources.getConstants().world.moveOffset.x, row * Resources.getConstants().world.moveOffset.y);
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
         * the render function you have defined.
         */
        this.entities.forEach((entity) => {
            // entity.render(dt);
            this.renderCtx.drawImage(Resources.getFromCache(entity.getImgUrl().url), entity.getPosition().x, entity.getPosition().y);
        });
    }
    update(dt) {
        this.renderEntities(dt);
        // checkCollisions();
    }
    /* This function does nothing but it could have been a good place to
    * handle game reset states - maybe a new game menu or a game over screen
    * those sorts of things. It's only called once by the init() method.
    */
    reset() {
        // noop
    }
}
