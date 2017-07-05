const sum = require('../sum.js');
const {expect,assert} = require('chai');

// Reference http://chaijs.com/ for questions

describe ('Sum', function() {

    it('Should be a function', function() {
      assert.isFunction(sum, 'sum is not a function');
    });

    it('Should return 0 if no arguments are passed in.', function() {
      assert.equal(sum(),0);
      assert.equal(sum([]), 0);
    });

    it('Should add positive numbers', function () {
      assert.equal(sum([1,2]), 3);
      assert.equal(sum([1,2,1,3,4]), 11);
      assert.equal(sum([1000,5]), 1005);
      assert.equal(sum([1,1,1,1,1,1,1]), 7);
    });

    it('Should add negative numbers', function () {
      assert.equal(sum([-5,4]), -1);
      assert.equal(sum([-1,-1]), -2);
      assert.equal(sum([1,-1,0]), 0);
      assert.equal(sum([1,2,3,4,5,6,-6]), 15);
      assert.equal(sum([0.6,1000,0.4]), 1001);
    });

    it('Should add decimals', function () {
      assert.equal(sum([0.1,-0.2]), -0.1);
      assert.equal(sum([0.045,0.1,0.0051]), 0.1501);
      assert.equal(sum([0.3,0.7]), 1);
      assert.equal(sum([0.1,-0.1]), 0);
      assert.equal(sum([1000,-0.9]), 999.1);
    });

    it('Should return errors for incorrect data input', function () {
      assert.equal(sum('string'), 'Input should be an array of numbers');
      assert.equal(sum(1), 'Input should be an array of numbers');
      assert.equal(sum({}), 'Input should be an array of numbers');
      assert.equal(sum(['string1', 'string2']), 'Input should be an array of numbers');
      assert.equal(sum([3, 'string2']), 'Input should be an array of numbers');
      assert.equal(sum([3, [], 5]), 'Input should be an array of numbers');
    });

});
