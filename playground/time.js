var moment = require('moment');

// Jan 1st 1970 00:00:10 am

var date = new Date();

var date = moment();
date.add(100, 'year').subtract(9, 'months');
console.log(date.format('MMM Do, YYYY'));

// 10:35 am
// 6:01 am

moment.locale('th');
var date = moment();
console.log(date.format('MMM Do, YYYY'));
console.log(date.format('h:mm a'))
console.log(date.format('D/M/YYYY'));
console.log(date.format('LLLL'));
// console.log(date.format('D/M, YYYY'));
