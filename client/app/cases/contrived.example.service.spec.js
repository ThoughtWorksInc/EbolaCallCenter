'use strict';

describe('ContrivedExampleService', function () {

  it('should square a number', function () {
    var result = ContrivedExampleService.squareNumber(3);
    expect(result).toEqual(9);
  });

});
