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

## Randomness Testing

### DJBD2

![](https://github.com/barend-erasmus/string-hash-performance-testing/raw/master/randomness-images/DJBD2.png)

### FNV1A

![](https://github.com/barend-erasmus/string-hash-performance-testing/raw/master/randomness-images/FNV1A.png)

### MD4

![](https://github.com/barend-erasmus/string-hash-performance-testing/raw/master/randomness-images/MD4.png)

### MD5

![](https://github.com/barend-erasmus/string-hash-performance-testing/raw/master/randomness-images/MD5.png)

### PJW

![](https://github.com/barend-erasmus/string-hash-performance-testing/raw/master/randomness-images/PJW.png)

### RS

![](https://github.com/barend-erasmus/string-hash-performance-testing/raw/master/randomness-images/RS.png)

### SDBM

![](https://github.com/barend-erasmus/string-hash-performance-testing/raw/master/randomness-images/SDBM.png)

### SHA1

![](https://github.com/barend-erasmus/string-hash-performance-testing/raw/master/randomness-images/SHA1.png)

### SHA256

![](https://github.com/barend-erasmus/string-hash-performance-testing/raw/master/randomness-images/SHA256.png)

### SHA512

![](https://github.com/barend-erasmus/string-hash-performance-testing/raw/master/randomness-images/SHA512.png)
