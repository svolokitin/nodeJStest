const os = require('os'); //module give info about operation system
const {userName: user, sayHi} = require('./test'); //деструкторизация 

const surname = 'Anton';

console.log(sayHi(surname));
console.log(os.platform(), os.release());

