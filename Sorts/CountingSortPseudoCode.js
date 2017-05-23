function countingSort(array, min, max):
    count: array of (max - min + 1) elements
    initialize count with 0
    for each number in array do
        count[number - min] := count[number - min] + 1
    done
    z := 0
    for i from min to max do
        while ( count[i - min] > 0 ) do
            array[z] := i
            z := z+1
            count[i - min] := count[i - min] - 1
        done
    done
