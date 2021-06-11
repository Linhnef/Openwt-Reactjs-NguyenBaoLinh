function prime(max) {
    let tmp = [];
    let primes = [];
    for (i = 2; i <= max; ++i) {
        if (!tmp[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                tmp[j] = true;
            }
        }
    }
    return primes;
}

console.log(prime(20));