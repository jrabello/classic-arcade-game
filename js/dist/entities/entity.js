export class Entity {
    constructor(point, imgUrl) {
        this.point = point;
        this.imgUrl = imgUrl;
    }
    getPosition() {
        return this.point;
    }
    getImgUrl() {
        return this.imgUrl;
    }
}
