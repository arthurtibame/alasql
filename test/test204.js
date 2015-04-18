if(typeof exports === 'object') {
	var assert = require("assert");
	var alasql = require('..');
} else {
	__dirname = '.';
};

describe('Test 204 PRINT', function() {

    it("1. PRINT()", function(done) {
    	var oldconsolelog = console.log;
    	console.log = function(){
    		assert(arguments[0] == '[1,4,9,16]');
    		console.log = oldconsolelog;
    		done();
    	};
    	var data = [1,2,3,4];
        alasql('PRINT SELECT COLUMN _^2 FROM ?',[data]);
    });
});
