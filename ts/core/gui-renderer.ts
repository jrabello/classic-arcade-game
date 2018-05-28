import { Resources } from "./resources.js";
import { TEntityList, Entity } from "../entities/entity.js";

export class GUIRenderer {
    entities: TEntityList;
    renderCtx: CanvasRenderingContext2D;
    
    constructor(canvas: HTMLCanvasElement, entities: TEntityList){
        this.renderCtx = canvas.getContext('2d');
        this.entities = entities;
    }

    private async buildResourceCache() {
        // load images in cache( hashmaps FTW :D )
        await Resources.fillResourceCache([
            Resources.getConstants().images.stone,
            Resources.getConstants().images.water,
            Resources.getConstants().images.grass,
            ...this.entities.map(entity => entity.getImgUrl().url)
        ]);
    }

    async init() {
        await this.buildResourceCache();
    }

    /* This function initially draws the "game level", it will then call
     * the renderEntities function. Remember, this function is called every
     * game tick (or loop of the game engine) because that's how games work -
     * they are flipbooks creating the illusion of animation but in reality
     * they are just drawing the entire screen over and over.
     */
    renderScene(): void {
        /* This array holds the relative URL to the image used
         * for that particular row of the game level.
         */
        const rowImages: string[] = [
                Resources.getConstants().images.water,   // Top row is water
                Resources.getConstants().images.stone,   // Row 1 of 3 of stone
                Resources.getConstants().images.stone,   // Row 2 of 3 of stone
                Resources.getConstants().images.stone,   // Row 3 of 3 of stone
                Resources.getConstants().images.grass,   // Row 1 of 2 of grass
                Resources.getConstants().images.grass,    // Row 2 of 2 of grass
                Resources.getConstants().images.grass,    // Row 2 of 2 of grass
            ],
            numRows: number = Resources.getConstants().world.size.width/Resources.getConstants().world.moveOffset.x,
            numCols: number = Resources.getConstants().world.size.width/Resources.getConstants().world.moveOffset.x;
        
        // Before drawing, clear existing canvas
        this.renderCtx.clearRect(0,0, 
            Resources.getConstants().world.size.width, 
            Resources.getConstants().world.size.height)

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
                this.renderCtx.drawImage(
                    Resources.getFromCache(rowImages[row]),
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
         * the render function you have defined.
         */
        this.entities.forEach((entity: Entity) => {
            // entity.render(dt);
            this.renderCtx.drawImage(
                Resources.getFromCache(entity.getImgUrl().url), 
                entity.getPosition().x,
                entity.getPosition().y);
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