let recursive = function(n) {
    if(n <= 2) {
        return 1;
    } else {
        return recursive(n - 1) + recursive(n - 2);
    }
};
