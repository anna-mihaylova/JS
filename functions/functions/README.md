Функция

Задача 1:
Да се състави функция, която приема като параметър масив,
   извърта всички елементи на масива и трие/чисти всички елементи, които имат "falsy" стойности.


Задача 2:
Да се състави функция, която приема като първи параметър масив от обекти, а като втори обект.
   
Функцията трябва да върне първия обект, който да съдържат пропъртитата на обекта от втория параметър. 
(_.where(arr, {prop: 123}))
   Ако няма такъв обект, да върне NULL.

let arr = [
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

function where(arr, pattern) {
    let currentObj = null;

    for (let val of arr) {
       if (check(val, pattern)) {
            currentObj = val;
            break;
       }
    }

    return currentObj
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



Задача 3:
Да се състави функция, която приема N на брой параметри и сумира тези от тях, които са от тип Number
   и връща сумата като резултат от функцията.



Задача 4:
Да се състави функция, която приема два параметъра, които са от тип Number и връща random число между
   стойностите на двата параметъра. 
Добавете валидация за типа на двата параметъра и първия параметър винаги да е по-малък от втория.


Задача 5:
Да се състави функция, която приема един параметър, който е масив от числа и връща най-голямото и най-малкото число от тях. 
(Да не се използва Math.max)


Задача 6:
Да се състави функция, която намира най-младият човек със смартфон iPhone и да върне неговия обект
let arr = 
[
  {
    "id": "6f9e8be0-ec85-43cb-ab6b-0a591274363f",
    "age": 60,
    "firstName": "Josefa",
    "lastName": "Clark",
    "gender": "female",
    "smartphone": "iPhone"
  },
  {
    "id": "20749b1f-c8d7-4bb0-81ad-0311b63c22a1",
    "age": 22,
    "firstName": "Meyer",
    "lastName": "Larson",
    "gender": "male",
    "smartphone": "Samsung S6"
  },
  {
    "id": "f0557e6a-4f76-4a2b-9306-8511a7826509",
    "age": 60,
    "firstName": "Margret",
    "lastName": "Cunningham",
    "gender": "female",
    "smartphone": "Blackberry"
  },
  {
    "id": "ebc2e2d9-b5fc-4ab4-8388-59c88991c0b3",
    "age": 46,
    "firstName": "Alba",
    "lastName": "Cote",
    "gender": "female",
    "smartphone": "iPhone"
  },
  {
    "id": "29a303dd-6fcd-49f4-b89a-d4c5de198aec",
    "age": 42,
    "firstName": "Laverne",
    "lastName": "Figueroa",
    "gender": "female",
    "smartphone": "Samsung A5"
  },
  {
    "id": "d532639b-aabd-4443-b273-193dd92bd3df",
    "age": 52,
    "firstName": "Navarro",
    "lastName": "Wilkins",
    "gender": "male",
    "smartphone": "iPhone"
  },
  {
    "id": "1344b416-bd94-48f6-b5d2-f706d141e8a6",
    "age": 42,
    "firstName": "Leigh",
    "lastName": "Hardy",
    "gender": "female",
    "smartphone": "iPhone"
  },
  {
    "id": "0ce0af37-cd22-4576-bb7b-9f7afe26c174",
    "age": 24,
    "firstName": "Mcintosh",
    "lastName": "Ingram",
    "gender": "male",
    "smartphone": "LG"
  },
  {
    "id": "83e6233d-b92a-40ee-8e9b-a80a2a35bafb",
    "age": 56,
    "firstName": "Bobbi",
    "lastName": "Gentry",
    "gender": "female",
    "smartphone": "XIAOMI"
  },
  {
    "id": "db9004bc-2cb5-47bc-8207-442f2eed1990",
    "age": 38,
    "firstName": "Gaines",
    "lastName": "Middleton",
    "gender": "male",
    "smartphone": "LG"
  }
]
