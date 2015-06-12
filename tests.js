var chai = require('chai');
    expect = chai.expect,

    keyMirror = require('./index.js');

describe('keyMirror', function() {

  describe('with object input', function() {
    var map = null;
    before(function() {
      map = keyMirror({a: null, b: undefined, c: 'something', 'd': null});
    });

    it('should accept objects with null values', function() {
      expect(map.a).to.equal('a');
    });

    it('should accept objects with undefined values', function() {
      expect(map.b).to.equal('b');
    });

    it('should accept objects with string values', function() {
      expect(map.c).to.equal('c');
    });

    it('should accept objects with string keys', function() {
      expect(map.d).to.equal('d');
    });
  });

  describe('with array input', function() {
    var map = null;
    before(function() {
      map = keyMirror(['a', 'b', 'c']);
    });

    it('should accept an array of strings', function() {
      expect(map.a).to.equal('a');
    });

  });

  describe('error handling', function() {
    var invokeWith = function(arg) {
      return function() { return keyMirror(arg) };
    }

    it('should not accept null', function() {
      expect(invokeWith(null)).to.throw();
    });

    it('should not accept undefined', function() {
      expect(invokeWith(undefined)).to.throw();
    });

    it('should not accept numbers', function() {
      expect(invokeWith(1)).to.throw();
    });

    it('should not accept strings', function() {
      expect(invokeWith('string')).to.throw();
    });

    it('should accept empty objects', function() {
      expect(invokeWith({})).to.not.throw();
    });

    it('should accept empty arrays', function() {
      expect(invokeWith([])).to.not.throw();
    });

    it('should not accept null in an array', function() {
      expect(invokeWith(['a', null])).to.throw();
    });

    it('should not accept undefined in an array', function() {
      expect(invokeWith(['a', undefined])).to.throw();
    });
  })
});
