
(function () {
    const task = "Task 3";
    const problem = `Да се състави скрипт, който изчислява общата сума от естествени
                    числа, всяко от които се дели без остатък на 3, а общата им сума
                    не надминава естественото число 150..`;

    function sumOfNaturalNumber(){
        const maxSum = 150;
        const divider = 3;
        let sum = 0;
        let naturalNumber = 1;

        do {
            if (naturalNumber %3 === 0) {
                sum += naturalNumber;
            }
            naturalNumber++;

        } while ((sum + naturalNumber) <= maxSum);

        return sum;
    }
    let result = `The sum is ${sumOfNaturalNumber()}.`;

    document.write(`<div><div class="background"><h3>${task}</h3><p class="problem">${problem}</p></div><p>${result}</p></div>`);
})();
