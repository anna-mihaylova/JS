const maxNumberOfArray = function(arr) {
    let max = arr.reduce(function(a, b) {
        return Math.max(a, b);
    });
    return max;
}

const countingSort = function(arr) {
    let count = [];
    let z = 0;
    let max = maxNumberOfArray(arr);

    count.length = max + 1;
    count.fill(0);


    for (let i = 0; i < arr.length; i++) {
        count[arr[i]] += 1;
    }


    for (let i = 0; i <= count.length; i++) {
        while (count[i] > 0) {
            arr[z++] = i;
            count[i]--;
        }
    }

    return arr;
}

countingSort(randomArray(100, 50, 355));
