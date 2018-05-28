var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Resources {
    constructor() { }
    static getConstants() {
        return Resources.constants;
    }
    static getFromCache(url) {
        return Resources.resourceCache[url];
    }
    static fillResourceCache(images) {
        return __awaiter(this, void 0, void 0, function* () {
            for (const imageUrl of images) {
                const img = new Image();
                img.src = imageUrl;
                yield Resources.loadImage(img);
                Resources.resourceCache[imageUrl] = img;
            }
            return;
        });
    }
    static loadImage(img) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((res, rej) => {
                img.onload = () => {
                    res(img);
                };
            });
        });
    }
}
Resources.resourceCache = {};
Resources.constants = {
    images: {
        stone: 'images/stone-block.png',
        water: 'images/water-block.png',
        grass: 'images/grass-block.png',
        enemy: 'images/enemy-bug.png',
        player: 'images/char-boy.png',
    },
    world: {
        moveOffset: {
            x: 101,
            y: 83,
        },
        size: {
            width: 606,
            height: 606,
        },
    }
};
