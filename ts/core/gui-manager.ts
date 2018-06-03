import { TEntityList } from "../entities/entity.js";
import { Resources } from "./resources.js";
import { GUIRenderer } from "./gui-renderer.js";
import { Game, GameState } from "./game.js";


export class GUIManager {
    lastTime: number;
    renderer: GUIRenderer;
    canvas: HTMLCanvasElement;
    private static self: GUIManager;

    constructor(entities: TEntityList) {
        // init canvas and run mainLoop
        GUIManager.self = this;
        this.initCanvas();
        this.renderer = new GUIRenderer(this.canvas, entities);
    }
   
    // init canvas
    private initCanvas(): void {
        this.canvas = document.createElement('canvas');
        this.canvas.width = Resources.getConstants().world.size.width;
        this.canvas.height = Resources.getConstants().world.size.height;
        document.body.appendChild(this.canvas);
    }

    async run() {
        // init renderer
        await this.renderer.init();
        
        // starts main loop
        this.lastTime = Date.now();
        GUIManager.mainLoop();
    }

    private static mainLoop(): any {
        /* Get our time delta information which is required if your game
         * requires smooth animation. Because everyone's computer processes
         * instructions at different speeds we need a constant value that
         * would be the same for everyone (regardless of how fast their
         * computer is) - hurray time!
         */
        let now = Date.now(),
            dt = (now - GUIManager.self.lastTime) / 1000.0;
        
        /* Call our update/render functions, pass along the time delta to
         * our update function since it may be used for smooth animation.
         */
        if (Game.getState() === GameState.running) {
            GUIManager.self.renderer.update(dt);
            GUIManager.self.renderer.renderScene();
        }

        /* Set our lastTime variable which is used to determine the time delta
         * for the next time this function is called.
         */
        GUIManager.self.lastTime = now;

        /* Use the browser's requestAnimationFrame function to call this
         * function again as soon as the browser is able to draw another frame.
         */
        window.requestAnimationFrame(GUIManager.mainLoop);
    }

}
