var calc = require('./../calc');
var expect = require('chai').expect;

describe('calc test', function() {
  it ('should sum return 4', function(done) {
    var result = calc.sum(2,2);
    expect(result).to.equal(4);
    done();
  });
});