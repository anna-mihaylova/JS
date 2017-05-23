
let stringsTask6 =(function () {
    const task = "Task 6";
    const problem = `Да се направи регулярен израз, който да валидира URL`;
    
    const url1 = 'http://google.com';
    const url2 = 'http://www.google.com';
    const url3 = 'https://google.com';
    const url4 = 'https://www.google.com';
    const url5 = 'www.google.com';
    const url6 = 'http://useridexample.com:8080';
    const url7 = `http://foo.com/(something)?after=parens`;
    const url8 = '7890-4g5gthy';
    const url9 = '33333333333';
    const url10 = 'invalid email';

    const arr = [url1, url2, url3, url4, url5,
                url6, url7, url8, url9, url10];

    function validateUrlOfArray(array){
        let result = [];

        for (let variable of array) {
            result.push('<br/>' + validateUrlAdress(variable));

        }
        return result;
    }
    function validateUrlAdress(url){
        let regexpObj = /^((https?|ftp|file):\/{2})?(mailto:)?([w]{3}.)?([a-z0-9\+\.\-]{2,25})([.]{1})([a-z]{2,10})(([:][0-9]{1,4}(\/[a-z\/]{2,15})?)(\?[a-z0-9\&]{5,10}=[a-z0-9]{5,10})?)?/;
        let result = `${url} is invalid URL adress`;

        if (regexpObj.test(url)){
            result = `${url} is valid URL adress`;

        }
        return result;
    }

    let resultValidateUrlAdressOfArray = validateUrlOfArray(arr);

    document.write(`<div><div class="background"><h3>${task}</h3><p class="problem">${problem}</p></div><p>${resultValidateUrlAdressOfArray}</p></div>`);

    return {
        validateUrlOfArray,
        validateUrlAdress
       };

})();
