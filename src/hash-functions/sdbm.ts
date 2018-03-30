import { IHashFunction } from '../interfaces/hash-function';

export class SDBM implements IHashFunction {

    public hash(str: string): string {
        let h: number = 0;

        for (let i = 0, l = str.length; i < l; i++) {
            h = str.charCodeAt(i) + (h << 6) + (h << 16) - h;
        }

        return h.toString(16);
    }

}
