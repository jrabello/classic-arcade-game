export class Entity {
    constructor(point, imgUrl) {
        this.point = point;
        this.imgUrl = imgUrl;
    }
    // checks if current object collides with anoher one
    collidesWith(entity) {
        if ((this.point.dx + this.point.sx) < (entity.getX() + entity.getSX() + entity.getWidth()) &&
            (this.point.dx + this.point.sx + this.point.sw) > (entity.getX() + entity.getSX()) &&
            (this.point.dy + this.point.sy) < (entity.getY() + entity.getSY() + entity.getHeight()) &&
            (this.point.sh + this.point.dy + this.point.sy) > (entity.getY() + entity.getSY()))
            return true;
        else
            return false;
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
    getSX() {
        return this.point.sx;
    }
    getSY() {
        return this.point.sy;
    }
    getWidth() {
        return this.point.sw;
    }
    getHeight() {
        return this.point.sh;
    }
    getImgUrl() {
        return this.imgUrl;
    }
}
