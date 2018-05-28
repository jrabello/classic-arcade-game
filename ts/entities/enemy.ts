import { Entity } from "./entity.js";
import { Resources } from "../core/resources.js";

export declare type TEnemyList = Enemy[];

export class Enemy extends Entity {
    constructor() {
        super(
            { x: 0, y: 0 }, 
            {url: Resources.getConstants().images.enemy});
    }
}