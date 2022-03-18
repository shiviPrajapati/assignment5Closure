function counterFactory() {

    let counterValue = 0;
  
    function increment() {
      return counterValue+=1;
    }

    function decrement() {
      return counterValue-=1;
    }
   
    return {increment, decrement}

};

module.exports = counterFactory;