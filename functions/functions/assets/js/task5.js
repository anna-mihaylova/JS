
let functionsTask5 = (function () {
    const task = "Task 5";
    const problem = `Да се състави функция, която приема един параметър, който е
                    масив от числа и връща най-голямото и най-малкото число
                    от тях. `;

    function arrayMinMax(array){
        let argumentLength = 1;
        let arg = [].slice.call(arguments);

        if (arguments.length != argumentLength){
            result = 'The function must be called with 1 parameter.';

            return result;
        }
        if (!Array.isArray(arguments[0])){
            result = 'Argument is not array.';

            return result;

        } else{
                result = `Function was called with ${arg} parameters. Max number is ${maxNumber(array)} and min number is ${minNumber(array)}.`;

                return result;
        }

    }
    function maxNumber(array){
        let maxNumber = array[0];
        //let maxNumber = Number.NEGATIVE_INFINITY;

        for (let variable of array) {
            if(maxNumber < variable){
                maxNumber = variable;
            }
        }
        return maxNumber;
    }
    function minNumber(array){
        let minNumber = array[0];
        //let maxNumber = Number.POSITIVE_INFINITY;

        for (let variable of array) {
            if(minNumber > variable){
                minNumber = variable;
            }
        }
        return minNumber;
    }

    let resultarrayMinMax = arrayMinMax([2, 4,5777777777777,6,77,8,8,8,88888,1]);

    document.write(`<div><div class="background"><h3>${task}</h3><p class="problem">${problem}</p></div><p>${resultarrayMinMax}</p></div>`);

    return {
        arrayMinMax
       };
       
})();
