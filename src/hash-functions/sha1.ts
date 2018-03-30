import * as crypto from 'crypto';
import { IHashFunction } from '../interfaces/hash-function';

export class SHA1 implements IHashFunction {

    public hash(str: string): string {
        const generator = crypto.createHash('sha1');

        generator.update(str);

        return generator.digest('hex');
    }

}
