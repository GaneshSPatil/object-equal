var expect = require('chai').expect;

var compare = require('../compare.js');

describe('Compare Objects', function() {
  it('should compare empty objects', function() {
    expect(compare({}, {})).to.be.true;
  });

  it('should compare objects with same reference', function() {
    var actual = {'foo': 'bar'};
    var expected = actual;

    expect(compare(actual, expected)).to.be.true;
  });
  
  it('should compare objects with same values but different reference', function() {
    var actual = {'foo': 'bar'};
    var expected = {'foo': 'bar'};

    expect(compare(actual, expected)).to.be.true;
  });

  it('should compare objects with complex values', function() {
    var actual = {'foo': [1, 2, 3], 'bar': {'key' : 'value'} };
    var expected = {'foo': [1, 2, 3], 'bar': {'key' : 'value'} };

    expect(compare(actual, expected)).to.be.true;
  });

  it('should handle very complex objects', function() {
    var actual = {
      'foo' : {
        'bar' : {
          'baz' : {
            'some' : ['thing']
          },
          'key' : 123
        },
        'key' : 123
      },
      'key' : 123
    };

    var expected = {
      'foo' : {
        'bar' : {
          'baz' : {
            'some' : ['thing']
          },
          'key' : 123
        },
        'key' : 123
      },
      'key' : 123
    };

    expect(compare(actual, expected)).to.be.true;
  });

  it('should handle self references', function() {
    var actual = {};
    actual.self = actual;

    var expected = {};
    expected.self = expected;

    expect(compare(actual, expected)).to.be.true;
  });

  it('should compare objects with values as array of complex objects', function() {
    var actual = {
      'key' : [ {'value': [{a:1, b:['a', 'b', 'c'], c:3} ] } ]
    };

    var expected = {
      'key' : [ {'value': [{a:1, b:['a', 'b', 'c'], c:3} ] } ]
    };
    expect(compare(actual, expected)).to.be.true;
  });

});