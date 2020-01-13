// // Мы рассмотрели 3 функции браузера для взаимодействия с пользователем это
// alert();
// prompt();
// confirm();

// // И один функция для взаимодействия с разрабодчиком это
// console.log();

// alert('Ассалому алейкум');

// var text = "Ассалому алекум";
// alert(text);

// var age = prompt('Ту чанд солаи?');
// console.log('Ту', age, 'солаи!');

// var isBoss = confirm("Букаш худути?");
// if(isBoss == true) {
//     alert("Ту букка будай");
// } else{
//     alert("Ту букка набудай");
// }

// console.log('Ассалому алейкум');

// console.log([1, 2, 3, 4]);
// console.log({a:1, b:2, c:3, d:4});
// console.table({a:1, b:2, c:3, d:4});
// console.error('This is some error');
// console.warn('This is a warning');
// console.clear();

// console.log(document);
// console.log(document.querySelector('h1'));
// document.querySelector('h1').style.color = 'red';
// document.querySelector('h1').style.fontSize = '14px';
// document.querySelector('h1').style.fontFamily = 'Roboto';
// document.querySelector('h1').style.fontWeight = '500';
// document.querySelector('h1').style.paddingTop = '10px';
// document.querySelector('h1').style.marginBottom = '15px';
// document.querySelector('h1').style.textAlign = 'center';

// var name = 'Mahmadsaid';
// console.log(name);
// var name = 'Navruzbek';
// console.log(name);

// var status;
// console.log(status);
// status = "married";
// console.log(status);

// var firstName = "Mahmadsaid";  // Camel case 
// var first_name = "Mahmadsaid"; // Underscore
// var FirstName = "Mahmadsaid";  //Pascal case

// let name = 'Mahmadsaid';
// console.log(name);
// name = 'Navruzbek';
// console.log(name);

// function varTest() {
//     var x = 1;
//     if (true) {
//       var x = 2;  // та же переменная!
//       console.log(x);  // 2
//     }
//     console.log(x);  // 2
//   }
  
//   function letTest() {
//     let x = 1;
//     if (true) {
//       let x = 2;  // другая переменная
//       console.log(x);  // 2
//     }
//     console.log(x);  // 1
//   }

// let name;
// name = 'Mahmadsaid';
// console.log(name);
// name = 'Navruzbek';
// console.log(name);

// const status = "married";
// status = "free";

// const person = {
//     name: "Mahmadsaid",
//     age: 30,
//     status: "married",
//     sex: "male"
// }
// person.name = "Navruzbek";
// person.age = 33;
// person.status = "free";
// person.sex = "female";
// console.log(person);

// const numbers = [1, 2, 3, 4, 5];
// numbers.push(6);
// console.log(numbers);

// Primitive Types
// null
// undefined
// Boolean
// Number
// String

// Reference Types
// Array
// Object
// Function

// console.log(typeof(undefined));
// console.log(typeof(1));
// console.log(typeof(true));
// console.log(typeof("name"));
// console.log(typeof(alert));
// console.log(typeof({name: "Mahmadsaid"}));

// let value = 5;
// console.log(value); // 5
// console.log(typeof value); // string
// console.log(value.length); // undefined

// let value;
// value = String(555);
// console.log(value); // 555
// console.log(typeof value); // string
// console.log(value.length); // 3

// let value;
// value = String(4 + 4);
// console.log(value);
// console.log(typeof value);
// console.log(value.length);

// let value;
// value = String(true);
// console.log(value);
// console.log(typeof value);
// console.log(value.length);

// let value;
// value = String(Date());
// console.log(value);
// console.log(typeof value);
// console.log(value.length);

// let value;
// value = String([1, 2, 3, 4, 5]);
// console.log(value);
// console.log(typeof value);
// console.log(value.length);

// let value;
// value = String({name: "Mahmadsaid"});
// console.log(value);
// console.log(typeof value);
// console.log(value.length);

// let value;
// value = Number('5');
// console.log(value);
// console.log(typeof value);
// console.log(value.toFixed(3));

// let value = parseInt('100');
// console.log(typeof value);
// console.log(value);

// const value1 = String(5);
// const value2 = 4;
// const sum = value1 + value2;
// console.log(sum); //54

// const num1 = 125;
// const num2 = 50;
// let val;

// val = num1 + num2;
// val = num1 - num2;
// val = num1 * num2;
// val = num1 / num2;
// val = num1 % num2; 

// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.ceil(2.4);
// val = Math.floor(2.8);
// val = Math.sqrt(81);
// val = Math.abs(-3);
// val = Math.pow(2, 3);
// val = Math.min(2, 33, 23, 24, 4, 5, 19);
// val = Math.max(2, 4, 5, 1, 34, 54);
// val = Math.random();
// val = Math.floor(Math.random()*20);
// console.log(val);

// const firstName = "Yorzoda";
// const lastName = "Mahmadsaid";
// const age = 30;

// let value;
// value = firstName + lastName;
// value = firstName + ' ' + lastName;
// value = "Yorzoda";
// value += " Mahmadsaid"; 
// value = "Ассалому алейкум номи ман " + firstName + " " + lastName + " мебошад" + " ва ман " + age + " сола мебошам";
// value = firstName.length;
// value = firstName.concat(' ', lastName);
// value = firstName.toUpperCase();
// value = lastName.toLowerCase();
// value = firstName[3];
// value = firstName.indexOf('z');
// value = firstName.lastIndexOf('o');
// value = firstName.charAt('1');
// value = firstName.charAt(firstName.length - 1);
// value = firstName.substring(0, 3);
// value = firstName.slice(0, 4);

// let str  = 'Assalomu alykum va rahmatulloi va barakatuh';
// str = 'Assalomu, aleykum, barodari, aziz'
// value = str.split(' ');

// value = str.replace('aziz', 'hubu mehrubon');

// value = str.includes('Assalomu');
// console.log(value);

const name = 'Mahmadsaid';
const age = 30;
const job = "Frontend developer";
const city = "Norak";
let html;

html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li> Job: ' + job + '</li><li>City: ' + city + '</li></ul>'
var name = Mahmadsaid;
var age = 30;
var sex = male; 
