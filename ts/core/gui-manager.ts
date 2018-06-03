import { TEntityList } from "../entities/entity.js";
import { Resources } from "./resources.js";
import { GUIRenderer } from "./gui-renderer.js";


export class GUIManager {
    private static self: GUIManager;
    canvas: HTMLCanvasElement;
    renderer: GUIRenderer;
    lastTime: number;

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
        
        // start main loop
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
        GUIManager.self.renderer.update(dt);
        GUIManager.self.renderer.renderScene();

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
