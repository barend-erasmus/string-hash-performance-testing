import { IHashFunction } from '../interfaces/hash-function';

export class PJW implements IHashFunction {

    public hash(str: string): string {
        let h: number = 0;

        for (let i = 0, l = str.length; i < l; i++) {
            h = (h << 4) + str.charCodeAt(i);
        }

        return h.toString(16);
    }

}
