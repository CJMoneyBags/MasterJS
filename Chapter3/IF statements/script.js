// if Statements
// const age = 25;

// if(age >  20){
//     console.log('you are over 20 years old');
// }

// const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

// if (ninjas.length > 4){
//     console.log("that's a lot of ninjas");
// }


// else if statements
// const password = 'P@ss';

// if(password.length >= 12){
//     console.log('that password is mighty strong');
// }else if(password.length >= 8){
//     console.log('that password is long enough!');
// }else{
//     console.log('password is not long enough');
// }


// logical operators - OR || and AND &&
// const password = 'P@ss12';

// if(password.length >= 12 && password.includes('@')){
//     console.log('that password is mighty strong');
// }else if(password.length >= 8 || password.includes('@') && password.length >= 5){
//     console.log('that password is strong enough!');
// }else{
//     console.log('password is not strong enough');
// }



// logical NOT (!)

// let user = false;

// if(!user){
//     console.log('you must be logged in to continue');
// }

// console.log(!true);
// console.log(!false);


// break and continue

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for(let i = 0; i < scores.length; i++){

//     if(scores[i] === 0){
//         continue;
//     }

//     console.log('your score: ', scores[i]);

//     if(scores[i] === 100){
//         console.log('congrats, you got the top score')
//         break;
//     }
// }


// switch statements
// const grade = 'P';

// switch(grade){
//     case 'A':
//         console.log('you got an A!');
//         break;
//     case 'B':
//         console.log('you got an B!');
//         break;
//     case 'C':
//         console.log('you got an C!');
//         break;
//     case 'D':
//         console.log('you got an D!');
//         break;
//     default:
//         if(grade === 'F'){
//             console.log('you failed!');
//         }else {
//         console.log('invalid grade');

//         }
// } 


// variables & block scope
const age = 30;
// let age = 50; // gets an error can't redefine 

if(true){
    const age = 40; // does work because of scope
    const name = 'shaun'
    console.log('inside 1st code block', age, name);

    if(true){
        const age = 50;
        console.log('inside 2nd code block', age);

    }
}

console.log('outside code block', age, name);
