
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
    
    // forces child classes to implement this method to be rendered
    abstract render(dt?: number): void;
    
    // checks if current object collides with anoher one
    collidesWith(entity: Entity): boolean {
        if ((this.point.dx + this.point.sx) < (entity.getX() + entity.getSX() + entity.getWidth()) &&
            (this.point.dx + this.point.sx + this.point.sw) > (entity.getX() + entity.getSX())     &&
            (this.point.dy+this.point.sy) < (entity.getY() + entity.getSY() + entity.getHeight())  &&
            (this.point.sh + this.point.dy + this.point.sy) > (entity.getY() + entity.getSY()))
            return true;
        else
            return false;
    }

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
    getSX(): number {
        return this.point.sx;
    }
    getSY(): number {
        return this.point.sy;
    }

    getWidth(): number {
        return this.point.sw;
    }
    getHeight(): number {
        return this.point.sh;
    }
    
    getImgUrl(): IImageUrl {
        return this.imgUrl;
    }
}
