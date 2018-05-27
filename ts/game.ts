import { Resources } from "./resources.js";
import { TEnemyList } from "./players/enemy.js";
import { User } from './players/user.js';

export class Game {
    user: User;
    enemies: TEnemyList;
    resources: Resources;
    canvas: HTMLCanvasElement;
    renderCtx: CanvasRenderingContext2D;
    scene: string[];
    lastTime: number;

    constructor() {
        this.user = new User()
        this.resources = new Resources()
        this.scene = [
            'images/stone-block.png',
            'images/water-block.png',
            'images/grass-block.png'
        ];
    }

    public async start() {
        // load images in cache( hashmaps FTW :D )
        await this.resources.fillResourceCache([
            ...this.scene,
            'images/enemy-bug.png',
            'images/char-boy.png'
        ]);
        
        // initialize canvas and run mainLoop
        this.run();
    }

    private run(): void {
        // init canvas
        this.canvas = document.createElement('canvas');
        this.renderCtx = this.canvas.getContext('2d');
        this.canvas.width = 505;
        this.canvas.height = 606;
        document.body.appendChild(this.canvas);

        this.reset();
        this.lastTime = Date.now();
        this.mainLoop();
    }

    private mainLoop() {
        /* Get our time delta information which is required if your game
         * requires smooth animation. Because everyone's computer processes
         * instructions at different speeds we need a constant value that
         * would be the same for everyone (regardless of how fast their
         * computer is) - hurray time!
         */
        var now = Date.now(),
            dt = (now - this.lastTime) / 1000.0;
        // console.log(`dt`,dt);
        
        /* Call our update/render functions, pass along the time delta to
         * our update function since it may be used for smooth animation.
         */
        this.update(dt);
        this.render();

        /* Set our lastTime variable which is used to determine the time delta
         * for the next time this function is called.
         */
        this.lastTime = now;

        /* Use the browser's requestAnimationFrame function to call this
         * function again as soon as the browser is able to draw another frame.
         */
        window.requestAnimationFrame(this.mainLoop);
    }

    /* This function initially draws the "game level", it will then call
     * the renderEntities function. Remember, this function is called every
     * game tick (or loop of the game engine) because that's how games work -
     * they are flipbooks creating the illusion of animation but in reality
     * they are just drawing the entire screen over and over.
     */
    render() {
        /* This array holds the relative URL to the image used
         * for that particular row of the game level.
         */
        var rowImages = [
                'images/water-block.png',   // Top row is water
                'images/stone-block.png',   // Row 1 of 3 of stone
                'images/stone-block.png',   // Row 2 of 3 of stone
                'images/stone-block.png',   // Row 3 of 3 of stone
                'images/grass-block.png',   // Row 1 of 2 of grass
                'images/grass-block.png'    // Row 2 of 2 of grass
            ],
            numRows = 6,
            numCols = 5,
            row, col;
        
        // Before drawing, clear existing canvas
        this.renderCtx.clearRect(0,0, this.canvas.width, this.canvas.height)

        /* Loop through the number of rows and columns we've defined above
         * and, using the rowImages array, draw the correct image for that
         * portion of the "grid"
         */
        for (row = 0; row < numRows; row++) {
            for (col = 0; col < numCols; col++) {
                /* The drawImage function of the canvas' context element
                 * requires 3 parameters: the image to draw, the x coordinate
                 * to start drawing and the y coordinate to start drawing.
                 * We're using our Resources helpers to refer to our images
                 * so that we get the benefits of caching these images, since
                 * we're using them over and over.
                 */
                this.renderCtx.drawImage(
                    this.resources.getFromCache(rowImages[row]), 
                    col * 101, 
                    row * 83);
            }
        }

        this.renderEntities();
    }

    /* This function is called by the render function and is called on each game
     * tick. Its purpose is to then call the render functions you have defined
     * on your enemy and player entities within app.js
     */
    renderEntities(dt?: number) {
        /* Loop through all of the objects within the allEnemies array and call
         * the render function you have defined.
         */
        this.enemies.forEach(function(enemy) {
            enemy.render(dt);
        });

        this.user.render();
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
