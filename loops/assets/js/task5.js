(function () {
    const task = "Task 5";
    const problem = `Да се състави скрипт, който изчита пропъртитата на дадения
                    обект и извежда в конзолата (console.log) само тези, стойностите
                    на които са числа. Даденият обект е:
                    let obj = {
                        firstName: “Ivan”,
                        lastName: “Ivanov”,
                        age: 25,
                        student: true,
                        zipCode: 12345,
                        studentId: “123456789ID”
                    }`;

    const obj = {
            firstName: "Ivan",
            lastName: "Ivanov",
            age: 25,
            student: true,
            zipCode: 12345,
            studentId: "123456789ID"
        };

    function numberProperties(object){
        let objectProp = "The object properties with number values are: ";
        for (let variable in object) {
            if (typeof object[variable] === "number" && !Number.isNaN(obj[variable]) && object[variable] !== "infinity") {
                console.log(object[variable]);
                objectProp += object[variable] + ", ";
            }
        }
        return objectProp;
    }

    let result = numberProperties(obj);

    document.write(`<div><div class="background"><h3>${task}</h3><p class="problem">${problem}</p></div><p>${result}</p></div>`);
})();
