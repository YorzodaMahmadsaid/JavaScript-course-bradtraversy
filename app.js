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


// 013 Object literals






