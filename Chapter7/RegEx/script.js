const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');

form.addEventListener('submit', e =>{
    e.preventDefault();
    // console.log(username.value);
    // console.log(form.User.value); // uses Name: 'User'
    // console.log(form.username.value); /// uses id: 'username'

});
// testing RegEx
const username = '1233shaunp';
const pattern = /^[a-z]{6,}$/;

// let result = pattern.test(username);

// if(result){
//     console.log('regex test pase :)');

// }
// else{
//     console.log('regex test failed :(');
// }

let result = username.search(pattern);

console.log(result);