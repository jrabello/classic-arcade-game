import { Player } from "./player.js";
export class Enemy extends Player {
    constructor() {
        super();
    }
    render(dt) {
        console.log(dt);
    }
}
