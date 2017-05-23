function binaryVectors(n, vector = '') {

    if (n === 0) {
        console.log(vector)
        return;
    }

    binaryVectors(n - 1, vector + '0');
    binaryVectors(n - 1, vector + '1');
}
