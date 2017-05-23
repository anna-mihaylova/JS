let fibonacciNumbers = function(n) {
    if (n === 1) {
        return [0, 1];
    } else {
        let numbers = fibonacciNumbers(n - 1);
        numbers.push(numbers[numbers.length - 1] + numbers[numbers.length - 2]);
        return numbers;
    }
};
