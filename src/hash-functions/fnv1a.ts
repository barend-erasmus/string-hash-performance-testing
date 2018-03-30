import { IHashFunction } from '../interfaces/hash-function';

export class FNV1A implements IHashFunction {

    public hash(str: string): string {
        let h: number = 0x811c9dc5;

        for (let i = 0, l = str.length; i < l; i++) {
            h ^= str.charCodeAt(i);
            h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24);
        }

        return h.toString(16);
    }

}
