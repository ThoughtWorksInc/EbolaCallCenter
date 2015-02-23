'use strict';

describe('ContrivedExampleService', function () {

  it('should square a number', function () {
    var result = ContrivedExampleService.squareNumber(3);
    expect(result).toEqual(9);
  });

  it('should concat strings', function () {
    var result = ContrivedExampleService.concatStrings("a very silly ", "example");
    expect(result).toEqual("a very silly example");
  });

});
