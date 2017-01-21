const calc = require('./../calc');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('calc test', () => {
  it('should sum return 4', (done) => {
    let mock = sinon.mock(calc);

    mock.expects('sum').yields(null, 4);

    calc.sum(2,2, (err, result) => {
      mock.verify();
      mock.restore();
      expect(result).to.equal(4);
      done();
    });
    // let result = calc.sum(2,2);
    // expect(result).to.equal(4);
    // done();
  });
  it('stub func', (done) => {
    let stub = sinon.stub(calc, 'sum');
    stub.returns(5);

    var result = calc.calc(4,1);

    expect(calc.sum).to.have.been.calledOnce;

    expect(result).to.equal(5);
    stub.restore();
    done();
  })
});