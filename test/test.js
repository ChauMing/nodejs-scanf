const assert = require('assert')
const read = require('../lib/readStdin');
const {parse, matchFormatString} = require('../lib/parse');
const {sscanf, sscanfSync, scanf, scanfSync } = require('../index')


// test parse function
describe('lib/parse', function() {
  describe('#parse', function() {
    it('should array [2017, 3, 6]', function() {
      let [year, month, day] = parse('2017-03-06', '%d-%d-%d');
      assert.equal(2017, year);
      assert.equal(3, month);
      assert.equal(6, day)
    });

    it('should return array [\'chauming\']', function() {
      let [chauming] = parse('hello chauming', 'hello %s');
      assert.equal('chauming', chauming);
    });
  });
});


// test matchFormatString function
describe('lib/parse', function() {
  describe('#matchFormatString', function () {
    it('should return \'hello\'', function() {
      let {value, length} = matchFormatString('hello world', '%s');
      assert.equal('hello', value);
      assert.equal(5, length);
    })
  })
});
