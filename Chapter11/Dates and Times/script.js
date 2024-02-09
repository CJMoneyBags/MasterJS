// dates & times
const nowTime=  new Date();


console.log(nowTime);

console.log(typeof nowTime);

// year, months, day, times
console.log('getFullYear: ', nowTime.getFullYear());
console.log('getMonth: ', nowTime.getMonth());
console.log('getDate: ', nowTime.getDate());
console.log('getDay: ', nowTime.getDay());
console.log('getHours: ', nowTime.getHours());
console.log('getMinutes: ', nowTime.getMinutes());
console.log('getSeconds: ', nowTime.getSeconds());


//timestamps

console.log('timestamp:', nowTime.getTime());

// date strings
console.log(nowTime.toDateString());
console.log(nowTime.toDateString());
console.log(nowTime.toLocaleString());


