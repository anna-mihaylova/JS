let fibonaccii = function(n) {
    let a = 0, b = 1, f = 1;
    if(n === 0) {
        return 0;
    }
    for(let i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
};
