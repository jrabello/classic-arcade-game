export class Entity {
    constructor(point, imgUrl) {
        this.point = point;
        this.imgUrl = imgUrl;
    }
    incrementX(delta) {
        this.point.dx += delta;
    }
    incrementY(delta) {
        this.point.dy += delta;
    }
    decrementX(delta) {
        this.point.dx -= delta;
    }
    decrementY(delta) {
        this.point.dy -= delta;
    }
    setX(x) {
        this.point.dx = x;
    }
    setY(y) {
        this.point.dy = y;
    }
    getX() {
        return this.point.dx;
    }
    getY() {
        return this.point.dy;
    }
    // getPosition(): IPosition {
    //     return this.point;
    // }
    getImgUrl() {
        return this.imgUrl;
    }
}
