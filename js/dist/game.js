var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Player } from "./player.js";
import { Resources } from "./resources.js";
export class Game {
    constructor() {
        this.player = new Player();
        this.resources = new Resources();
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            // load images
            yield this.resources.fillResourceCache([
                'images/stone-block.png',
                'images/water-block.png',
                'images/grass-block.png',
                'images/enemy-bug.png',
                'images/char-boy.png'
            ]);
            console.log(this.resources);
            // initialize canvas
        });
    }
}
