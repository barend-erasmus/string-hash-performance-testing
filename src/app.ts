import * as fs from 'fs';
import * as moment from 'moment';
import { AlphaNumericCounter } from './alpha-numeric-counter';
import { ColorHelper } from './color-helper';
import { CustomSVGElement } from './custom-svg-element';
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

// console.log('-- Performance Testing --');

// const performanceLogFileName: string = `string-hash-performance-testing-${moment().format('YYYY-DD-MM-HH-mm-ss')}.csv`;

// fs.appendFileSync(performanceLogFileName, `Range;Range(/10000);${Object.keys(hashFunctions).join(';')}\r\n`);

// for (let interval = 1; interval < numberOfIntervals + 1; interval++) {
//     const range: number = Math.floor(numberOfStrs / numberOfIntervals * interval);
//     console.log(`   -- Range ${range} --`);

//     const hashResults: HashResult[] = [];

//     for (const hashFunctionKey of Object.keys(hashFunctions)) {
//         const hashFunction: IHashFunction = new hashFunctions[hashFunctionKey]();

//         const intervalStrs: string[] = strs.slice(0, range);

//         const startTimestamp: Date = new Date();

//         for (const str of intervalStrs) {
//             const hash = hashFunction.hash(str);
//         }

//         const endTimestamp: Date = new Date();

//         hashResults.push(new HashResult(hashFunctionKey, endTimestamp.getTime() - startTimestamp.getTime()));
//     }

//     fs.appendFileSync(performanceLogFileName, `${range};${range / 10000};${hashResults.map((hashResult: HashResult) => hashResult.timeTakenInMiliseconds).join(';')}\r\n`);

// }

console.log('-- Randomness Testing --');

for (const hashFunctionKey of Object.keys(hashFunctions)) {
    const hashFunction: IHashFunction = new hashFunctions[hashFunctionKey]();

    const result: number[] = [];

    for (let index = 0; index < 100 * 100; index++) {
        result.push(0);
    }

    for (const str of strs) {
        const hash = hashFunction.hash(str);

        const decimalHash: number = parseInt(hash, 16);
        const index: number = decimalHash % result.length;

        result[index] += 1;
    }

    const customSvgElement: CustomSVGElement = CustomSVGElement.create('svg');

    const rectangleSize: number = 10;

    customSvgElement
        .attr('height', rectangleSize * Math.sqrt(result.length))
        .attr('width', rectangleSize * Math.sqrt(result.length))
        .style('background', 'white');

    let x: number = 0;
    let y: number = 0;

    const resultMaximum: number = result.reduce((a: number, b: number) => {
        return Math.max(a, b);
    });

    for (const n of result) {

        customSvgElement
            .append('rect')
            .attr('height', rectangleSize)
            .attr('width', rectangleSize)
            .attr('x', x * rectangleSize)
            .attr('y', y * rectangleSize)
            .style('fill', ColorHelper.getGradientColor([255, 255, 255], [0, 0, 0], n / resultMaximum));

        x++;

        if (x >= Math.sqrt(result.length)) {
            x = 0;
            y++;
        }
    }

    fs.writeFileSync(`randomness-images/${hashFunctionKey}.svg`, customSvgElement.toString(), 'utf8');
}
