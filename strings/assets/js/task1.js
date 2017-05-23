
let stringsTask1 = (function () {
    const task = "Task 1";
    const problem = ` Да се състави функция, която приема като първи параметър
                      масив от обекти, а като втори обект.Функцията трябва да
                      върне първия обект, който да съдържат пропъртитата на
                      обекта от втория параметър.Ако няма такъв обект, да върне NULL.`;

      const str = 'lorem';
      const arr = [
    {
      "index": 0,
      "guid": "27b71c69-9e21-4f4a-99af-c252e153a507",
      "title": "Sit ullamco exercitation aute cupidatat.",
      "description": "Mollit minim exercitation Lorem amet nisi ipsum sit. Dolore ullamco aliquip enim eu enim labore. Adipisicing cillum laboris voluptate ut.\r\n",
      "tags": [
        "quis",
        "veniam",
        "consectetur",
        "elit",
        "Lorem",
        "ad",
        "anim"
      ]
    },
    {
      "index": 1,
      "guid": "ad87c201-e4a2-44f0-a93e-63c5c7e73f72",
      "title": "Deserunt ut anim ipsum culpa et et cillum sit deserunt veniam mollit nostrud occaecat deserunt.",
      "description": "Officia commodo cupidatat proident veniam velit aliqua dolore cupidatat aliqua occaecat ullamco cupidatat labore. Aute velit veniam voluptate eu in. Elit Lorem deserunt cillum quis consequat cillum culpa in pariatur. Magna fugiat sint excepteur cillum amet cupidatat velit. Aliquip nostrud officia irure est mollit et commodo sit dolor eu do magna duis nulla. Voluptate irure aliqua minim aliqua ea qui et aliqua sunt ex sint aliquip quis.\r\n",
      "tags": [
        "reprehenderit",
        "voluptate",
        "amet",
        "magna",
        "dolore",
        "eu",
        "commodo"
      ]
    },
    {
      "index": 2,
      "guid": "723a412d-a74a-4d22-abb9-745f70511fcd",
      "title": "Nostrud fugiat ipsum tempor qui.",
      "description": "Magna est magna sint sint minim fugiat non ut magna proident lorem. Eiusmod nulla excepteur voluptate nisi quis. In dolore enim officia aliqua mollit anim sint ullamco nostrud exercitation. Non adipisicing aliqua dolore id nostrud exercitation.\r\n",
      "tags": [
        "irure",
        "mollit",
        "amet",
        "nisi",
        "eiusmod",
        "dolore",
        "sit"
      ]
    },
    {
      "index": 3,
      "guid": "05a8f5b4-d5a0-44cb-ba73-6f30d0a3a803",
      "title": "Aliqua non excepteur veniam sint exercitation adipisicing dolore non id eiusmod proident tempor laborum.",
      "description": "Nisi qui dolore et ea commodo ullamco incididunt amet pariatur velit ullamco laboris. Commodo in fugiat officia eu. Labore ad minim qui in ex ipsum quis irure magna.\r\n",
      "tags": [
        "exercitation",
        "est",
        "qui",
        "aute",
        "do",
        "commodo",
        "excepteur"
      ]
    },
    {
      "index": 4,
      "guid": "3fa3fbb6-7ac9-4b4f-9466-c60bd43b0f22",
      "title": "Esse Lorem velit Lorem magna ex Lorem adipisicing esse id velit non adipisicing.",
      "description": "Fugiat do veniam laboris non irure velit sit non enim non laboris officia do. Laboris labore ad magna mollit velit esse consectetur sit. Ut tempor ad non nostrud dolor quis consequat aliquip consectetur. Lorem do Lorem enim aliquip fugiat pariatur eiusmod anim velit elit do consequat. Esse aliquip aliqua in non proident laborum mollit non eiusmod quis do velit elit. Exercitation labore id excepteur adipisicing laboris eu consectetur qui laborum officia aute irure in.\r\n",
      "tags": [
        "culpa",
        "laboris",
        "aliqua",
        "Lorem",
        "dolor",
        "ex",
        "dolor"
      ]
    },
    {
      "index": 5,
      "guid": "cabb23ea-5c0b-4e41-a435-58db648c869d",
      "title": "Minim aute et ipsum id do proident do est nisi deserunt ipsum laborum deserunt reprehenderit.",
      "description": "In elit do aute est ex adipisicing incididunt velit. Deserunt consequat consectetur adipisicing mollit magna adipisicing officia. Pariatur cupidatat minim officia commodo aute nostrud nulla. Aute id velit ipsum non commodo commodo excepteur. Excepteur culpa ullamco voluptate consequat nostrud do sit culpa fugiat eu cillum veniam dolor. Nostrud laboris Lorem officia commodo commodo occaecat. Adipisicing excepteur tempor cupidatat et.\r\n",
      "tags": [
        "mollit",
        "adipisicing",
        "sint",
        "aliquip",
        "sunt",
        "Lorem",
        "ad"
      ]
    },
    {
      "index": 6,
      "guid": "ff3ce91b-4c11-4439-ae59-246d0c83c274",
      "title": "Amet quis dolore minim cillum incididunt ut cupidatat.",
      "description": "Lorem consectetur ex ut in eiusmod excepteur magna aute laboris. Irure in cupidatat amet duis laboris occaecat voluptate. Mollit nisi nulla cillum quis ea ut enim ut qui esse non.\r\n",
      "tags": [
        "cupidatat",
        "non",
        "aliqua",
        "ipsum",
        "commodo",
        "nulla",
        "occaecat"
      ]
    },
    {
      "index": 7,
      "guid": "339c5699-f932-450f-b61f-563094f7baf6",
      "title": "Incididunt laboris do enim velit aliquip reprehenderit magna ex ad commodo et ut excepteur.",
      "description": "Amet quis nostrud duis labore dolore non reprehenderit do. Adipisicing in ipsum culpa cillum reprehenderit et ex. Nisi sunt occaecat eu amet tempor.\r\n",
      "tags": [
        "aliquip",
        "id",
        "ex",
        "fugiat",
        "ipsum",
        "et",
        "ex"
      ]
    },
    {
      "index": 8,
      "guid": "773cb4f2-5a0b-4a6e-8199-93a6cf4ec0f0",
      "title": "Amet cillum officia qui voluptate in velit commodo eiusmod labore cillum excepteur non incididunt dolor.",
      "description": "Velit aliquip esse adipisicing ipsum officia cupidatat eiusmod labore esse id dolor duis. In tempor labore fugiat excepteur non laborum Lorem fugiat reprehenderit sit ad sunt minim. Ipsum incididunt laborum ut laboris in sunt incididunt magna est pariatur tempor consequat reprehenderit. Sunt aliqua ad labore mollit mollit veniam ut. Consequat quis velit exercitation sint amet laboris occaecat adipisicing pariatur. Ullamco laborum proident laboris in laborum pariatur minim sit aute voluptate irure aliquip.\r\n",
      "tags": [
        "esse",
        "laboris",
        "duis",
        "minim",
        "adipisicing",
        "ut",
        "laborum"
      ]
    },
    {
      "index": 9,
      "guid": "1c4c1c7a-6892-4769-b377-e645a77daef0",
      "title": "Velit sunt aute ipsum aute elit.",
      "description": "Nisi culpa laboris sunt dolore proident ea non ad cupidatat eu. Tempor excepteur excepteur enim veniam minim duis aliqua ea officia qui culpa do. Id id consectetur Lorem elit. Exercitation ea nostrud elit mollit velit ullamco amet.\r\n",
      "tags": [
        "fugiat",
        "dolore",
        "sunt",
        "consequat",
        "aliqua",
        "consequat",
        "consequat"
      ]
    }
  ];

    function where(arr, string) {
        let result;
        let resultString =`Array is: <br/>${JSON.stringify(arr)}, <br/>Pattern is:<br/>${string}.<br/>Result array is: <br/>`;

        if (arguments.length < 2){
            result = 'Function must be called with two parameters';

            return resultString += `${result}.`;
        }
        if (!Array.isArray(arr) || !arr.length){
            result = 'First argument is not array or is empty array';

            return resultString += `${result}.`;
        }
        if (typeof string !== "string" || !string.length){
            result = 'Second argument is not sting or is empty sting';

            return resultString += `${result}`;

        }else {
            result = [];

            for (let val of arr) {
               if (check(val, string)) {

                   result.push(val);
               }
            }
            return resultString += `${JSON.stringify(result)}.`;
        }
    }
    function check(obj, str) {
        let propStr1 = 'title';
        let propStr2 = 'description';

        // не мога с двете в един стринг??
        let regexpObj = new RegExp(str, 'i');

        for (let variable in obj) {

            if((variable.indexOf(propStr1) !== -1) || (variable.indexOf(propStr2) !== -1)){
                if (regexpObj.test(obj[variable])){

                    return true;
                }
            }
        }
    }

    let resultOfWhere = where(arr, str);

    document.write(`<h1>Strings Homework</h1><div><div class="background"><h3>${task}</h3><p class="problem">${problem}</p></div><p>${resultOfWhere}</p></div>`);

    return {
        where
       };

})();
