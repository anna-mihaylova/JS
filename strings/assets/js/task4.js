
let stringsTask4 =(function () {
    const task = "Task 4";
    const problem = `Да се направи регулярен израз, който да валидира мобилен номер.`;

    const phoneNumber1 = '+359895602202';
    const phoneNumber2 = '00359895602202';
    const phoneNumber3 = '0895602202';
    const phoneNumber4 = '0895 602 202';
    const phoneNumber5 = '0895-602-202';
    const phoneNumber6 = '0892602202';
    const phoneNumber7 = '0893602202';
    const phoneNumber8 = '0894602202';
    const phoneNumber9 = '0895602202';
    const phoneNumber10 = '0896602202';
    const phoneNumber11 = '0897602202';
    const phoneNumber12 = '0898602202';
    const phoneNumber13 = '0899602202';
    const phoneNumber14 = '0988602202';
    const phoneNumber15 = '0889602202';
    const phoneNumber16 = '0888602202';
    const phoneNumber17 = '0887602202';
    const phoneNumber18 = '0886602202';
    const phoneNumber19 = '0885602202';
    const phoneNumber20 = '0884602202';
    const phoneNumber21 = '0883602202';
    const phoneNumber22 = '0882602202';
    const phoneNumber23 = '0879602202';
    const phoneNumber24 = '0878602202';
    const phoneNumber25 = '0877602202';
    const phoneNumber26 = '0876602202';
    const phoneNumber27 = '8888888888';
    const phoneNumber28 = '087660220';
    const phoneNumber29 = '08766022024';
    const phoneNumber30 = 'invalid nomer';

    const arr = [phoneNumber1, phoneNumber2, phoneNumber3, phoneNumber4, phoneNumber5,
                phoneNumber6, phoneNumber7, phoneNumber8, phoneNumber9, phoneNumber10,
                phoneNumber11, phoneNumber12, phoneNumber13, phoneNumber14, phoneNumber15,
                phoneNumber16, phoneNumber17, phoneNumber18, phoneNumber19, phoneNumber20,
                phoneNumber21, phoneNumber22, phoneNumber23, phoneNumber24, phoneNumber25,
                phoneNumber26, phoneNumber27, phoneNumber28, phoneNumber29, phoneNumber30];

    function validateMobileNumberOfArray(array){
        let result = [];

        for (let variable of array) {
            result.push('<br/>' + validateMobileNumber(variable));

        }
        return result;
    }

    function validateMobileNumber(mobileNumber){
        let regexpObj = /(^\+{1}|[0]{2}|359|0)(8|9){1}[789]{1}[2-9]{1}([ .-]?)([0-9]{3})([ .-]?)([0-9]{3})$/;
        let result = `${mobileNumber} is invalid mobile number`;

        if (regexpObj.test(mobileNumber)){
            result = `${mobileNumber} is valid mobile number`;

        }
        return result;
    }

    let resultValidateMobileNumberOfArray = validateMobileNumberOfArray(arr);

    document.write(`<div><div class="background"><h3>${task}</h3><p class="problem">${problem}</p></div><p>${resultValidateMobileNumberOfArray}</p></div>`);

    return {
        validateMobileNumberOfArray,
        validateMobileNumber
       };

})();
