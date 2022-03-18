const cacheCall = require('../cacheFunction.js');


cb = x => x+" MountBlue";
let argumentUsed = cacheCall(cb);

console.log(argumentUsed.invokeCB(5));
console.log(argumentUsed.invokeCB(10)); 
console.log(argumentUsed.invokeCB(5)); 