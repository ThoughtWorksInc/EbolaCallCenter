'use strict';

describe('ContrivedExampleService', function () {

  it('should square a number', function () {
    var result = ContrivedExampleService.squareNumber(3);
    expect(result).toEqual(9);
  });

  it('should concat strings', function () {
    var result = ContrivedExampleService.concatStrings("a very silly ", "example");
    expect(result).toEqual("a very wrong example");
  });

  // PhantomJS 1.9.8 (Mac OS X) ContrivedExampleService should concat strings FAILED
  // Expected 'a very silly example' to equal 'a very wrong example'.
  // PhantomJS 1.9.8 (Mac OS X): Executed 5 of 5 (1 FAILED) (0.002 secs / 0.019 secs)

});
