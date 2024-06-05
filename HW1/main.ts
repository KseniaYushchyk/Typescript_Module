//Tasks1
// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
//

let a_:string = 'hello';
let b_:string = 'owu';
let c_:string = 'com';
let d :string = 'ua';
let e :number = 1;
let f :number = 10;
let g :number = -999;
let h :number = 123;
let i :number = 3.14;
let j :number = 2.7;
let k :number = 16;
let l :boolean = true;
let m :boolean = false;

console.log(a_);
console.log(b_);
console.log(c_);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);
console.log(j);
console.log(k);
console.log(l);
console.log(m);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//

let firstName:string = 'Ksenia';
let middleName:string = 'Volodymyrivna';
let lastname:string = 'Yushchyk';

let PIB:string = firstName + ' ' + middleName + ' ' + lastname;
console.log(PIB);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
//

let a:number = 100;
let b:string = '100';
let c:boolean = true;

console.log(typeof a, typeof b, typeof c);

//Tasks2
//Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let array:string[] = ['Bogdan', 'Ksenia', 'Lesya', 'Vika', 'Anton', 'Mykola', 'Romana', 'Ivan', 'Nastya', 'Anna'];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1:{title:string, pageCount:number, genre:string} = {
    title: 'The A.B.C. Murders',
    pageCount: 250,
    genre: 'detective'
};

let book2:{title:string, pageCount:number, genre:string} = {
    title: '1984',
    pageCount: 250,
    genre: 'dystopia novel'
};

let book3:{title:string, pageCount:number, genre:string} = {
    title: 'Murder in Mesopotamia',
    pageCount: 310,
    genre: 'detective'
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори"
// - являється  масивом. Кожен автор має поля name та age.

let book1More:{title:string, pageCount:number, genre:string, author:any[]} = {
    title: 'The A.B.C. Murders',
    pageCount: 250,
    genre: 'detective',
    author: [
        {name:'Agata Kristi', age: 84}
    ]
};

let book2More:{title:string, pageCount:number, genre:string, author:any[]} = {
    title: '1984',
    pageCount: 250,
    genre: 'dystopia novel',
    author: [
        {name:'Jorj Oruell', age: 65}
    ]
};

let book3More:{title:string, pageCount:number, genre:string, author:any[]} = {
    title: 'Murder in Mesopotamia',
    pageCount: 310,
    genre: 'detective',
    author: [
        {name:'Agata Kristi', age: 84}
    ]
}

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести
// в консоль пароль кожного користувача

let users:{name:string, username:string, password:string}[] = [
    {name: 'Ksenia', username: 'ksks', password: '1234FDki'},
    {name: 'Petro', username: 'pet', password: '1255FDloi'},
    {name: 'Anton', username: 'tiger', password: 'qwer567'},
    {name: 'Olesya', username: 'wowalesia', password: 'hjkkl789'},
    {name: 'Vika', username: 'boyko', password: '254ghj'},
    {name: 'Ivan', username: 'navi', password: 'fghj678'},
    {name: 'Inna', username: 'nina78', password: '525dfghj'},
    {name: 'Tanya', username: 'tanysha', password: '5644erty'},
    {name: 'Danya', username: 'zhorin', password: 'fgh4678'},
    {name: 'Maksym', username: 'lion', password: 'fgh4dfgh8'}
]

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);


// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін
// в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в
// вас буде одновимірний масив з 21 значенням вичключаємо одразу


let temperatures: number[][] = [
    [22, 25, 28],
    [24, 20, 27],
    [22, 24, 24],
    [22, 25, 28],
    [20, 25, 29],
    [20, 28, 24],
    [20, 28, 21]
];

interface DailyTemperatures {
    morning: number;
    noon: number;
    evening: number;
}

let temperatures2: { [day: number]: DailyTemperatures } = {
    1: { morning: 22, noon: 25, evening: 28 },
    2: { morning: 24, noon: 20, evening: 27 },
    3: { morning: 22, noon: 24, evening: 24 },
    4: { morning: 22, noon: 25, evening: 28 },
    5: { morning: 20, noon: 25, evening: 29 },
    6: { morning: 20, noon: 28, evening: 24 },
    7: { morning: 20, noon: 28, evening: 21 }
};
//Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a,
// що дорівнює 1, 0, -3

let x:number = 0;

if (x !== 0) {
    console.log('true');
}
else {
    console.log('false');
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті
// години попадає число
// (в першу, другу, третю или четверту частину години).

let time:number = 15;

if (time >= 0 && time <= 14) {
    console.log('Перша чверть');
} else if (time >= 15 && time <= 29) {
    console.log('Друга чверть');
} else if (time >= 30 && time <= 44) {
    console.log('Третя чверть');
} else if (time >= 45 && time <= 59) {
    console.log('Четверта чверть');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє
// це число (у першу, другу чи третю).

let day:number = 5;

if (day >= 1 && day <= 10) {
    console.log('Перша декада')
} else if (day <= 11 && day <= 20){
    console.log('Друга декада')
}  else if (day <= 21 && day <= 30){
    console.log('Третя декада')
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let orderOfDay:number = 4;

switch (orderOfDay){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Oops, error');
}

// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
//

let num1:number = 10;
let num2:number = 20;

if (num1>num2) {
    console.log(num1)
}
else  if(num2>num1){
    console.log(num1)
}
else {
    console.log('Вони рівні')
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть
// код який,
//  буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення
//  (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let x2:any;

if (!x2) {
    x2 = "default";
}

console.log(x2);

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити
// кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray:{title:string, monthDuration: number} [] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[0].title}: Супер`);
} else {
    console.log(' ');
}

if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[1].title}: Супер`);
} else {
    console.log(' ');
}

if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[2].title}: Супер`);
} else {
    console.log(' ');
}

if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[3].title}: Супер`);
} else {
    console.log(' ');
}

if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[4].title}: Супер`);
} else {
    console.log(' ');
}

if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[5].title}: Супер`);
} else {
    console.log(' ');
}

//Tasks3
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i:number=0; i < 10; i++) {
    let text = 'Це текст ';
    document.write('<div>' + text + '</div>');
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i:number=0; i < 10; i++) {
    let text = 'Це текст ' + (i + 1);
    document.write('<div>' + text + '</div>');
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let n:number = 0;

while (n<20){
    n++;
    let text:string = 'Це текст ';
    document.write('<h1>' + text + '</h1>');
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//

let index:number = 0;

while(index<20){
    index++;
    let text = 'Це текст ' + index;
    document.write('<h1>' + text + '</h1>')
}

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
let listOfItems:string[] = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//  <ul>
//     <li>ITEM OF ARRAY</li>
//     <!--
//         і тд інші об'єкти масиву
//          ...
//          ...
//          ...
//     -->
// </ul>
//

for (let j:number = 0; j < listOfItems.length; j++) {
    document.write('<ul>');
    document.write('<li>' + 'ITEM OF ARRAY' + '</li>');
    document.write('</ul>');

}

// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
//
// -----------------------------------------------

for (let j:number = 0; j < listOfItems.length; j++) {
    const listOfItem:string = listOfItems[j];
    document.write('<ul>');
    document.write('<li>' + listOfItem + '</li>');
    document.write('</ul>');

}

//
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
let products:{title:string, price:number, image:string}[] = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
//
// ШАБЛОН
//  <div class="product-card">
//         <h3 class="product-title">TITLE. Price - PRICE</h3>
//         <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
for (let j:number = 0; j < products.length; j++) {
    const product:{title:string, price:number, image:string} = products[j];
    document.write('<div class="product-card">');
    document.write('<h3 class="product-title">' + product.title + ' Price ' + product.price + '</h3>');
    document.write('<img src="' + product.image + '" alt="" class="product-image">');
    document.write('</div>');
}
//
// --------------------
// є масив
let usersArr:{name:string, age:number, status:boolean}[] = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
//  за допомоги циклу вивести:
//  - користувачів зі статусом true

for (let j:number = 0; j < usersArr.length; j++) {
    const user:{name:string, age:number, status:boolean} = usersArr[j];
    if (user.status === true) {
        console.log(user)
    }
}

//  - користувачів зі статусом false

for (let j:number = 0; j < usersArr.length; j++) {
    const user:{name:string, age:number, status:boolean} = usersArr[j];
    if (user.status !== true) {
        console.log(user)
    }
}


//  - користувачів які старші за 30 років

for (let j:number = 0; j < usersArr.length; j++) {
    const user:{name:string, age:number, status:boolean} = usersArr[j];
    if (user.age > 30) {
        console.log(user)
    }
}

//Tasks4
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function sqrRectangle(a:number,b:number):number {
    return a*b;
}

console.log(sqrRectangle(2,7))

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function sqrCircle(r:number):number {
    return Math. PI * r**2
}

console.log(sqrCircle(10))
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function sqrCylinder(h:number,r:number):number{
    return Math. PI * r**2 * h;
}

console.log(sqrCylinder(10,4))

// - створити функцію яка приймає масив та виводить кожен його елемент

let arrOfUsers:{name:string, age:number}[] = [
    { name: 'Іван', age: 25 },
    { name: 'Марія', age: 30 },
    { name: 'Петро', age: 35 }
];

function Users(arrOfUsers):void {
    for (let i:number = 0; i < arrOfUsers.length; i++) {
        console.log(`Ім'я: ${arrOfUsers[i].name} Вік: ${arrOfUsers[i].age}`);
    }
}

Users(arrOfUsers);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function pText(text:string):void {
    document.write(`<p>${text}</p>`)
}

pText('Hello, World!')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function list(textLi:string):void {
    document.write(`<ul>
            <li>${textLi}</li>
            <li>${textLi}</li>
            <li>${textLi}</li>
        </ul>`)
}
list('list')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість
// li визначається другим аргументом, який є числовим (тут використовувати цикл)

function list2(textLi:string, num:number){
    document.write(`<ul>`)
    for (let i = 0; i < num; i++) {
        document.write(`<li>${textLi}</li>`)
    }
    document.write (`</ul>`)
}
list2('list2', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function arrData(textLi:any):void {
    document.write(`<ul>`)
    for (let i = 0; i < textLi.length; i++) {
        document.write(`<li>${textLi[i]}</li>`)
    }
    document.write (`</ul>`)
}

arrData(['Heyyy!', 5, true]);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let usersAr:{id:number,name:string, age:number}[] = [
    { id: 1, name: 'Іван', age: 25 },
    { id: 2, name: 'Марія', age: 30 },
    { id: 3, name: 'Петро', age: 35 }
];

function createUsers(users:{id:number,name:string, age:number}[]):void {
    for (let i:number = 0; i < users.length; i++) {
        document.write(`<div>Id: ${users[i].id}, Name: ${users[i].name}, Age: ${users[i].age}</div>`);
    }
}

createUsers(usersAr);
// - створити функцію яка повертає найменьше число з масиву

let numArr:number[] = [1, 2, 3, 4, 5];

function numbers(num:number[]):number {
    let min:number = num[0];
    for (let i:number = 0; i < num.length; i++) {
        if(num[i] < min){
            min = num[i];
        }
    }
    return min;
}

console.log(numbers(numArr));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let arrNum:number[] = [4,5,10,25]
function sum (arr:number[]):number {
    let total:number = 0;
    for (let i:number = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

console.log(sum(arrNum))
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr:number[],index1:number,index2:number):number[] {
    let index0:number = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = index0;
    return arr;
}

console.log(swap([55, 66, 77, 88], 0,1));

