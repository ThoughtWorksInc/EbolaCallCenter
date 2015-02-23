'use strict';

describe('caseService', function () {

  beforeEach(module('ebolaCallCenterApp'));

  var caseService, workerService;

  beforeEach(function() {
    inject(['caseService', function(_caseService_) {
      caseService = _caseService_;
    }])
  });

  it('should increment id generation by 1', function () {
    var firstNewCase = caseService.generateNewCase();
    var secondNewCase = caseService.generateNewCase();

    expect(firstNewCase.id).toEqual("CASE-100");
    expect(secondNewCase.id).toEqual("CASE-101");
  });

  it('should assign next available health worker', inject(function (workerService) {
    spyOn(workerService, 'getFreeHealthWorker').andReturn('Tim');
    var firstNewCase = caseService.generateNewCase();

    expect(workerService.getFreeHealthWorker).toHaveBeenCalled();
    expect(firstNewCase.healthWorker).toEqual('Tim');
  }));
});
