import { Keyboard, Key } from "./keyboard.js";

interface IPoint {
    x: number;
    y: number;
}

export class Player {
    point: IPoint;
    imgUrl: HTMLImageElement;
}
