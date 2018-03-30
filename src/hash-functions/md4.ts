import * as crypto from 'crypto';
import { IHashFunction } from '../interfaces/hash-function';

export class MD4 implements IHashFunction {

    public hash(str: string): string {
        const generator = crypto.createHash('md4');

        generator.update(str);

        return generator.digest('hex');
    }

}
