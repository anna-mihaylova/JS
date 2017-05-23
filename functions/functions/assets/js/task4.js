
let functionsTask4 = (function () {
    const task = "Task 4";
    const problem = `Да се състави функция, която приема два параметъра, които
                     са от тип Number и връща random число между стойностите на
                     двата параметъра. Добавете валидация за типа на двата параметъра
                     и първия параметър винаги да е по-малък от втория.`;

    function randomFunction(num1, num2){
        let argumentLength = 2;
        let arg = [].slice.call(arguments);

        if (arguments.length != argumentLength){
            result = 'The function must be called with 2 parameters.';

            return result;
        } else{

            for (var i = 0; i < argumentLength; i++) {
                let random = 0;

                if(typeof arguments[i] !== 'number' || arguments[i] !== arguments[i] || arguments[i] == Number.POSITIVE_INFINITY || arguments[i] == Number.NEGATIVE_INFINITY){
                    result = 'The function must be called with 2 parameters of type numbers.';

                    return result;
                }
                if(arguments[0] > arguments[1] ){
                    result = 'First parameter must be smaller than second parameter';

                    return result;

                } else {
                //Returns a random integer between min (included) and max (included)
                random = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;

                }
                result = `Function was called with ${arg} parameters. Random number between ${num1} and ${num2} is ${random}.`;

                return result;
            }
        }
    }

    let resultRandomFunction = randomFunction(3, 6);

    document.write(`<div><div class="background"><h3>${task}</h3><p class="problem">${problem}</p></div><p>${resultRandomFunction}</p></div>`);

    return {
        randomFunction
       };

})();
