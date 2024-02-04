// example 1 - sorting strings
const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

// names.sort();
// names.reverse();
// console.log(names);

//example 2 - sorting numbers
const scores = [10, 50, 20, 5, 35, 70, 45];

// scores.sort();
// scores.reverse();
// console.log(scores);
 
scores.sort((a,b) => a-b);
console.log(scores);

// example 3 - sorting objects
const players = [
    {name: 'mario', score: 20},
    {name: 'luigi', score: 10},
    {name: 'chun-li', score: 50},
    {name: 'yoshi', score: 30},
    {name: 'shaun', score: 70}

];

// const scoreOrder = players.sort((a,b) =>{
//     if(a.score > b.score){
//         return -1
//     }else if(b.score > a.score){
//         return 1;
//     }else{
//         return 0;
//     }
// });

const nameOrder = players.sort((a,b) => {
    if(a.name > b.name){
        return 1;
    }else if(b.name > a.name){
        return -1;
    }
    else{
        return 0;
    }
}); 

// console.log(scoreOrder);
console.log(nameOrder);