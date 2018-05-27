
interface IResourceCache {
    [url: string]: HTMLImageElement;
}

export class Resources {
    private resourceCache: IResourceCache;

    constructor() {
        this.resourceCache = {};
    }

    getFromCache(url: string): HTMLImageElement {
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
