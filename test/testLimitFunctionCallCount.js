const callLimitFunction = require('../limitFunctionCallCount.js');

 cb = () => { console.log("Callback invoked") };

 let nTimes = callLimitFunction (cb, 3);

nTimes.invoke();
nTimes.invoke();
nTimes.invoke();
nTimes.invoke();


