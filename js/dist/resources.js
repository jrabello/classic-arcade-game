var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Resources {
    constructor() {
        this.resourceCache = {};
    }
    fillResourceCache(images) {
        return __awaiter(this, void 0, void 0, function* () {
            images.forEach((imageUrl) => __awaiter(this, void 0, void 0, function* () {
                const img = new Image();
                img.src = imageUrl;
                yield this.loadImage(img);
                this.resourceCache[imageUrl] = img;
            }));
            return;
        });
    }
    loadImage(img) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((res, rej) => {
                img.onload = () => {
                    console.log(`onload!!!!`, img);
                    res(img);
                };
            });
        });
    }
}
