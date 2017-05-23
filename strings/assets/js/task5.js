
let stringsTask5 =(function () {
    const task = "Task 5";
    const problem = `Да се направи регулярен израз, който да валидира email.`;
    
    const emailAdress1 = 'prettyandsimple@example.com';
    const emailAdress2 = 'very.common@example.com';
    const emailAdress3 = 'disposable.style.email.with+symbol@example.com';
    const emailAdress4 = 'other.email-with-dash@example.com';
    const emailAdress5 = 'x@example.com';
    const emailAdress6 = '"much.more unusual"@example.com';
    const emailAdress7 = '"very.unusual.@.unusual.com"@example.com';
    const emailAdress8 = '"very.(),:;<>[]\".VERY.\"very@\\ \"very\".unusual"@strange.example.com';
    const emailAdress9 = 'example-indeed@strange-example.com';
    const emailAdress10 = 'admin@mailserver1 (local domain name with no TLD)';
    const emailAdress11 = "#!$%&'*+-/=?^_`{}|~@example.org";
    const emailAdress12 = '" "@example.org';
    const emailAdress13 = 'example@localhost';
    const emailAdress14 = 'example@s.solutions';
    const emailAdress15 = 'user@localserver';
    const emailAdress16 = 'user@tt';
    const emailAdress17 = 'user@[IPv6:2001:DB8::1]';
    const emailAdress18 = 'Abc.example.com';
    const emailAdress19 = 'A@b@c@example.com';
    const emailAdress20 = 'a"b(c)d,e:f;g<h>i[j\k]l@example.com';
    const emailAdress21 = 'john.doe@example..com';
    const emailAdress22 = 'john..doe@example.com';
    const emailAdress23 = '1234567890123456789012345678901234567890123456789012345678901234+x@example.com';
    const emailAdress24 = 'this\ still\"not\\allowed@example.com';
    const emailAdress25 = 'this is"not\allowed@example.com';
    const emailAdress26 = 'just"not"right@example.com';
    const emailAdress27 = '7890-4g5gthy';
    const emailAdress28 = '33333333333';
    const emailAdress29 = 'v u ui iiii kiki';
    const emailAdress30 = 'invalid email';

    const arr = [emailAdress1, emailAdress2, emailAdress3, emailAdress4, emailAdress5,
                emailAdress6, emailAdress7, emailAdress8, emailAdress9, emailAdress10,
                emailAdress11, emailAdress12, emailAdress13, emailAdress14, emailAdress15,
                emailAdress16, emailAdress17, emailAdress18, emailAdress19, emailAdress20,
                emailAdress21, emailAdress22, emailAdress23, emailAdress24, emailAdress25,
                emailAdress26, emailAdress27, emailAdress28, emailAdress29, emailAdress30];

    function validateEmailAdressOfArray(array){
        let result = [];

        for (let variable of array) {
            result.push('<br/>' + validateEmailAdress(variable));

        }
        return result;
    }

    function validateEmailAdress(emailAdress){
        let regexpObj = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/g;
        let result = `${emailAdress} is invalid email adress`;

        if (regexpObj.test(emailAdress)){
            result = `${emailAdress} is valid email adress`;

        }
        return result;
    }

    let resultValidateEmailAdressOfArray = validateEmailAdressOfArray(arr);

    document.write(`<div><div class="background"><h3>${task}</h3><p class="problem">${problem}</p></div><p>${resultValidateEmailAdressOfArray}</p></div>`);

    return {
        validateEmailAdressOfArray,
        validateEmailAdress
       };

})();
