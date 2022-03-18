function cacheFunction(cb) {
	var cache = {};
	function invokeCB(parameter) {
		if (cache.hasOwnProperty(parameter)) {
        return cache[parameter];
        }
        else{
            cache[parameter] = cb(parameter);
            return cache[parameter];
        }
	};

    return {invokeCB}
}

module.exports = cacheFunction;