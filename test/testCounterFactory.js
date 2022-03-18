const counterCall = require('../counterFactory.js');

let counter = counterCall();
console.log(counter.increment());  
console.log(counter.increment());    
console.log(counter.decrement());  
console.log(counter.increment());  
console.log(counter.increment()); 
console.log(counter.decrement()); 
console.log(counter.decrement()); 

