
 let arrayTask3 = [
     {
       "id": "37ad3865-ccce-48c0-ab78-ec16b5968f58",
       "age": 31,
       "firstName": "Elise",
       "lastName": "Levine",
     },
     {
       "id": "fc78e8af-c560-42bd-8a50-0bb73e241025",
       "lastName": "Welch",
       "gender": "male",
       "email": "williamswelch@kangle.com",
       "address": "948 Wolcott Street, Wauhillau, Wisconsin, 2206"
     },
     {
       "id": "501ea83a-1136-4f68-960c-913c722f2fb3",
       "age": 19,
       "firstName": "Maritza",
       "email": "maritzairwin@kangle.com",
       "address": "995 Dearborn Court, Homestead, Florida, 9076"
     },
     {
       "id": "e9f027ec-f71c-42f4-8a52-0b7e3bee6703",
       "age": 55,
     },
     {
       "id": "89e6c19a-2084-4da3-9230-17ed9bf5ba0a",
     },
     {
       "id": "096589d2-f332-4dd4-95ff-ed0f98c5ce18",
       "age": 55,
       "firstName": "Evelyn",
       "lastName": "Banks",
       "gender": "female",
       "email": "evelynbanks@kangle.com",
       "address": "709 Beach Place, Bethpage, Delaware, 4554",
       "id": "f92e9eaa-300f-4f53-af16-8ba69c73a1dd",
       "age": 47,
       "firstName": "Knowles",
       "lastName": "Davenport",
       "gender": "male",
       "email": "knowlesdavenport@kangle.com",
       "address": "726 Hale Avenue, Veyo, North Dakota, 1041"
     }
   ];

let arraysTask3 = (function (arr) {
    const task = "Task 3";
    const problem = `Да се сортира масив от обекти в зависимост от броя на пропъртитата.`;
    let array = arr;

    function sortArrayOfObject(array){

        if (!Array.isArray(array)){
            result = 'Argument is not array.';

            return result;
        }
        if (array.length < 1){
            result = 'Array is empty.';

            return result;

        } else{
            array.sort(function(a, b) {
                if (Object.keys(a).length > Object.keys(b).length) {

                    return 1;
                }
            });
            return array;
        }
    }

    let resultsortArrayOfObject = JSON.stringify(sortArrayOfObject(array));

    arrayTask3 = JSON.stringify(arrayTask3);

    document.write(`<div><div class="background"><h3>${task}</h3><p class="problem">${problem}</p></div><p>Sort array is:<br/> ${arrayTask3}.</p><p>${resultsortArrayOfObject}</p</div>`);

    return {
        sortArrayOfObject
        };

})(arrayTask3);
