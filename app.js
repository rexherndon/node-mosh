
const fs = require('fs');

// const files = fs.readdirSync('./');
// console.log(files)

fs.readdir('./', function(err, files) {
    if (err) console.log('Error', err);
    else console.log('Result', files);
});










// os demo
// const os = require('os');
// var totalMemory = os.totalmem()
// var freeMemory = os.freemem()
// // template string
// // ES6 /ES2015 : ECMAScript 6
// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);

// path module demo
// const path = require('path');
// var pathObj = path.parse(__filename);
// console.log(pathObj);

// custom module demo
// const log = require('./logger');
// log('message');