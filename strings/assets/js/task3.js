
let stringsTask3 = (function () {
    const task = "Task 3";
    const problem = `3. Даден Ви е едномерен масив с числа. Да се напише скрипт, който намира първите 3 елемента от масива,
                        сумата от които е равна на числото 144?`;

   const arr = [1, 6, 3, 5, 234, 678, 34, 88, 72, 43, 13, 1, 5, 18, 56, 57, 11, 42, 38, 54];
   const sum = 144;

    function firsTreeConsistentElements(array, sumOf){
        let lengh = array.length;
        let sum = 0;
        let result = `In this array there are no such consistent elements with sum:${sumOf}`;

        for (let i = 1; i < lengh - 1; i++){

            if((typeof array[i - 1] !== 'number' || arguments[i] !== arguments[i] || arguments[i] == Number.POSITIVE_INFINITY || arguments[i] == Number.NEGATIVE_INFINITY)
                && (typeof array[i] !== 'number' || arguments[i] !== arguments[i] || arguments[i] == Number.POSITIVE_INFINITY || arguments[i] == Number.NEGATIVE_INFINITY)
                    && (typeof array[i + 1] !== 'number' || arguments[i] !== arguments[i] || arguments[i] == Number.POSITIVE_INFINITY || arguments[i] == Number.NEGATIVE_INFINITY)){
                continue;
            }
            sum = (array[i] + array[i - 1] + array[i + 1]);

            if (sum == sumOf){
                result = `Sum of the element is ${sum}. The elements are ${array[i - 1]} with index: ${i - 1}, ${array[i]} with index: ${i}, ${array[i + 1]} with index: ${i + 1}`;

                return result;
                }
                return result;
            }
        }

        function firsTreeElements(array, sumOf){
            let lengh = array.length;
            let sum = 0;
            let result = `In this array there are no such elements with sum:{$sumOf}`;

            for (let i = 0; i < array.length - 2; i++){
                for (let k = i + 1; k < array.length - 1; k++){
                    for (let m = k + 1; m < array.length; m++){

                        if((typeof array[i] !== 'number' || arguments[i] !== arguments[i] || arguments[i] == Number.POSITIVE_INFINITY || arguments[i] == Number.NEGATIVE_INFINITY)
                            && (typeof array[k] !== 'number' || arguments[i] !== arguments[i] || arguments[i] == Number.POSITIVE_INFINITY || arguments[i] == Number.NEGATIVE_INFINITY)
                                && (typeof array[m] !== 'number' || arguments[i] !== arguments[i] || arguments[i] == Number.POSITIVE_INFINITY || arguments[i] == Number.NEGATIVE_INFINITY)){
                            continue;
                        }
                        sum = (array[i] + array[k] + array[m]);

                        if (sum == sumOf){
                            result = `Sum of the element is ${sum}. The elements are ${array[i]} with index: ${i}, ${array[k]} with index: ${k}, ${array[m]} with index: ${m}`;

                            return result;
                        }
                    }
                }
            }
            return result;
        }

    resultFirsTreeElements= `Function first tree elements. Array is ${arr}. <br/> ${firsTreeElements(arr, sum)}`;

    resultFirsTreeConsistentElements = `Function first tree consistent elements. Array is ${arr}. <br/> ${firsTreeConsistentElements(arr, sum)}`;

    document.write(`<div><div class="background"><h3>${task}</h3><p class="problem">${problem}</p></div><p>${resultFirsTreeElements}</p><p>${resultFirsTreeConsistentElements}</p></div>`);

    return {
        firsTreeConsistentElements,
        firsTreeElements
       };
       
})();
