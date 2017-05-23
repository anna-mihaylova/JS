
let functionsTask3 = (function () {
    const task = "Task 3";
    const problem = `Да се състави функция, която приема N на брой параметри и
                    сумира тези от тях, които са от тип Number и връща сумата
                    като резултат от функцията.`;

    function sumNumbers(){
        let arg = [].slice.call(arguments);
        let sum = 0;
        let numericArg = [];

        if (arguments.length < 1){
            result = 'The function was called without parameters.';

            return result;

        } else{

            for (var i = 0; i < arguments.length; i++) {
                if(typeof arguments[i] !== 'number' || arguments[i] !== arguments[i] || arguments[i] == Number.POSITIVE_INFINITY || arguments[i] == Number.NEGATIVE_INFINITY){
                    continue;

                } else {

                    sum += arguments[i];
                    numericArg.push(arguments[i]);
                }
            }
            result = `Function was called with ${arg} parameters. Parameters of type number are: ${numericArg} and their sum is ${sum}`;

            return result;
        }
    }
    
    let resultOfSumNumbers = sumNumbers(4, undefined, null, 8, 9, NaN, 8,'aaaaa', 5, {});

    document.write(`<div><div class="background"><h3>${task}</h3><p class="problem">${problem}</p></div><p>${resultOfSumNumbers}.</p></div>`);

    return {
        sumNumbers
       };

})();
