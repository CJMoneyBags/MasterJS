let ninjas = ['shaun', 'ryu', 'chun-li'];

// ninjas[1] = 'ken';
// console.log(ninjas[1]);

// let ages = [20,25,30,35];
// console.log(ages[2]);

// let random = ['shaun', 'crystal', 30, 20];
// console.log(random);

// console.log(ninjas.length); // out put 3

// array methods

// let result = ninjas.join(',');
// let result = ninjas.indexOf('chun-li');
// let result = ninjas.concat(['ken', 'krystal']);
let result = ninjas.push('ken'); // alters original value called a destructive method
result = ninjas.pop() // takes off the last value
console.log(result);