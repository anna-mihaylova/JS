
const jaggedArray = [11, 3, 46, 57, 88, 9];

let arraysTask2 = (function (arr) {
    const task = "Task 2";
    const problem = `Едномерен масив наричаме назъбен, ако всеки елемент в масива е > от предишния и < от следващия.
                     Напишете скрипт, който проверява дали даден масив от числа е назъбен`;
    let _arr = arr;

    function isJaggedArray(_arr){
        let result = 'The array is jagged.';
        let length = _arr.length;

        if (!Array.isArray(_arr)){
            result = 'Argument is not array.';

            return result;
        }
        if (_arr.length < 1){
            result = 'Array is empty.';

            return result;

        } else{

            for (let i = 0; i < length - 1; i++) {
                if (typeof _arr[i] !== 'number' || _arr[i] !== _arr[i] || _arr[i] == Number.POSITIVE_INFINITY || _arr[i] == Number.NEGATIVE_INFINITY){
                     result = 'The values must be only numeric.';

                     return result;

                } else {
                    if(_arr[i] > _arr[i + 1]){
                        result = `The array is not jagged, because ${_arr[i]} is bigger than ${_arr[i+1]}.`;

                        return result;
                    }
                }
            }
            return result;
        }
    }

    let resultOfIsJaggedArray = isJaggedArray(_arr);

    document.write(`<div><div class="background"><h3>${task}</h3><p class="problem">${problem}</p></div><p>Array: ${jaggedArray.toString()}.</p><p>${resultOfIsJaggedArray}</p></div>`);

    return {
        isJaggedArray
       };

})(jaggedArray);
