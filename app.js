/* // 02 Chapter: JavaScript language fundamentals
// 04 Section: Intro file setup
alert('Hello World!'); */


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


/* // 012 Array and Array methods
const numbers = [23,45,66,67,24,65];
const number2 = new Array(33,55,77,88,85);
const fruits = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date()];

console.log(numbers);
console.log(numbers.length); // 6
console.log(Array.isArray(numbers)); // true
console.log(numbers[0]); // 23
console.log(numbers[3]); // 67
console.log(numbers.indexOf(23)); // 0

console.log(number2);
console.log(number2.length); // 5
console.log(Array.isArray(number2)); // true
console.log(number2[1]); // 55
console.log(number2[2]); // 77
console.log(number2.indexOf(33)); // 0

console.log(fruits);
console.log(fruits.length); // 4
console.log(Array.isArray(fruits)); // true
console.log(fruits[2]); // Orange
console.log(fruits[3]); // Pear
console.log(fruits.indexOf('Apple')); // 0

console.log(mixed);
console.log(mixed.length); // 7
console.log(Array.isArray(mixed)); // true
console.log(mixed[4]); // null
console.log(mixed[5]); // {a:1, b:2}
console.log(mixed.indexOf(4));

var myArray = [1,2,3,4,5,6, 50, 66];
var myArray2 = ['Said','Daler'];
myArray[2] = 100; // replace
myArray.push(200); // add to end
myArray.unshift(50); // add to front
myArray.pop(); // take off from end
myArray.shift() // take off front
myArray.splice(0,1);
myArray.reverse()
myArray = myArray.concat(myArray2);
myArray.sort();
myArray2.sort();
myArray.sort(function(x, y) {return x - y});
myArray.sort(function(x, y) {return y - x});
console.log(myArray);

var array = [10, 20, 30, 40, 50]; 
  
var found = array.find(function(element) { 
  return element > 10; 
}); 

var found = array.find(function(element) { 
  return element < 40; 
}); 
  
console.log(found);  */


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


// 018 General loops