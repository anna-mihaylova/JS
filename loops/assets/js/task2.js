
(function () {
    let task = "Task 2";
    let problem = `Да се състави скрипт, който да изведе (console.log) в конзолата квадратите на
                   всички естествени числа в интервала 1-100 по-малки или равни на числото 12.`;

    const numberFrom = 1;
    const numberTo = 100;
    const maxSqare = 12;

    let result = "";

    function maxSquareТwelve(num){

        for(let i = numberFrom; i <= numberTo; i++){
            let square = i**2;
            if(square >= maxSqare){
                break;
            }
            console.log(`The number is ${i}. Square is ${square}.\n`);
            result += `The number is ${i}. Square is ${square}.<br>`;
        }
        return result;
    }
    document.write(`<div><div class="background"><h3>${task}</h3><p class="problem">${problem}</p></div><p>${maxSquareТwelve()}</p></div>`);
})();
