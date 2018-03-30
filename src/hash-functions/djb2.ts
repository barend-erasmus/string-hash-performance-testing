import { IHashFunction } from '../interfaces/hash-function';

export class DJBD2 implements IHashFunction {

    public hash(str: string): string {
        let h: number = 0x1505;

        for (let i = 0, l = str.length; i < l; i++) {
            h = ((h << 5) + h) + str.charCodeAt(i);
        }

        return h.toString(16);
    }

}
