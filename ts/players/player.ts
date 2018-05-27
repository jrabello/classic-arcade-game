
interface IPoint {
    x: number;
    y: number;
}

export interface IRenderable {
    render(dt?: number);
}

export class Player implements IRenderable {
    point: IPoint;
    imgUrl: HTMLImageElement;

    constructor() {
        
    }    

    render(dt?: number) {
    }
}
