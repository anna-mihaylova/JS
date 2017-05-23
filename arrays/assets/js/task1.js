const array = [1, 5, 6, 5, -9, 7];

let arraysTask1 = (function (arr) {
    const task = "Task 1";
    const problem = `Напишете скрипт, който проверява дали в масив от цели
                    числа всички числа са НЕОТРИЦАТЕЛНИ.`;
    let array = arr;

    function searchForNegativeInteger(array){
        let result = 'In this array has only positive integer.';
        let count = 0;
        let zero = 0;

        if (!Array.isArray(array)){
            result = 'Argument is not array.';

            return result;
        }
        if (array.length < 1){
            result = 'Array is empty.';

            return result;
        } else{

            for (let value of array) {
                if (typeof value !== 'number' || value !== value || value == Number.POSITIVE_INFINITY || value == Number.NEGATIVE_INFINITY){
                     result = 'The values must be only numeric.';

                     return result;

                } else {
                    if(value < zero){
                        count++;
                        result = `In this array has ${count} negative integer.`
                    }
                }
            }
            return result;
        }
    }

    function searchForNegativeIntegerWithMethod(array){
        let result = 'In this array has only positive integer.';
        let count = 0;
        let zero = 0;

        if (!Array.isArray(array)){
            result = 'Argument is not array.';

            return result;
        }
        if (array.length < 1){
            result = 'Array is empty.';

            return result;

        } else{
            for (let value of array) {
                if (typeof value !== 'number' || value !== value || value == Number.POSITIVE_INFINITY || value == Number.NEGATIVE_INFINITY){
                    result = 'The values must be only numeric.';

                    return result;

                } else{

                    if(Math.sign(value) === -1){
                        count++;
                        result = `In this array have ${count} negative integer.`
                    }
                }
            }
            return result;
        }
    }
    let resultWithoutMethod = searchForNegativeInteger(array);
    let resultWithMethod = searchForNegativeIntegerWithMethod(array);

    document.write(`<h1>Loops Homework</h1><div><div class="background"><h3>${task}</h3><p class="problem">${problem}</p></div><p>Array: ${array.toString()}.</p><p>${resultWithoutMethod}</p><p>${resultWithMethod}</p></div>`);

    return {
        searchForNegativeInteger,
        searchForNegativeIntegerWithMethod
        };
        
})(array);
