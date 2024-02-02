// object literals

// let user = {
//     name: "crystal",
//     age: 30,
//     email: 'crystal@thenetninja.co.uk',
//     locaion: 'berlin',
//     blogs: [
//         {title: 'why mac & cheese rules', likes: 30},
//         {title: '10 things to make with marmite', likes: 50}],
//     "favorit book": 'lotr',
//     login: function(){
//         console.log('the user logged in');
//     },
//     logout(){
//         console.log('the user logged out');
//     },
//     logBLogs(){
//       console.log('this user has written the following blogs:');
//       this.blogs.forEach(blog => {
//         console.log(blog.title, blog.likes);
        
//       });
//     }
// };

// console.log(user.name);


// user.age = 35;
// console.log(user.age);

// console.log(user['name']);

// user['name'] = 'chun-li';
// console.log(user['name']);
// console.log(user["favorit book"]);


//use of object custom method
// user.login();
// user.logout();

// use of 'this' in a method
// user.logBLogs();




// MATH OBJECT

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.abs(-4));

// const area = 7.7;

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));


// // random numbers
// const randomNumber = Math.random();

// console.log(randomNumber);
// console.log(Math.round(randomNumber * 100) + 1) ; // between '1' and 100, without the + 1 it would be from 0 - 99


//PRIMATIVE VS REFERENCE TYPES

//primative values
// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);
// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);


// reference values

const userOne = {name: 'ryu', age: 30};
const userTwo = userOne;

console.log(userOne, userTwo);
userOne.age = 40;
console.log(userOne, userTwo);
