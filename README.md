# String Hash Performance Testing

## Cryptographic vs Non-Cryptographic Hash Functions

| Property                    | Cryptographic    | Non-Cryptographic |
| --------------------------- | ---------------- | ----------------- |
| Deterministic               | *                | *                 |
| Uniformity                  | *                | *                 |
| Defined range               | *                | *                 |
| Data normalization          | *                | *                 |
| Continuity                  |                  | *                 |
| Non-invertible              | *                |                   |
| Pre-image resistance        | *                |                   |
| Second pre-image resistance | *                |                   |
| Collision resistant         | *                |                   |

## Performance Testing

**Time taken to hash 1 million strings**

Cryptographic Winner: **MD5**

Non-Cryptographic Winner: **DJBD2** (2.95 times faster than **MD5**)

| Number of Strings | Hash Function | Time Taken in Milliseconds |
| ---------------- | ------------- | --------------------------- |
| 1 000 000        | DJBD2         | 440                         |
| 1 000 000        | FNV1A         | 482                         |
| 1 000 000        | MD4           | 1346                        |
| 1 000 000        | MD5           | 1300                        |
| 1 000 000        | PJW           | 469                         |
| 1 000 000        | RS            | 1318                        |
| 1 000 000        | SDBM          | 448                         |
| 1 000 000        | SHA1          | 1345                        |
| 1 000 000        | SHA256        | 1474                        |
| 1 000 000        | SHA512        | 1618                        |

![](https://github.com/barend-erasmus/string-hash-performance-testing/raw/master/images/hash-functions-chart.png)
