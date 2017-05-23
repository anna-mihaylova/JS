(function () {
    const task = "Task 1";
    const problem = `Да се състави скрипт, който да намери броят цифри, тяхната сума,
                   произведението и средната им стойност. Числото е 3456789.`;

    const number = 3456789;
    const ten = 10;

    let zero = 0;
    let one = 1;

    function solutionWithString(num){
        let product = one;
        let sum = zero;
        let count = zero;
        let average = zero;
        num += "";

        for (let i = zero, leng = num.length; i < leng; i++) {
            let number = (+ num[i]);
            count ++;
            sum += number;
            product *= number;
        }
        average = Math.floor(sum / count);

        let result = `Solution with string:
                      <br>The number is ${num}.The count is ${count}.The product is ${product}.
                      The average is ${average}. The sum is ${sum}.`;

        return result;
    }

    function solutionWithoutString(num){
        let number = num;
        let product = one;
        let sum = zero;
        let count = zero;
        let average = zero;

        while (num) {
            let number = num % ten;
            sum += number;
            product *= number;
            count++;
            num = num/ten | zero;
        }

        average = Math.floor(sum / count);

        let result = `Solution without string:
                     <br>The number is ${number}.The count is ${count}.The product is ${product}.
                      The average is ${average}. The sum is ${sum}.`;

        return result;
    }
    let resultWithString = solutionWithString(number);
    let resultWithoutString = solutionWithoutString(number);

    document.write(`<h1>Loops Homework</h1><div><div class="background"><h3>${task}</h3><p class="problem">${problem}</p></div><p>${resultWithString}</p><p>${resultWithoutString}</p></div>`);
})();
