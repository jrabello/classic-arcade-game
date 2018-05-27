import { Entity } from "./entity.js";
export class Enemy extends Entity {
    constructor(imgUrl) {
        super({ x: 0, y: 0 }, imgUrl);
    }
}
