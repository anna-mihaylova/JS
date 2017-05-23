function binarySearch(array, key) {
    let startIndex = 0,
        endIndex = array.length - 1,
        middle,
        element;
    while (startIndex <= endIndex) {
        middle = Math.floor((startIndex + endIndex) / 2, 10);
        element = array[middle];
        if (element < key) {
            startIndex = middle + 1;
        } else if (element > key) {
            endIndex = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}
