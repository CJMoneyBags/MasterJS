


// // function expression doesn't do hoisting should be use for cleaner code.
// const speak = function(){
//     console.log('good day!');
// }; // end of function expression

// greeet();
// greeet();
// greeet();

// speak();
// speak();
// speak();

// // function declaration does hoisting could cause messy cocde.
// function greeet(){
//     console.log('hello there');
// }


// arguments & parameters

// const speak = function(name = 'luigi', time = 'night'){
//     console.log(`good ${time} ${name}`);
// };

// // console.log(name); // won't work varible out of scope.

// speak();
// speak('Chris');


// returning values
// const calcArea = function(radius){
//     return 3.14 * radius**2;
    
// };

// const area = calcArea(5);
// console.log(area);

// const calcVol = function(area){

// };


// arrow functions

// const calcArea = (radius) => 3.14 * radius**2;
// ;

// const area = calcArea(5);
// console.log(area);


// practise arrow functions

// const greet = function(){
//     return 'hello, world';
// }

// const greet = () => 'hello, world';
// const results = greet();
// console.log(results);

// const bill = function(products, tax){
//     let total = 0;
//     for (let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

// const bill = (products, tax) => {
//     let total = 0;
//     for (let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

// console.log(bill([10,15,30], 0.2));



// const names = 'shaun';

// // functions

// const greet = () => 'hello';

// let resultOne = greet();
// console.log(resultOne);

// // methods

// let resultTwo = names.toUpperCase();
// console.log(resultTwo);



// callbacks & foreach

// const myFunc = (callbackFunc) => {
//     // do something
//     let value = 50;
//     callbackFunc(value);
// };

// myFunc(value => {
//     // do something
//     console.log(value);
// });

// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`)
// };

// people.forEach(logPerson);

// get a reference to the 'ul'
const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people.forEach(person => {
    // create html template
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;