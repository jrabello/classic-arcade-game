
interface IPoint {
    x: number;
    y: number;
}

export interface IRenderable {
    render(dt?: number);
}

export interface IImageUrl {
    url: string;
}

export declare type TEntityList = Entity[];   

export class Entity {
    point: IPoint;
    imgUrl: IImageUrl;

    constructor(point: IPoint, imgUrl: IImageUrl) { 
        this.point = point;
        this.imgUrl = imgUrl;
    }

}
