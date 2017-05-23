function insertionSort(unsortedList) {
    let len = unsortedList.length;
    let j;
    for (let i = 1; i < len; i++) {
        let tmp = unsortedList[i];

        for (j = i - 1; j >= 0 && (unsortedList[j] > tmp); j--) {

            unsortedList[j + 1] = unsortedList[j];
        }
        unsortedList[j + 1] = tmp;
    }
    return unsortedList;
}

insertionSort(randomArray(100, 50, 355));
