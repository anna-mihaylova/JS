
let arrayWithFalsyVal = [1, NaN, 7, null, 9, '', 6, 8,  false, 0, 9, 5, 8, undefined, 6];

let arraysTask4 = (function (arr) {
    const task = "Task 4";
    const problem = `Напишете скрипт който да трие елементите от масив, които са 'null', '0', '""', 'false', 'undefined' and 'NaN'.`;

    let _arr = arr;
    let firstarr = arr.slice(0);

    function deleteFalsyVal(_arr){
        let result;

        if (!Array.isArray(_arr)){
            result = 'Argument is not array.';

            return result;
        }
        if (_arr.length < 1){
            result = 'Array is empty.';

            return result;

        } else{

            // for(let i = 0; i < _arr.length; i++){
            for(let i = _arr.length; i >= 0; i--) {
                if ((!_arr[i]) || _arr[i] !== _arr[i]){
                     _arr.splice(i, 1);
                    //  i--;
                }
            }
            return _arr;
        }
    }

    let resultdeleteFalsyVal = deleteFalsyVal(_arr);

    document.write(`<div><div class="background"><h3>${task}</h3><p class="problem">${problem}</p></div><p>Array: ${firstarr}.</p><p>Array after delete falsy function: ${resultdeleteFalsyVal}.</p></div>`);

    return {
        deleteFalsyVal
        };

})(arrayWithFalsyVal);
