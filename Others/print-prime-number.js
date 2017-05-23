function printPrimeNumbers(value) {
    let primes = [];

    for(let i = 2; i < value; i++) {
        primes[i] = true;
    }

    let limit = Math.sqrt(value);

    for(let i = 2; i < limit; i++) {
        if(primes[i] === true) {
            for(let j = i * i; j < value; j += i) {
                primes[j] = false;
            }
        }
    }

    for(let i = 2; i < value; i++) {
        if(primes[i] === true) {
            console.log(i + " " + primes[i]);
        }
    }
}
