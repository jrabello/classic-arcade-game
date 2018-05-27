import { Entity, IImageUrl } from "./entity.js";

export declare type TEnemyList = Enemy[];

export class Enemy extends Entity {
    constructor(imgUrl: IImageUrl) {
        super({x: 0, y: 0}, imgUrl);
    }
}