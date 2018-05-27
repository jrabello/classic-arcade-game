
interface IResourceCache {
    [url: string]: HTMLImageElement;
}

interface IImageList {
    stone:  string,
    water:  string,
    grass:  string,
    enemy:  string,
    player: string,
}

export interface IResourceConstants {
    images: IImageList;
}

export class Resources {
    private resourceCache: IResourceCache;
    private static constants: IResourceConstants = {
        images: {
            stone:  'images/stone-block.png',
            water:  'images/water-block.png',
            grass:  'images/grass-block.png',
            enemy:  'images/enemy-bug.png',
            player: 'images/char-boy.png',
        }
    }

    constructor() {
        this.resourceCache = {};
    }

    static getConstants(): IResourceConstants {
        return Resources.constants;
    }

    public getFromCache(url: string): HTMLImageElement {
        return this.resourceCache[url];
    }

    async fillResourceCache(images: Array<string>): Promise<void> {
        for (const imageUrl of images) {
            const img = new Image();
            img.src = imageUrl;
            await this.loadImage(img);
            this.resourceCache[imageUrl] = img;
        }
        return;
    }

    private async loadImage(img: HTMLImageElement): Promise<HTMLImageElement>{
        return new Promise<HTMLImageElement>((res, rej) =>{
            img.onload = () => {
                res(img);
            }
        })
    }

}
