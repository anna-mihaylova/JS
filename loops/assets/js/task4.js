
(function () {
    const task = "Task 4";
    const problem = `Да се състави скрипт, който прочита цялото число 12345768997
                    и извежда огледалното му. `;

    const number = 12345768997;
    const ten = 10;

    let zero = 0;

    function mirrorNumber(num){
        let newNumber = 0;

        while (num) {
            let number = num % ten;
            newNumber = newNumber * 10 + number;
            num = num/ten | zero;
        }
        return newNumber;
    }

    let resultMirrorNumber = `The number is : ${number}. Mirror number is ${mirrorNumber(number)}.`;

    document.write(`<div><div class="background"><h3>${task}</h3><p class="problem">${problem}</p></div><p>${resultMirrorNumber}</p></div>`);
})();
