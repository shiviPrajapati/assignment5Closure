function limitFunctionCallCount(cb, n) {
    
    let counter = n;
    function invoke() {
        if(counter-- > 0){
            return cb();
        }
        else{
            return null;
        }
    }
    return {invoke};

  };

  module.exports = limitFunctionCallCount;