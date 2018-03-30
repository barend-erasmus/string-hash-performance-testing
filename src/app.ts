import * as fs from 'fs';
import * as moment from 'moment';
import { AlphaNumericCounter } from './alpha-numeric-counter';
import { DJBD2 } from './hash-functions/djb2';
import { FNV1A } from './hash-functions/fnv1a';
import { MD4 } from './hash-functions/md4';
import { MD5 } from './hash-functions/md5';
import { PJW } from './hash-functions/pjw';
import { RS } from './hash-functions/rs';
import { SDBM } from './hash-functions/sdbm';
import { SHA1 } from './hash-functions/sha1';
import { SHA256 } from './hash-functions/sha256';
import { SHA512 } from './hash-functions/sha512';
import { HashResult } from './hash-result';
import { IHashFunction } from './interfaces/hash-function';

const logFileName: string = `string-hash-performance-testing-${moment().format('YYYY-DD-MM-HH-mm-ss')}.csv`;

const numberOfIntervals = 25;
const numberOfStrs = 1 * 1000 * 1000;

console.log('-- Building list of strings --');

const alphaNumericCounter: AlphaNumericCounter = new AlphaNumericCounter('aaaaaaaa');

const strs: string[] = [];

for (let count = 0; count < numberOfStrs; count++) {
    strs.push(alphaNumericCounter.incrementBy(1));
}

console.log('-- Configuring hash functions --');

const hashFunctions = {
    DJBD2,
    FNV1A,
    MD4,
    MD5,
    PJW,
    RS,
    SDBM,
    SHA1,
    SHA256,
    SHA512,
};

fs.appendFileSync(logFileName, `Range;Range(/10000);${Object.keys(hashFunctions).join(';')}\r\n`);

console.log('-- Performance Testing --');

for (let interval = 1; interval < numberOfIntervals + 1; interval++) {
    const range: number = Math.floor(numberOfStrs / numberOfIntervals * interval);
    console.log(`   -- Range ${range} --`);

    const hashResults: HashResult[] = [];

    for (const hashFunctionKey of Object.keys(hashFunctions)) {
        const hashFunction: IHashFunction = new hashFunctions[hashFunctionKey]();

        const intervalStrs: string[] = strs.slice(0, range);

        const startTimestamp: Date = new Date();

        for (const str of intervalStrs) {
            const hash = hashFunction.hash(str);
        }

        const endTimestamp: Date = new Date();

        hashResults.push(new HashResult(hashFunctionKey, endTimestamp.getTime() - startTimestamp.getTime()));
    }

    fs.appendFileSync(logFileName, `${range};${range / 10000};${hashResults.map((hashResult: HashResult) => hashResult.timeTakenInMiliseconds).join(';')}\r\n`);

}
