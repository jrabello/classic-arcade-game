export class Entity {
    constructor(point, imgUrl) {
        this.point = point;
        this.imgUrl = imgUrl;
    }
    getPosition() {
        return this.point;
    }
    setPosition(p) {
        this.point = p;
    }
    getImgUrl() {
        return this.imgUrl;
    }
}
