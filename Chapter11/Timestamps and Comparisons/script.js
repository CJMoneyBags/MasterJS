// timestamps

const before = new Date('February 1 2019 7:30:59');
const now = new Date();

// console.log(now.getTime(), before.getTime());
// console.log(before.getTime());

const diff = now.getTime() - before.getTime();

console.log(diff);

const mins = Math.round(diff / 1000 / 60);

console.log(mins);

const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);
const years = Math.round(days / 365);

console.log(days);
const test = new Date()
console.log(test.getTime());

// convertin timestamps into date objects
const timestamp = 1707494941028;
console.log(new Date(timestamp))