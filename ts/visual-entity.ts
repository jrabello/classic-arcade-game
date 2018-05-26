interface IPoint {
    x: number;
    y: number;
}

export class VisualEntity {
    point: IPoint;
    imgUrl: HTMLImageElement;

    constructor() {
        console.log(`VisualEntity!!!`);
    }
}