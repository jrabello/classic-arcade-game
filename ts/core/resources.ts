
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

interface IWorld {
    size: IWorldSize;
    moveOffset: IMoveOffset;
}
interface IWorldSize {
    width: number;
    height: number;
} 
interface IMoveOffset {
    x: number;
    y: number;
} 


export interface IResourceConstants {
    images: IImageList;
    world: IWorld;
}


export class Resources {
    private static resourceCache: IResourceCache = {};
    private static constants: IResourceConstants = {
        images: {
            stone:  'images/stone-block.png',
            water:  'images/water-block.png',
            grass:  'images/grass-block.png',
            enemy:  'images/enemy-bug.png',
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
    }

    constructor() { }

    static getConstants(): IResourceConstants {
        return Resources.constants;
    }

    static getFromCache(url: string): HTMLImageElement {
        return Resources.resourceCache[url];
    }

    static async fillResourceCache(images: Array<string>): Promise<void> {
        for (const imageUrl of images) {
            const img = new Image();
            img.src = imageUrl;
            await Resources.loadImage(img);
            Resources.resourceCache[imageUrl] = img;
        }
        return;
    }

    static async loadImage(img: HTMLImageElement): Promise<HTMLImageElement>{
        return new Promise<HTMLImageElement>((res, rej) =>{
            img.onload = () => {
                res(img);
            }
        })
    }

}
