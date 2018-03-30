import * as crypto from 'crypto';
import { IHashFunction } from '../interfaces/hash-function';

export class MD5 implements IHashFunction {

    public hash(str: string): string {
        const generator = crypto.createHash('md5');

        generator.update(str);

        return generator.digest('hex');
    }

}
