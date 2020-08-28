// 02 CHAPTER: JAVASCRIPT LANGUAGE FUNDAMENTALS
// 04 Section: Intro file setup
// alert('Hello World!');


/* // 05 Using the console
console.log('Hello World');

console.log(123);

console.log(true);

var greeting = 'Hello';
console.log(greeting);

console.log([1,2,3,4,5]);

console.log({a:1, b:2, c:3, d:4, f:5});

console.table({a:1, b:2, c:3, d:4, f:5});

console.error('This is some error');

console.clear();

console.warn('This is a warning');

console.time('TimeCounter')
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
console.timeEnd('TimeCounter'); */


/* //06 Veriables: var let const
var name = 'Jone Doe';
console.log(name);

name = 'Stive Smith';
console.log(name);

var greeting;
console.log(greeting); // Undefined

greeting = 'Hello';
console.log(greeting);

// Multi word vars
var firstName = 'John'; // Camel case
var FirstName = 'Tom'; // Pascal case 
var first_name = 'Sara'; // Underscore

const name = "John";
console.log(name);

name = 'Sara';
console.log(name); // error

const person = {
    name: 'John',
    age: 31,
    sex: 'male'
}
person.name = 'Sara';
console.log(person);

const numbers = [1,2,3,4,5];
numbers.push(6);
console.log(numbers); */


/* // 07 Data types in JavaScript 
// Primitive data types
// String
// Number
// Boolean
// Null 
// Undefined 
// Symbol(ES6) 

const name = 'John Doe';
console.log(typeof name);

const age = 31;
console.log(typeof age);

const hasKids = true;
console.log(typeof hasKids);

const car = null;
console.log(typeof car);

var test;
console.log(test);

const sym = Symbol();
console.log(sym);

// Reference data types
// Arrays
// Object
// Function 
// Dates 

const hobbies = ['movies', 'music'];
console.log(typeof hobbies);

const address = {city: 'Boston', state: 'Hatlon'}
console.log(typeof address);

const myFunction = function() {};
console.log(typeof myFunction);

const today = new Date();
console.log(today, typeof today); */


/* // 08 Type conversion 
var value = String(22);
console.log(value);
console.log(typeof value);
console.log(value.length);

var value = String(4 + 4);
console.log(value);
console.log(typeof value);
console.log(value.length);

var value = String(true);
console.log(value);
console.log(typeof value);
console.log(value.length);

var value = String( new Date() );
console.log(value);
console.log(typeof value);
console.log(value.length);

var value = [1,2,3,4,5];
console.log(value);
console.log(typeof value);
console.log(value.length);

// toString()
var value = (5).toString();
console.log(value);
console.log(typeof value);
console.log(value.length);

var value = (true).toString();
console.log(value);
console.log(typeof value);
console.log(value.length);

// String to number
var value = Number('12');
console.log(value);
console.log(typeof value);
console.log(value.toFixed(2));

var value = Number(true);
console.log(value);
console.log(typeof value);

var value = Number(false);
console.log(value);
console.log(typeof value);

var value = Number(null);
console.log(value);
console.log(typeof value);

var value = Number('Hello');
console.log(value);
console.log(typeof value);

var value = Number([1,2,3,4,5]);
console.log(value);
console.log(typeof value);

// String to number with parseInt
var value = parseInt('100');
console.log(value);

var value = parseFloat('100.30');
console.log(value);  // 100.3

var value = parseFloat('100.30');
console.log(value.toFixed(2)); // 100.30

var valueOne = 5;
var valueTwo = 4;
var sum = valueOne + valueTwo;
console.log(sum); // 9
console.log(typeof sum); // number

var valueOne = String(5);
var valueTwo = 3;
var sum = valueOne + valueTwo;
console.log(sum); // 53 
console.log(typeof sum); // string

var valueOne = String(5);
var valueTwo = 3;
var sum = Number(valueOne + valueTwo);
console.log(sum); // 53
console.log(typeof sum); // number */


/* // 09 Numbers the math object
var numberOne = 100;
var numberTwo = 50;
var sum1 = numberOne + numberTwo;
var sum2 = numberOne - numberTwo;
var sum3 = numberOne * numberTwo;
var sum4 = numberOne / numberTwo;
var sum5 = numberOne % numberTwo;
console.log(numberOne + ' + ' + numberTwo + ' = ' + sum1);
console.log(numberOne + ' - ' + numberTwo + ' = ' + sum2);
console.log(numberOne + ' * ' + numberTwo + ' = ' + sum3);
console.log(numberOne + ' / ' + numberTwo + ' = ' + sum4);
console.log(numberOne + ' % ' + numberTwo + ' = ' + sum5);

var value = Math.PI;
console.log(value); // 3.14

var value = Math.E;
console.log(value); // 2.718

var value = Math.round(2.4);
console.log(value); // 2

var value = Math.ceil(2.4);
console.log(value); // 3

var value = Math.floor(2.8);
console.log(value); // 2

var value = Math.sqrt(64);
console.log(value); // 8

var value = Math.abs(-3);
console.log(value); // 3

var value = Math.pow(2, 2);
console.log(value); // 4

var value = Math.min(2, 33, 45, 55);
console.log(value); // 2

var value = Math.max(2, 44, 55, 66);
console.log(value); // 66

var value = Math.random();
console.log(value);

var value = Math.floor(Math.random() * 10) + 1; // returns a random integer from 1 to 10
console.log(value); */


/* // 010 String methods concatenation
var firstName = 'Yorzoda';
var lastName = 'Mahmadsaid';
var sum = firstName + lastName; 
console.log(sum); // YorzodaMahmadsaid

sum = firstName + ' ' + lastName;
console.log(sum); // Yorzoda Mahmadsaid

var value;
value = 'Yorzoda';
value += 'Mahmadsaid';
console.log(value);


var firstName = 'Yorzoda';
var age = 30;
value = 'Hello, my name is ' + firstName + ' and I am ' + age;
console.log(value);

// Escaping
var someText = "That's awesome, I can't wait";
console.log(someText);

// Length
var firstName = 'Mahmadsaid';
console.log(firstName.length);

// Concat()
var firstName = "Mahmadsaid";
var lastName = 'Yorzoda';
var value = firstName.concat(' ', lastName);
console.log(value);

// toUpperCase() and toLowerCase()
var firstName = 'Yorzoda';
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());


var firstName = "Yorzoda";
console.log(firstName[0]); // Y
console.log(firstName.indexOf('z')); // 3
console.log(firstName.lastIndexOf('d') ); // 1
console.log(firstName.charAt('2')); // r
console.log(firstName.charAt(firstName.length - 1)); // a
console.log(firstName.substring(0, 3)); // Yor
console.log(firstName.slice(0, 3)); // Yor

var someText = 'Hello my name is Said i am 30';
console.log(someText.split(' '));

var someText = 'Hello,my,name,is,Said,i,am,30';
console.log(someText.split(','));

var someText = 'Hello my name is Said';
console.log(someText.replace('Said', 'Mahmadsaid'));

var someText = 'My name is Said';
console.log(someText.includes('Said')); // true

var someText = 'My name is Said';
console.log(someText.includes('Jack')); // false */


/* // 011 Template literals
const name = 'Mahmadsaid';
const age = 30;
const job = 'Web developer';
const city = 'Dushanbe';

var html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>'
document.body.innerHTML = html;

var html = '<ul>' + 
                '<li>Name: ' + name + '</li>' + 
                '<li>Age: ' + age + '</li>' + 
                '<li>Job: ' + job + '</li>' + 
                '<li>City: ' + city + '</li>' + 
           '</ul>'
document.body.innerHTML = html;

function hello() {
    return 'hello';
}
var html = `<ul>
                <li>Name: ${name}</li>
                <li>Age: ${age}</li>
                <li>Job: ${job}</li>
                <li>City: ${city}</li>
                <li>Example: ${2+2}</li>
                <li>Example: ${hello()}</li>
                <li>Example: ${age > 30 ? 'Over 30' : 'Under 30'}</li>
            </ul>`
document.body.innerHTML = html;

var html = `<ul class="list-group">
                <li class="list-group-item">Name: ${name}</li>
                <li class="list-group-item">Age: ${age}</li>
                <li class="list-group-item">Job: ${job}</li>
                <li class="list-group-item">City: ${city}</li>
                <li class="list-group-item">Example: ${2+2}</li>
                <li class="list-group-item">Example: ${hello()}</li>
                <li class="list-group-item">Example: ${age > 30 ? 'Over 30' : 'Under 30'}</li>
            </ul>`
document.body.innerHTML = html; */


//  // 012 Array and Array methods
// const numbers = [23,45,66,67,24,65];
// const number2 = new Array(33,55,77,88,85);
// const fruits = ['Apple', 'Banana', 'Orange', 'Pear'];
// const mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date()];

// console.log(numbers);
// console.log(numbers.length); // 6
// console.log(Array.isArray(numbers)); // true
// console.log(numbers[0]); // 23
// console.log(numbers[3]); // 67
// console.log(numbers.indexOf(23)); // 0

// console.log(number2);
// console.log(number2.length); // 5
// console.log(Array.isArray(number2)); // true
// console.log(number2[1]); // 55
// console.log(number2[2]); // 77
// console.log(number2.indexOf(33)); // 0

// console.log(fruits);
// console.log(fruits.length); // 4
// console.log(Array.isArray(fruits)); // true
// console.log(fruits[2]); // Orange
// console.log(fruits[3]); // Pear
// console.log(fruits.indexOf('Apple')); // 0

// console.log(mixed);
// console.log(mixed.length); // 7
// console.log(Array.isArray(mixed)); // true
// console.log(mixed[4]); // null
// console.log(mixed[5]); // {a:1, b:2}
// console.log(mixed.indexOf(4));

// var myArray = [1,2,3,4,5,6, 50, 66];
// var myArray2 = ['Said','Daler'];
// myArray[2] = 100; // replace
// myArray.push(200); // add to end
// myArray.unshift(50); // add to front
// myArray.pop(); // take off from end
// myArray.shift() // take off front
// myArray.splice(0,1);
// myArray.reverse()
// myArray = myArray.concat(myArray2);
// myArray.sort();
// myArray2.sort();
// myArray.sort(function(x, y) {return x - y});
// myArray.sort(function(x, y) {return y - x});
// console.log(myArray);

// var array = [10, 20, 30, 40, 50]; 

// var found = array.find(function(element) { 
//   return element > 10; 
// }); 

// var found = array.find(function(element) { 
//   return element < 40; 
// }); 

// console.log(found);


/* // 013 Object literals
const person = {
    firstName: 'Mahmadsaid',
    lastName: 'Yorzoda',
    age: 30,
    email: 'sayfullo@mail.ru',
    hobbies: ['sport', 'drive'],
    address: {city: 'Nurek', state: 'Hatlon'},
    getBirthYear: function() {return 2020 - this.age}

}

let value;
value = person.firstName;
value = person['firstName'];
value = person.lastName;
value = person.age;
value = person.email;
value = person.hobbies;
value = person.getBirthYear();
console.log(value);

const peoples = [
    {name: 'Mahmadsaid', age: 30},
    {name: 'Said', age: 24},
    {name: 'Jaloliddin', age: 23},
    {name: 'Hadyatullo', age: 21},
    {name: 'Azizullo', age: 22},
]

console.log(peoples.length); // 5
console.log(peoples[0].name); // Mahmadsiad

for(let i = 0; i < peoples.length; i++) {
    console.log(peoples[i].name);
}

let i = 0;
if(i < peoples.length) {console.log(peoples[i].name); i++ }
if(i < peoples.length) {console.log(peoples[i].name); i++ }
if(i < peoples.length) {console.log(peoples[i].name); i++ }
if(i < peoples.length) {console.log(peoples[i].name); i++ }
if(i < peoples.length) {console.log(peoples[i].name); i++ } */


/* // 014 Date times
const today = new Date();
console.log(today);

var birthDay = new Date('9-10-1990 11:34:00'); 
console.log(birthDay);

var birthDay = new Date('9/10/1990 11:30:33');
console.log(birthDay);

let value;
value = today.getMonth();
value = today.getDate();
value = today.getDay();
value = today.getFullYear();
value = today.getHours();
value = today.getMinutes();
value = today.getSeconds();
value = today.getMilliseconds();
value = today.getTime();
console.log(value);

var birthDay = new Date();
birthDay.setMonth(2);
birthDay.setDate(11);
birthDay.setFullYear(1990);
birthDay.setHours(3);
birthDay.setMinutes(39);
birthDay.setSeconds(23);
console.log(birthDay); */


/* // 014 If statements comparison operators
var id = 100;
if(id == 100) {
    console.log('Correct');
} else {
    console.log('Incorrect');
}

if(id != 100) {
    console.log('Correct');
} else {
    console.log('Incorrect');
}

if(id === 100) {
    console.log('Correct');
} else {
    console.log('Incorrect');
}

if(id !== 100) {
    console.log('Correct');
} else {
    console.log('Incorrect');
}

var id = 100;
if(id) {
    console.log(`The id is ${id}`);
} else {
    console.log('No id');
}

if(id > 200) {
    console.log('Correct');
} else {
    console.log('Incorrect');
}

var color = 'red';
if(color === 'red') {
    console.log('Colore is red');
} else if( color === 'blue') {
    console.log('Color is blue');
} else if(color === 'yellow') {
    console.log('Color is yellow');
} else {
    console.log('Color non blue and not red and not yellow');
}

var name = 'Said';
var age = 30;
if(age > 0 && age < 12) {
    console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19) {
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}

if(age < 16 || age > 65) {
    console.log(`${name} can not run in race`);
} else {
    console.log(`${name} is registered for the race`);
}

var id = 100;
console.log(id === 100? 'Correct' : 'Incorrect');

if(id === 100) 
    console.log('Correct');
else
    console.log('Incorrect'); */


/* // 016 Switches
var color = 'red';
switch(color) {
    case 'red': 
        console.log('Color is red');
        break;
    case 'blue': 
        console.log('Color is blue');
        break;
    case 'yellow': 
        console.log('Color is yellow');
        break;
    default:
        console.log('Color not found');
}

let day;
 switch( new Date().getDay() ) {
     case 0:
         day = 'Sunday';
         break;
     case 1:
         day = 'Monday';
         break;
     case 2:
         day = 'Tuesday';
         break;
     case 3:
         day = 'Wednesday';
         break;
     case 4:
         day = 'Thursday';
         break;
     case 5:
         day = 'Friday';
         break;
     case 6:
         day = 'Saturday';
         break;
    default:
        console.log('Incorrect day');
 }
 console.log(`Today is ${day}`); */


/* // 017 Function declarations expressions
function greet() {
    console.log('Hello');
}
greet();

function greet() {
    return 'Hello';
}
console.log(greet());

function greet(firstName, lastName) {
    return 'Hello ' + firstName + ' ' + lastName;
}
console.log(greet('Said', 'Yorzoda'));

function greet(firstName = 'Mahmadsaid', lastName = 'Yorzoda') {
    return 'Hello ' + firstName + ' ' + lastName;
}
console.log(greet());

var square = function(x) {
    return x*x;
}
console.log(square(2));

(function() {
   console.log('Hello my friend');
})();

(function(name) {
   console.log('Hello ' + name)
})('Said');

const todo = {
    add: function() {
        console.log('Add todo');
    },
    edit: function(id) {
        console.log(`Edit todo ${id}`)
    }
}

todo.delete = function() {
    console.log('Delete todo');
}

todo.delete(); 
todo.add();
todo.edit(22);
console.log(todo); */

/*
// 018 General loops
for(let i = 0; i < 3; i++) {
    console.log(i);
}

let i = 0;
if(i < 3) {console.log(i), i++};
if(i < 3) {console.log(i), i++};
if(i < 3) {console.log(i), i++};

for(let i = 0; i < 4; i++) {
    if(i === 2) {
        console.log('This is number 2');
        continue;
    }

    if(i === 3) {
        console.log('Stop the loop');
        break;
    }

    console.log('Number: ' + i);
}

let i = 0; 
while(i < 3) {
    console.log('Number: ' + i);
    i++;
}

let i = 100;
do {
    console.log('Number: ' + i);
    i++;
} while(i < 10);

const cars = ['Tayota', 'Mazda', 'Ford', 'Opel', 'Nexi'];
for(let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

const fruits = ['Apple', 'Banana', 'Limon', 'Grape', 'Cherry'];

fruits.forEach(function(fruit) {
    console.log(fruit);
});

fruits.forEach(function(index, fruit, array) {
    console.log(`${index} : ${fruit}`)
    console.log(array);
});

fruits.forEach(fruit => console.log(fruit));

const users = [
    {id: 1, name: 'Said'},
    {id: 2, name: 'Daler'},
    {id: 3, name: 'Dilovar'},
    {id: 4, name: 'Navruz'}
]

const ids = users.map(user => {return user.id});
console.log(ids);

const names = users.map(user => {return user.name});
console.log(names);

const user = {
    firstName: 'Yorzoda',
    lastName: 'Mahmadsaid',
    age: 30
}

for(let name in user) {
    console.log(name);
}

for(let x in user) {
    console.log(`${x} : ${user[x]}`);
} */


/* // 019 A look at the window object
console.log('Hello');

alert('Hello');

const input = prompt();
alert(input);

if(confirm('Are you sure?')) {
    alert('Yes');
} else {
    alert('Cancel');
}

var value = window.outerHeight;
var value = window.outerWidth;

var value = window.innerHeight;
var value = window.innerWidth;

var value = window.scrollY;
var value = window.scrollX;

var value = window.location;
var value = window.location.href;
var value = window.location.hostname;
var value = window.location.href = 'http://google.com'
var value = window.location.reload();
var value = window.history.go(-1);
var value = window.history.length;
var value = window.navigator;
var value = window.navigator.appVersion;
var value = window.navigator.language;

console.log(value); */


/* // 020 Block scop with let const
var a = 1;
let b = 2;
const c = 3;

function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function scop: ', a, b, c);
}

test();

if(true) {
    var a = 3;
    let b = 4; 
    const c = 5;
    console.log('If scope', a, b, c);
}

for(let a = 0; a < 5; a++) {
    console.log(`Loop: ${a}`)
}

console.log('Global scope: ', a, b, c); // a=1, b=2, c=3;

for(var a = 0; a < 5; a++) {
    console.log(`Loop: ${a}`)
}

console.log('Global scope: ', a, b, c); // a=5, b=2, c=3; */


// 03 DOM MANIPULATION EVENTS
// 021 What is the DOM?
/* 
<!DOCTYPE HTML>
<html>
<head>
  <title>Title</title>
</head>
<body>
</body>
</html> 
*/


/* // 022 Examining the document object
let value;

value = document;
value = document.all;
value = document.all[2];
value = document.all.length;
value = document.head;
value = document.body;
value = document.doctype;
value = document.domain;
value = document.URL;
value = document.characterSet;
value = document.contentType;

value = document.forms;
value = document.links;
value = document.imeges;
value = document.scripts;

let scripts = document.all;
let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
    console.log(script)} );

console.log(value); */


/* // 023 DOM selectors for single elements
console.log(document.getElementById('task'));

console.log(document.getElementById('task').id);

console.log(document.getElementById('task').className);

// CHANGE STYLE
document.getElementById('task').style.background = '#333';
document.getElementById('task').style.color = 'white';
document.getElementById('task').style.paddingLeft = '30px';

// CHANGE CONTENT
document.getElementById('task').textContent = 'May todo list tasks';
document.getElementById('task').innerText = 'This is my list tasks';
document.getElementById('task').innerHTML = '<span style="color:red">This is my all tasks</span>';

const taskId = document.getElementById('task');
taskId.style.color = 'red';
taskId.style.background = 'black';

// QUARY SELECTOR
console.log(document.querySelector('#task'));
console.log(document.querySelector('.mdc-data-table__cell'));
console.log(document.querySelector('h1'));
console.log(document.querySelector('td:last-child').style.color = 'red'); */


/* // 024 DOM selectors for multiple elements
// GET ELEMENT BY CLASS NAME 
const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.background = 'red';
items[0].textContent = 'hello world';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);

// GET ELEMENT BY TAG ELEMENT
let tags = document.getElementsByTagName('li');
tags[0];
tags[0].style.background = 'red';
tags[0].textContent = 'hello world';

tags = Array.from(tags);
tags.reverse();

tags.forEach(function(li, index) {
    console.log(li.className);
    li.textContent = `${index} : 'Hello'`;
})

console.log(tags);

// QUERY SELECTOR ALL 
const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index) {
    item.textContent = `${index} : 'Hello'`
})

console.log(items);

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index) {
    li.style.background = '#ccc';
})

for(let i = 0; i <liEven.length; i++) {
    liEven[i].style.background = 'black';
    liEven[i].style.color = 'white';
} */


/* // 025 Traversing the DOM
let value;

const list = document.querySelector('ul.collection');
const listItems = document.querySelector('li.collection-item:first-child');
value = list;
value = listItems;

// GET CHILD NODES
value = list.childNodes; 
value = list.childNodes[0];
value = list.childNodes[0].nodeName;
value = list.childNodes[0].nodeType;

// 1- Element 
// 2- Attrubute (deprecated0)
// 3- Texy node 
// 4- Commit 
// 5- Document itself
// 6- Doctype 

// GET CHILDREN ELEMENT NODES
value = list.children;
value = list.children[0];
value = list.children[1];
value = list.children[1].textContent = 'Hello Said';

value = list.firstChild;
value = list.firstElementChild;
value = list.lastChild;
value = list.lastElementChild;
value = list.childElementCount;

// GET PARENT NODE
value = listItems.parentNode;
value = listItems.parentElement;
value = listItems.parentElement.parentElement;

// GET NEXT SIBLING
value = listItems.nextSibling;
value = listItems.nextElementSibling;

// GET PREVIES SIBLING
value = listItems.previousSibling;
value = listItems.previousElementSibling;

console.log(value); */


/* // 026 CREATING ELEMENTS
const li = document.createElement('li');

// ADD CLASS
li.className = 'collection-item';

// ADD ID
li.id = 'new-id';

// ADD ATTRIBUTE
li.setAttribute('title', 'new item');

// CREATE TEXT NODE AND APPEND
li.appendChild(document.createTextNode('Hello world'));

// APPEND LI AS CHILD TO UL
document.querySelector('ul.collection').appendChild(li);

// CREATE NEW LINK ELEMENT
const link = document.createElement('a');
link.className = 'class-field';
link.id = 'id-field';
link.appendChild(document.createTextNode('Hello said'));
link.innerHTML = '<i class="fa fa-remove"></i>';

console.log(link); */


/* // 027 REMOVING REPLACING ELEMENTS
// CREATE ELEMENT
const newHeading = document.createElement('h2');
newHeading.id = 'task-title';
newHeading.appendChild(document.createTextNode('Task List'));

const oldHeading = document.getElementById('task-title');
const cardAction = document.querySelector('.card-action');
cardAction.replaceChild(newHeading, oldHeading);

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

lis[0].remove();
list.removeChild(lis[1]);
console.log(document.querySelectorAll('.collection-item'));

// CLASSES AND ATRIBUTE
const firstLi = document.querySelector('li:first-child');
console.log(firstLi.children[0]);

let value;
value = firstLi.className;
value = firstLi.classList;
firstLi.add('test');
value = firstLi;

const link = document.createElement('a');
value = link.getAttribute('href');
value = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
value = link.hasAttribute('title');
link.removeAttribute('title');
value = link;

console.log(value); */


/* // 028 EVENT LISTENERS THE EVENT OBJECT
document.querySelector('.clear-tasks').addEventListener('click', 
function(e) {
    console.log('Hello world');
    e.preventDefault();
})

document.querySelector('.clear-tasks').addEventListener('click', onClick);
document.querySelector('.clear-tasks').addEventListener('mouseover', onClick);

function onClick(e) {
    console.log('Clicked');
    let value;
    value = e;
    value = e.target;
    value = e.target.id;
    value = e.target.className;
    value = e.target.classList;
    value = e.target.innerText = 'Hello';

    value = e.type;
    value = e.timeStamp;
    value = e.clientY;
    value = e.clientX;
    value = e.offsetY;
    value = e.offsetX;


    console.log(value);
} */


/* // 029 MOUSE EVENTS
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

clearBtn.addEventListener('click', runEvent);

clearBtn.addEventListener('dblclick', runEvent);

clearBtn.addEventListener('mousedown', runEvent);

clearBtn.addEventListener('mouseup', runEvent);

clearBtn.addEventListener('mouseenter', runEvent);

clearBtn.addEventListener('mouseleave', runEvent);

clearBtn.addEventListener('mouseover', runEvent);

clearBtn.addEventListener('mouseout', runEvent);

clearBtn.addEventListener('mousemove', runEvent);

function runEvent(e) {
    console.log(`event type: ${e.type}`);
    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 100)`;
} */


/* // 030 KEYBORD INPUT EVENTS
const form = document.querySelector('form');
const taskInput = document.getElementById('taskInputId');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

taskInput.value = '';

form.addEventListener('submit', runEvent );

taskInput.addEventListener('keydown', runEvent);

taskInput.addEventListener('keyup', runEvent);

taskInput.addEventListener('keypress', runEvent);

taskInput.addEventListener('focus', runEvent);

taskInput.addEventListener('blur', runEvent);

taskInput.addEventListener('cut', runEvent);

taskInput.addEventListener('paste', runEvent);

taskInput.addEventListener('input', runEvent);

taskInput.addEventListener('input', runEvent);

select.addEventListener('change', runEvent);



function runEvent(e) {
    console.log(`event type: ${e.type}`);
    console.log(e.target.value);
    heading.innerText = e.target.value;
    
    e.preventDefault();
} */


/* // 031 EVENT BUBBLING DELEGATION
document.querySelector('.container').addEventListener('click', function() {
    console.log('Container is clicked');
})

document.querySelector('.heading').addEventListener('click', function() {
    console.log('Heading is clicked');
})

document.querySelector('.collection').addEventListener('click', function() {
    console.log('Collection is clicked');
})
document.querySelector('.collection-item').addEventListener('click', function() {
    console.log('Collection item is clicked');
})

document.querySelector('.collection-item').addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
    if(e.target.className === 'collection-item') {
        console.log('delete item');
        e.target.remove();
    }
} */


/* // 032 LOCAL AND SESSION STORAGE
// SET LOCAL STORAGE ITEM
localStorage.setItem('name', 'Said');
localStorage.setItem('age', '31');

// SET SESSION STORAGE ITEM
sessionStorage.setItem('age', '31');

// REMOVE FROM LOCAL STORAGE 
localStorage.removeItem('name');

// GET ITEM FROM LOCAL STORAGE
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');

localStorage.clear();
console.log(name, age);

document.querySelector('form').addEventListener('click', 
function(e) {
    const task = document.getElementById('taskInputId').value;

    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    e.preventDefault();
})

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task) {
    console.log(task);
}); */


/* // 04 DOM PROJECT
// TASK LIST PART 1 - IU ADD TASK ITEMS    
 const form = document.querySelector('#task-form');
 const taskList = document.querySelector('.collection');
 const clearBtn = document.querySelector('.clear-tasks');
 const filter = document.querySelector('#filter');
 const taskInput = document.querySelector('#task');

 loadEventListeners();

 function loadEventListeners() {
     form.addEventListener('submit', addTask);
 }

 function addTask(e) {

     if(taskInput.value === '' || taskInput.value === ' ') {
         alert('Add the task');
     }

     const li = document.createElement('li');
     li.className = 'collection-item';
     li.appendChild(document.createTextNode(taskInput.value));

     const link = document.createElement('a');
     link.className = 'delete-item secondary-conent';
     link.innerHTML = '<i class="fa fa-remove"></i>';
     li.appendChild(link);

     taskList.appendChild(li);

     console.log(li);

     taskInput.value = '';

    e.preventDefault();
 } */


/* // 034 TASK LIST PART 2 - DELETE FILTER TASKS
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

loadEventListeners();

function loadEventListeners() {
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
    clearBtn.addEventListener('click', clearTasks);
    filter.addEventListener('keyup', filterTasks);
}

function addTask(e) {
    if(taskInput.value === '' || taskInput.value === ' ') {
        alert('Add the task');
    }

    const li = document.createElement('li');
    li.className = 'collection-item';
    li.id = 'task-list';
    li.appendChild(document.createTextNode(taskInput.value));

    const link = document.createElement('a');
    link.className = 'delete-item secondary-conent';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);

    taskList.appendChild(li);

    taskInput.value = '';

   e.preventDefault();
}

function removeTask(e) {
    if(e.target.className === 'collection-item' || e.target.id === 'task-list') {
       if(confirm('Are you sure?')) {
          e.target.remove(); 
       }
    }
}

function clearTasks() {
   //  taskList.innerHTML = '';
   while(taskList.firstChild) {
       taskList.removeChild(taskList.firstChild);
   }
}

function filterTasks(e) {
   const text = e.target.value.toLowerCase();
   document.querySelectorAll('.collection-item').
   forEach(function(task) {
       const item = task.firstChild.textContent;
       if(item.toLowerCase().indexOf(text) != -1) {
           task.style.display = 'block';
       } else {
           task.style.display = 'none';
       }ь  
   })
} */


/*  // 035 TASK LIST PART 3 - PERSIST TO LOCAL STOR
 const form = document.querySelector('#task-form');
 const taskList = document.querySelector('.collection');
 const clearBtn = document.querySelector('.clear-tasks');
 const filter = document.querySelector('#filter');
 const taskInput = document.querySelector('#task');

 loadEventListeners();

 function loadEventListeners() {
     document.addEventListener('DOMContentLoaded', getTasks);
     form.addEventListener('submit', addTask);
     taskList.addEventListener('click', removeTask);
     clearBtn.addEventListener('click', clearTasks);
     filter.addEventListener('keyup', filterTasks);
 }

 function getTasks() {
     let tasks;
     if(localStorage.getItem('tasks') === null) {
         tasks = [];
     } else {
         tasks = JSON.parse(localStorage.getItem('tasks'));
     }

     tasks.forEach(function(task) {

        const li = document.createElement('li');
     li.className = 'collection-item';
     li.id = 'task-list';
     li.appendChild(document.createTextNode(task));

     const link = document.createElement('a');
     link.className = 'delete-item secondary-conent';
     link.innerHTML = '<i class="fa fa-remove"></i>';
     li.appendChild(link);

     taskList.appendChild(li);
     })
 }

 function addTask(e) {
     if(taskInput.value === '' || taskInput.value === ' ') {
         alert('Add the task please');
     } else {
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.id = 'task-list';
        li.appendChild(document.createTextNode(taskInput.value));

        const link = document.createElement('a');
        link.className = 'delete-item secondary-conent';
        link.innerHTML = '<i class="fa fa-remove"></i>';
        li.appendChild(link);

        taskList.appendChild(li);

        storeTaskInLocalStorage(taskInput.value);

        taskInput.value = '';

        e.preventDefault();
     }
 }

 function storeTaskInLocalStorage(task) {

     let tasks;

     if(localStorage.getItem('tasks') === null) {
         tasks = [];
     } else {
         tasks = JSON.parse(localStorage.getItem('tasks'));
     }

     tasks.push(task);

     localStorage.setItem('tasks', JSON.stringify(tasks));
 }

 function removeTask(e) {
     if(e.target.className === 'collection-item' || e.target.id === 'task-list') {
        if(confirm('Are you sure?')) {
           e.target.remove(); 
           removeTaskFromLocalStorage(e.target)
           console.log(e.target)
        }
     } 
 }

 function removeTaskFromLocalStorage(taskItem) {
    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index) {
        if(taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    })

    localStorage.setItem('tasks', JSON.stringify(tasks));
 }

 function clearTasks() {
    //  taskList.innerHTML = '';
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    clearTasksFromLocalStorage();
 }

 function clearTasksFromLocalStorage() {
     localStorage.clear();
 }

 function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').
    forEach(function(task) {
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    })
 } */


// 037 LOAN CALCULATOR PART 1 - BUILD THE UI

// LISTEN FOR SUBMIT
/* document.getElementById('loan-form').addEventListener('submit', function(e) {
     document.getElementById('results').style.display = 'none';
     document.getElementById('loading').style.display = 'block';
     setTimeout(calculateResults, 1000);
     e.preventDefault();
 });

 //CALCULATE RESULTS
 function calculateResults(event) {
     const amount = document.getElementById('amount');
     const interest = document.getElementById('interest');
     const years = document.getElementById('years');
     const monthlyPayment = document.getElementById('monthly-payment');
     const totalPayment = document.getElementById('total-payment');
     const totalInterest = document.getElementById('total-interest');

     const principal = parseFloat(amount.value);
     const calculatedInterest = parseFloat(interest.value) / 100 / 12;
     const calculatedPayments = parseFloat(years.value) * 12;

     // Compute monthly payment
     const x = Math.pow(1 + calculatedInterest, calculatedPayments);
     const monthly = (principal*x*calculatedInterest)/(x-1);

     if(isFinite(monthly)) {
         monthlyPayment.value = monthly.toFixed(2);
         totalPayment.value = (monthly*calculatedPayments).toFixed(2);
         totalInterest.value = ((monthly*calculatedPayments)-principal).toFixed(2);

         document.getElementById('results').style.display = 'block';
         document.getElementById('loading').style.display = 'none';
     } else {
        showError('Please check your numbers');
     }

     event.preventDefault();
 }

 function showError(error) {
     document.getElementById('loading').style.display = 'none';
     document.getElementById('results').style.display = 'none';
     const errorDiv = document.createElement('div');
     const card = document.querySelector('.card');
     const heading = document.querySelector('.heading');
     errorDiv.className = 'alert alert-danger';
     errorDiv.appendChild(document.createTextNode(error));
     card.insertBefore(errorDiv, heading);
     setTimeout(clearError, 2000);
 }

 function clearError() {
     document.querySelector('.alert').remove();
 }*/

// 40, 41, 42 NUMBER GUESSER//
/*let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

const game = document.querySelector('#game'),
       minNum = document.querySelector('.min-num'),
       maxNum = document.querySelector('.max-num'),
       guessBtn = document.querySelector('#guess-btn'),
       guessInput = document.querySelector('#guess-input'),
       message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener('click', function(){

    let guess = parseInt(guessInput.value);

    if(isNaN(guess) || guess < min || guess > max ) {
        setMessage(`Please enter number between ${min} and ${max}`, 'red');
        guessInput.style.borderColor = 'red';
    }

    if(guess === winningNum){
        gameOver(true, `${winningNum} is correct, you win!`);
    } else {
        guessesLeft -= 1;

        if(guessesLeft === 0) {
            gameOver(false, `Game over, you lost. The correct number was ${winningNum}`);
        } else {
            guessInput.style.borderColor = 'red';
            guessInput.value = '';
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red')
        }
    }
});

game.addEventListener('mousedown', function(e) {
    if(e.target.className === 'play-again') {
        window.location.reload();
    }
});

function gameOver(won, msg) {

    let color;
    won === true? color = 'green' : color = 'red';
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    message.style.color = color;
    setMessage(msg);

    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

function getRandomNum(min, max) {
    Math.floor(Math.random()*(max-min+1)+min);
} 

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg; 
} */

//05 Object Oriented JavaScript - ES5  ESE5//
// 43 CONSTRUCTOR THE THIS KEYWORD // 
/* const brad = {
    name: 'Brad',
    age: 30
}

console.log(brad);
console.log(brad.name);
console.log(brad.age); */

/* function Person() {
    this.name = 'Brad';
}
 
const brad = new Person();
const john = new Person();

console.log(brad); // Person {name: 'Brad'} //
console.log(john); // Person {name: 'Brad'} // */

/* function Person(name) {
    this.name = name;
    console.log(this);
}

const brad = new Person('Brad');
const john = new Person('John');

console.log(john); // Person {name: 'John'} // 
console.log(brad); // Person {name: 'Brad'} // */

/* function Person(name, age) {
    this.name = name;
    this.age = age;
}

const brad = new Person('Brad', 36);
const john = new Person('John', 30);

console.log(john.age); // 30 //
console.log(brad.age); // 36 // */

/* function Person(name, dob) {
    this.name = name;
    this.birthday = new Date(dob);
    this.calculateAge = function() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1990);
    }
}

const brad = new Person('Brad', 1990);
console.log(brad.calculateAge()); // 30 // */

/* // 44  BUILD IN CONSTRUCTORS //

const name1 = 'Jeff';
const name2 = new String('Jeff');

console.log(name1); // Jeff // 
console.log(name2); // String {Jeff} //

console.log(typeof name1); // String // 
console.log(typeof name2); // object //

if(name1 === 'Jeff') {
    console.log('Yes'); // Yes //
} else {
    console.log('No');
}

if(name2 === 'Jeff') {
    console.log('Yes');
} else {
    console.log('No'); // No //
}

const num1 = 5;
const num2 = new Number(5);

console.log(num2); // Number {5} //
console.log(typeof num2); // object //

const bool1 = true;
const bool2 = new Boolean(true);

console.log(typeof bool1); // boolean //
console.log(typeof bool2); // object // 

const getSum1 = function(x, y) {
    return x + y;
}

const getSum2 = new Function('x', 'y', 'return 1 + 2');

console.log(getSum1(1, 2));
console.log(getSum2(1, 2));

const john1 = {name: 'John'};
const john2 = new Object({name: 'John'})

console.log(john1); // {name: 'John'} //
console.log(john2); // {name: 'John'} //

const array1 = [1,2,3,4];
const array2 = new Array(1,2,3,4);

console.log(array1); // (4) [1,2,3,4] //
console.log(array2); // (4) [1,2,3,4] //

const reg1 = /\w=/;
const reg2 = new RegExp('\\w+');

console.log(reg1);
console.log(reg2); */

// 045 PROTOTYPES EXPLAINED //

// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
    // this.calculateAge = function() {
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1990);
    // }
// }

/* Person.prototype.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
}

Person.prototype.getsMaried = function (newLastName) {
    this.lastName = newLastName;
// }

const john = new Person('John', 'Doe', '2-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1991');

console.log(mary.calculateAge());
console.log(john.calculateAge());

console.log(mary.getFullName());
console.log(john.getFullName());

mary.getsMaried('Yorzoda');
console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('getFullName')); */

/* // 046 PROTOTYPE INHERITANCE

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('Yorzoda', 'Mahmadsaid');
// console.log(person1.greeting()); 

function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}

Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer;

const customer1 = new Customer('Tom', 'Smith', '444-444-444', 'Standart');
console.log(customer1);

Customer.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
}

console.log(customer1.greeting());  */

/* // 047 USING OBJECT CREATE

const personPrototype = {
    greeting: function() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }, 
    getsMaried: function(newLastName) {
        this.lastName = newLastName;
    }
}

const mary = Object.create(personPrototype);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

mary.getsMaried('Yorzoda');

console.log(mary.greeting());

const brad = Object.create(personPrototype, {
    firstName: {value: 'Brad'},
    lastName: {value: 'Traversy'},
    age: {value: 36}
});

console.log(brad);

console.log(brad.greeting()); */


/* // 048 ES6 CLASSES
class Person1 {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }

    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMerried(newLastName) {
        this.lastName = newLastName;
    }

    static addNumbers(x, y) {
        return x + y;
    }
}

const mary = new Person1('Yorzoda', 'Mahmadsaid', '11-13-1990');

console.log(mary);
console.log(mary.greeting());
console.log(mary.calculateAge());

mary.getsMerried('Jonon');
console.log(mary);

console.log(Person1.addNumbers(1, 2)); */

/* // 049 SUB CLASSES 
class Person1 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person1 {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName);

        this.phone = phone;
        this.memberdhip = membership;
    }

    static getMembershipCost() {
        return 'Hello Mahmadsaid';
    }
}

const john = new Customer('John', 'Doe', '333-333-333', 'Standart');

console.log(john.greeting());

console.log(Customer.getMembershipCost()) */

/* // 050 - 053 ADD BOOK TO LIST
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn; 
}

function UI() {}

UI.prototype.addBookToList = function(book) {
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${book.title}<td>
    <td>${book.author}<td>
    <td>${book.isbn}<td>
    <td><a href="#" class="delete">x<td>
    `;

    list.appendChild(row);
}

UI.prototype.showAlert = function(message, className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);
    setTimeout(function() {
        document.querySelector('.alert').remove();
    }, 3000)
}

UI.prototype.deleteBook = function(target) {
    if(target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}


UI.prototype.clearFields = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

document.getElementById('book-form').addEventListener('submit', function(e) {
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;

    const book = new Book(title, author, isbn);
    
    const ui = new UI();

    if(title === '' || author === '' || isbn === '') {
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        ui.addBookToList(book);
        ui.showAlert('Book added!', 'success');
        ui.clearFields();
    }

    e.preventDefault();
})

document.getElementById('book-list').addEventListener('click', function(e) {

    const ui = new UI();
    ui.deleteBook(e.target);
    ui.showAlert('Book removed!', 'success');


    e.preventDefault();
}) */

// 054-055 CONVERT TO ES6 CLASSES

/* class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {
        const list = document.getElementById('book-list');
        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">x</td>
        `;

        list.appendChild(row);
    }

    showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000)
    }

    deleteBook(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

class Store {
    static getBooks() {
        let books;
        if(localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static displayBooks() {
        const books = Store.getBooks();
        books.forEach(function(book) {
            const ui = new UI;
            ui.addBookToList(book);
        });
    }

    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = Store.getBooks();
        books.forEach(function(book, index) {
            if(book.isbn === isbn) {
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}

document.addEventListener('DOMContentLoaded', Store.displayBooks);

document.getElementById('book-form').addEventListener('submit', function (e) {
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;

    const book = new Book(title, author, isbn);
    const ui = new UI();

    if (title === '' || author === '' || isbn === '') {
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        ui.addBookToList(book);
        Store.addBook(book);
        ui.showAlert('Book added!', 'success');
        ui.clearFields();
    }

    e.preventDefault();
})

document.getElementById('book-list').addEventListener('click', function (e) {
    const ui = new UI();
    ui.deleteBook(e.target);
    ui.showAlert('Book removed!', 'success');
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    e.preventDefault();
}) */

/* // 058 AJAX & XHR METHODS

document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    const XHR = new XMLHttpRequest();
    XHR.open('GET', 'data.txt', true);

    // console.log('ReadyState', XHR.readyState);

    XHR.onprogress = function() {
        console.log('ReadyState', XHR.readyState);
    }

    XHR.onload = function() {
        console.log('ReadyState', XHR.readyState);
        if(this.status === 200) {
            // console.log(this.responseText);
            document.getElementById('output').innerHTML = `
            <h1>${this.responseText}</h1>
            `;
        }
    }

     XHR.onreadystatechange = function() {
        console.log('ReadyState', XHR.readyState);
        if(this.status === 200 && this.readyState === 4) {
            console.log(this.responseText);
        }
    } 

    XHR.onerror = function() {
        console.log('ReadyState', XHR.readyState);
    }

    XHR.send();

    //  readyState values
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready 
} */

// 059 WORKING WITH AJAX AND JSON

/* document.getElementById('button1').addEventListener('click', loadCustomer);

document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomer(e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    xhr.onload = function() {
        if(this.status === 200) {
            const customer = JSON.parse(this.responseText);
            const output = `
            <ul>
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Company: ${customer.company}</li>
                <li>Phone: ${customer.phone}</li>
            </ul>`;

            document.getElementById('customer').innerHTML = output;
        }
    }

    xhr.send();
}

function loadCustomers(e) {
    const xhr = new XMLHttpRequest();
    

    xhr.open('GET', 'customers.json', true);

    xhr.onload = function() {
        if(this.status === 200) {
            const customers = JSON.parse(this.responseText);

            let output = '';

            customers.forEach(function(customer) {
                output += `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>`;
            });
            
            document.getElementById('customers').innerHTML = output;
        }
    }


    xhr.send();
} */

/* // 060 GETTING DATA FROM AN EXTERNAL API
document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
    const number = document.getElementById('number').value;
    
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);
            
            let output = '';

            if(response.type === 'success') {
                 response.value.forEach(function(joke) {
                    output += `<li>${joke.joke}</li>`
                 });
            } else {
                output += '<li>Somthing went wrong</li>';
            }

            document.querySelector('.jokes').innerHTML = output;
        }

    }


    xhr.send();

    e.preventDefault();
} */


/* // 062 CALLBACK FUNCTION

const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function createPost() {
    setTimeout(function(post) {
        posts.push(post); 
    }, 2000);
}

function getPosts() {
    setTimeout(function() {
        let output = '';
        posts.forEach(function(post) {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'});

getPosts();

function createPost(post, callback) {
    setTimeout(function() {
        posts.push(post); 
        callback();
    }, 2000);
}

function getPosts() {
    setTimeout(function() {
        let output = '';
        posts.forEach(function(post) {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'}, getPosts); */


/* // 63 CUSTOM AJAX LIBRARY PART 1
// 64 CUSTOM HTTP LIBRARY (AJAX WITH CALLBACK PART 2)

function easyHTTP() {
    this.http = new XMLHttpRequest;
}

easyHTTP.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);

    let self = this;
    this.http.onload = function() {
        if(self.http.status === 200) {
           callback(null, self.http.responseText);
        } else {
            callback('Error: ', + self.http.status);
        }
    }

     this.http.send();
}
 
const http = new easyHTTP;

http.get('https://jsonplaceholder.typicode.com/posts', 
function(err, posts) {
    if(err) {
       console.log(err);  
    } else {
        console.log(posts);
    }
    console.log(posts);
});
easyHTTP.prototype.posts = function(url, data, callback) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');
    
    let self = this;
    this.http.onload = function() {
    callback(null, self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}


const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};

http.posts('https://jsonplaceholder.typicode.com/posts', data, 
function(err, post) {
    if(err) {
        console.log(err);  
        } else {
        console.log(post);
        }
});
easyHTTP.prototype.put = function(url, data, callback) {
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');
    
    let self = this;
    this.http.onload = function() {
    callback(null, self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}

http.put('https://jsonplaceholder.typicode.com/posts/5', data, 
function(err, post) {
    if(err) {
        console.log(err);  
        } else {
        console.log(post);
        }
});

easyHTTP.prototype.delete = function(url, callback) {
    this.http.open('DELETE', url, true);

    let self = this;
    this.http.onload = function() {
        if(self.http.status === 200) {
           callback(null, 'Post deleted');
        } else {
            callback('Error: ', + self.http.status);
        }
    }

    this.http.send()
}

http.delete('https://jsonplaceholder.typicode.com/posts/1', 
function(err, response) {
    if(err) {
        console.log(err);  
        } else {
        console.log(response);
        }
}); */


/* // 65 ES PROMISES

const posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post two', body: 'This is post two'}
];

function createPost(post) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            posts.push(post);

            const error = false;

            if(!error) {
                resolve();
            } else {
                reject('Error: Somthing went wrong');
            }
        }, 2000)
    });
}

function getPosts() {
    setTimeout(function() {
        let output = '';
        posts.forEach(function(post) {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({title: 'Post three', body: 'This is post three'}).then(getPosts)
.catch(function(err) {
    console.log(err);
}); */
/* // 66 FETCH API

document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

function getExternal() {
    fetch('https://api.github.com/users')
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data); 
        let output = '';
        data.forEach(function(user) {
            output += `
            <li>${user.login}</li>
            `
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(function(err) {
        console.log(err);
    })
}

function getJson() {
    fetch('posts.json')
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data); 
        let output = '';
        data.forEach(function(post) {
            output += `
            <li>${post.title}</li>
            <li>${post.body}</li>
            `
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(function(err) {
        console.log(err);
    })
}

function getText() {
    fetch('test.txt')
    .then(function(res) {
        return res.text();
    })
    .then(function(data) {
        console.log(data); 
        document.getElementById('output').innerHTML = data;
    })
    .catch(function(err) {
        console.log(err);
    })
} */

/* // 67 ARROW FUNCTIONS

const sayHello = function() {
    console.log('function one');
}

const sayHello = () => {
    console.log('function two');
}

const sayHello = () => console.log('function three');

const sayHello = () => 'function four';

const sayHello = function() {
    return 'function five';
}

const sayHello = () => ({msg: 'Hello'});

const sayHello = name => console.log(`Hello ${name}`);

const sayHello = (name, text) => console.log(`Hello ${name}. May i say ${text}`);

sayHello('Mahmadsaid', 'Hello');

const users = ['Said', 'Navruz', 'Behruz'];

const nameLengths = users.map(function(name) {
    return name.length;
});

const nameLengths = users.map(name => {
    return name.length;
});

const nameLengths = users.map(name => name.length);

console.log(nameLengths); */

// 68 CUSTOM HTTP LIBRARY (FETCH WITH PROMISES) -PART 3

/*class EasyHTTP {

    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }

    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }

    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }

    delete(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(() => resolve('Resource deleted...'))
                .catch(err => reject(err));
        });
    }
}

const http = new EasyHTTP;

const data = {
    name: 'Mahmadsaid',
    username: 'Yorzoda',
    email: 'said@mail.com'
}*/

/*http.get('http://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

http.post('http://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

http.put('http://jsonplaceholder.typicode.com/users/2', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

http.delete('http://jsonplaceholder.typicode.com/users/2', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));*/


// 69 ASYNC AWAIT

/*async function myFunction() {

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello Mahmadsaid'), 2000);
    });

    const error = true;

    if(!error) {
        const res = await promise;
        return res;
    } else {
        await Promise.reject(new Error('Something went wrong'));
    }


}

myFunction()
    .then(res => console.log(res))
    .catch(err => console.log(err));*/

/*async function getUsers() {
    const response = await fetch('http://jsonplaceholder.typicode.com/users');

    const data = await response.json();

    return data;
}

getUsers().then(users => console.log(users));*/

/*// 70 CUSTOM HTTP LIBRARY, FETCH WITH ASYNC AWAIT - PART 4

class EasyHTTP {

   async get(url) {
      const response = await fetch(url);
      const resData = await response.json();
      return resData;
    }

   async post(url, data) {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
       const resData = await response.json();
       return resData;
    }

   async put(url, data) {
           const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
       const resData = await response.json();
       return resData;
    }

   async delete(url, data) {
           const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
       const resData = await 'Response deleted...';
       return resData;
    }
}

const http = new EasyHTTP;

const data = {
    name: 'Mahmadsaid',
    username: 'Yorzoda',
    email: 'said@mail.com'
}

http.get('http://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

http.post('http://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

http.put('http://jsonplaceholder.typicode.com/users/2', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

http.delete('http://jsonplaceholder.typicode.com/users/2', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));*/

// 08 API PROJECT
// 71 GITHUB FINDER PART 1 - INTRO UI

// class GitHub {
//     constructor() {
//         this.client_id = '5a21914c96cb6c2218ad';
//         this.client_secret = 'ad9071b16bc218b9b9431f1b7b8950487e4243f6';
//         this.repos_count = 5;
//         this.repos_sort = 'created: asc';
//     }
//
//     async getUser(user) {
//         const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
//         const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
//
//         const profile = await profileResponse.json();
//         const repos = await repoResponse.json();
//
//         return {
//             profile,
//             repos
//         }
//     }
// }
//
// class UI {
//     constructor() {
//         this.profile = document.getElementById('profile');
//     }
//
//     showProfile(user) {
//         this.profile.innerHTML = `
//         <div class="card card-body mb-3">
//             <div class="row">
//                 <div class="col-md-3">
//                     <img src="${user.avatar_url}" alt="img" class="img-fluid mb-2">
//                     <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View profile</a>
//                 </div>
//                 <div class="col-md-9">
//                     <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
//                     <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
//                     <span class="badge badge-success">Followers: ${user.followers}</span>
//                     <span class="badge badge-info">Following: ${user.following}</span>
//                     <br><br>
//                     <ul class="list-group">
//                         <li class="list-group-item">Company: ${user.company}</li>
//                         <li class="list-group-item">Website/Blog: ${user.blog}</li>
//                         <li class="list-group-item">Location: ${user.location}</li>
//                         <li class="list-group-item">Member Since: ${user.created_at}</li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//         <h3 class="page-heading mb-3">Latest Repos</h3>
//         <div id="repos"></div>`;
//     }
//
//     showRepos(repos) {
//         let output = '';
//
//         repos.forEach(function(repo) {
//             output += `
//                 <div class="card card-body mb-2">
//                     <div class="row">
//                         <div class="col-md-6">
//                             <a href="${repo.html_url}" target="_blank">${repo.name}</a>
//                         </div>
//                         <div class="col-md-6">
//                             <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
//                             <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
//                             <span class="badge badge-success">forks: ${repo.forks_count}</span>
//                         </div>
//                     </div>
//                 </div>
//             `;
//         });
//
//         document.getElementById('repos').innerHTML = output;
//     }
//
//     showAlert(message, className) {
//         this.clearAlert();
//         const div = document.createElement('div');
//         div.className = className;
//         div.appendChild(document.createTextNode(message));
//         const container = document.querySelector('.searchContainer');
//         const search = document.querySelector('.search');
//         container.insertBefore(div, search);
//         setTimeout(() => {
//             this.clearAlert();
//         }, 3000);
//     }
//
//     clearAlert() {
//         const currentAlert = document.querySelector('.alert');
//
//         if(currentAlert) {currentAlert.remove();}
//     }
//
//     clearProfile() {
//         this.profile.innerHTML = '';
//     }
// }
//
// const github = new GitHub;
//
// const ui = new UI;
//
// const searchUser = document.getElementById('searchUser');
//
// searchUser.addEventListener('keyup', (e) => {
//
//     const userText = e.target.value;
//
//     if(userText !== '') {
//         github.getUser(userText)
//             .then(data => {
//
//                 if(data.profile.message === 'Not Found') {
//                     ui.showAlert('User not found', 'alert alert-danger');
//                 } else {
//                     ui.showProfile(data.profile);
//                     ui.showRepos(data.repos);
//                 }
//             })
//     } else {
//         ui.clearProfile();
//     }
// });


// 80 ERROR HANDLING WITH TRY CATCH

/*const user = {email: 'said@mail.ru'};

try {
    // myFunction();

    // null.mufunction();

    if(!user.name) {
        // throw 'User has no name';
        throw new SyntaxError('User has no name');
    }

} catch(err) {
    console.log(`User error: ${err.message}`);
} finally {
    console.log('Finally runs regardless of result');
}

console.log('Program continues...');*/

// 81 REGULAR EXPRESSIONS PART 1 EVALUATION FUNCTION

// let re;
// re = /hello/;
// re = /hello/i;
// re = /hello/g;

// console.log(re);
// console.log(re.source);

// const result = re.exec('said hello world');
//
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// const result = re.test('hello');
// console.log(result);

// const str = 'Hello there';
// const result = str.match(re);
// console.log(result);

// const str = 'Said hello there';
// const result = str.search(re);
// console.log(result);

// const str = 'hello there';
// const newStr = str.replace(re, 'Hi');
// console.log(newStr);

// 82-83 REGULAR EXPRESSION PART 2 METACHARACTER SYMBOLS

// let re;
// re = /hello/;
// re = /hello/i;
//
// re = /^h/i;
// re = /^world$/i;
//
// re = /gr[ae]y/i;
//
// const str = 'Gray';
//
// const result = re.exec(str);
// console.log(result);
//
// function reTest(re, str) {
//     if(re.test(str)) {
//         console.log(`${str} matches ${re.source}`);
//     } else {
//         console.log(`${str} does not match ${re.source}`);
//     }
// }
//
// reTest(re, str);

/*// 85 REGULAR EXPRESSION FORM VALIDATION PROJECT

document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
    const name = document.getElementById('name');
    const re = /^[a-zA-Z]{2,10}$/;

    if(!re.test(name.value)) {
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}

function validateZip() {
    const zip = document.getElementById('zip');
    const re = /^[0-9]{5}(-[0-9]{4})?$/;

    if(!re.test(zip.value)) {
        zip.classList.add('is-invalid');
    } else {
        zip.classList.remove('is-invalid');
    }
}

function validateEmail() {
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+).([a-zA-Z]{2,5})$/;

    if(!re.test(email.value)) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }
}

function validatePhone() {
    const phone = document.getElementById('phone');
    const re = /^[+]*[(]{0, 1}[0-9]{1,4}[)]{0, 1}[-\s\./0-9]*$/g;

    if(!re.test(phone.value)) {
        phone.classList.add('is-invalid');
    } else {
        phone.classList.remove('is-invalid');
    }
}*/




















































