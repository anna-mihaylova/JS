let arrayWithFalsyValues = [1, NaN, 7, null, 9, '', false, 0, 8, undefined, 6];

let functionsTask1 = (function (arr) {
    let _arr = arr;
    let firstarr = arr.slice(0);
    const task = "Task 1";
    const problem = `Да се състави функция, която приема като параметър масив,
                    извърта всички елементи на масива и трие/чисти всички елементи,
                    които имат "falsy" стойности.`;

    function deleteFalsyValuesOfArray(_arr){
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

    let resultArray = deleteFalsyValuesOfArray(_arr);

    document.write(`<h1>Functions Homework</h1><div><div class="background"><h3>${task}</h3><p class="problem">${problem}</p></div><p>Array: ${firstarr}.</p><p>Array after delete falsy function: ${resultArray}.</p></div>`);

    return {
        deleteFalsyValuesOfArray
        };

})(arrayWithFalsyValues);
