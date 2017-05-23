let arrTask2 = [
     {
       "id": "37ad3865-ccce-48c0-ab78-ec16b5968f58",
       "age": 31,
       "firstName": "Elise",

   "lastName": "Levine",
       "gender": "female",
       "email": "eliselevine@kangle.com",
       "address": "287 King Street, Northchase, Nebraska, 1467"
     },
     {
       "id": "fc78e8af-c560-42bd-8a50-0bb73e241025",
       "age": 55,
       "firstName": "Williams",
       "lastName": "Welch",
       "gender": "male",

       	"email": "williamswelch@kangle.com",
       "address": "948 Wolcott Street, Wauhillau, Wisconsin, 2206"
     },
     {
       "id": "501ea83a-1136-4f68-960c-913c722f2fb3",
       "age": 19,
       "firstName": "Maritza",
       "lastName": "Irwin",
       "gender": "female",
       "email": "maritzairwin@kangle.com",
       "address": "995 Dearborn Court, Homestead, Florida, 9076"
     },
     {
       "id": "e9f027ec-f71c-42f4-8a52-0b7e3bee6703",
       "age": 55,
       "firstName": "Daisy",
       "lastName": "Saunders",
       "gender": "female",
       "email": "daisysaunders@kangle.com",
       "address": "570 Hillel Place, Morgandale, Rhode Island, 8402"
     },
     {
       "id": "89e6c19a-2084-4da3-9230-17ed9bf5ba0a",
       "age": 44,
       "firstName": "Ford",
       "lastName": "Berger",
       "gender": "male",
       "email": "fordberger@kangle.com",
       "address": "491 Village Court, Independence, Tennessee, 4521"
     },
     {
       "id": "51c28188-94ab-49f8-b917-d64eded69859",
       "age": 53,
       "firstName": "Muriel",
       "lastName": "Morse",
       "gender": "female",
       "email": "murielmorse@kangle.com",
       "address": "527 Stratford Road, Corinne, New Mexico, 3733"
     },
     {
       "id": "60e6c4af-baeb-478c-bf3c-085f0b369312",
       "age": 42,
       "firstName": "Doyle",
       "lastName": "Martinez",
       "gender": "male",
       "email": "doylemartinez@kangle.com",
       "address": "330 Kensington Street, Witmer, North Carolina, 9234"
     },
     {
       "id": "d35dca6e-3d27-4445-84a0-33731c89ad57",
       "age": 19,
       "firstName": "Fields",
       "lastName": "Fulton",
       "gender": "male",
       "email": "fieldsfulton@kangle.com",
       "address": "313 Cooke Court, Cataract, Kansas, 130"
     },
     {
       "id": "096589d2-f332-4dd4-95ff-ed0f98c5ce18",
       "age": 55,
       "firstName": "Evelyn",
       "lastName": "Banks",
       "gender": "female",
       "email": "evelynbanks@kangle.com",
       "address": "709 Beach Place, Bethpage, Delaware, 4554"
     },
     {
       "id": "f92e9eaa-300f-4f53-af16-8ba69c73a1dd",
       "age": 47,
       "firstName": "Knowles",
       "lastName": "Davenport",
       "gender": "male",
       "email": "knowlesdavenport@kangle.com",
       "address": "726 Hale Avenue, Veyo, North Dakota, 1041"
     }
];

let pattern = {
    "age": 55
};


let functionsTask2 = (function (arr, pat) {
    const task = "Task 2";
    const problem = ` Да се състави функция, която приема като първи параметър
                      масив от обекти, а като втори обект.Функцията трябва да
                      върне първия обект, който да съдържат пропъртитата на
                      обекта от втория параметър.Ако няма такъв обект, да върне NULL.`;
    let _arr = arr;
    let _pat = pat;

    function where(_arr, _pat) {
        let result = null;

        if (!Array.isArray(_arr)){
            result = 'Argument is not array.';

            return result;
        }
        if (_arr.length < 2){
            result = 'Function must be called with two parameters.';

            return result;

        } else {

            for (let val of _arr) {
               if (check(val, _pat)) {

                    result = JSON.stringify(val);
                    break;
               }
            }
        return result;
        }
    }
    function check(obj1, obj2) {
        let objKeys = Object.keys(obj1);
        let patternKeys = Object.keys(obj2);

        for (let i = 0; i < patternKeys.length; i++) {
            let key = patternKeys[i];

            if (obj2[key] !== obj1[key] || !obj1[key]) {
                return false;
            }
        }

        return true;
    }

    let resultOfWhere = `Array is: <br/>${JSON.stringify(arrTask2)}, <br/>Pattern is:<br/>${JSON.stringify(pattern)}.<br/>Result is: <br/> ${where(_arr, _pat)}.`;

    document.write(`<div><div class="background"><h3>${task}</h3><p class="problem">${problem}</p></div><p>${resultOfWhere}</p></div>`);

    return {
        where
       };

})(arrTask2, pattern);
