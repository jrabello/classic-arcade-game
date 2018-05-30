
export interface IPosition {
    //canvas x,y
    dx: number;
    dy: number;
    //element x,y
    sx: number;
    sy: number;
    sw: number;
    sh: number;
}

export interface IRenderable {
    render(dt?: number);
}

export interface IImageUrl {
    url: string;
}

export declare type TEntityList = Entity[];   

export abstract class Entity {
   
    private point: IPosition;
    private imgUrl: IImageUrl;

    constructor(point: IPosition, imgUrl: IImageUrl) { 
        this.point = point;
        this.imgUrl = imgUrl;
    }

    public abstract render(dt?: number): void;
    
    incrementX(delta: number): void {
        this.point.dx += delta;
    }
    incrementY(delta: number): void {
        this.point.dy += delta;
    }
    decrementX(delta: number): void {
        this.point.dx -= delta;
    }
    decrementY(delta: number): void {
        this.point.dy -= delta;
    }

    setX(x: number): void {
        this.point.dx = x;
    }
    setY(y: number): void {
        this.point.dy = y;
    }
    getX(): number {
        return this.point.dx;
    }
    getY(): number {
        return this.point.dy;
    }

    // getPosition(): IPosition {
    //     return this.point;
    // }
    
    getImgUrl(): IImageUrl {
        return this.imgUrl;
    }
}
