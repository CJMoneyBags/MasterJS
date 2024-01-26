// strings
console.log('hello, world');

let email = 'mario@thenetninja.co.uk';
console.log(email);

// string concatenation

let firstName = 'Brandon';
let lastName = 'Sanderson';

let fullName = firstName + ' ' + lastName;
console.log(fullName)


// getting characters
console.log(fullName[2]);

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@');
console.log(index);

// common string methods

let email2 = "luigi@thenetninja.co.uk";

let result2 = email.lastIndexOf('n');
console.log(result2);

let sliceResult = email.slice(0,5);
console.log(sliceResult);

let subStrs = email2.substr(4,10);
console.log(subStrs);

let replaceStr = email.replace('m','w');

console.log(replaceStr);

