'use strict';

describe('caseService', function () {

  // load the controller's module
  beforeEach(module('ebolaCallCenterApp'));

  var caseService, workerService;

  // Initialize the service
  beforeEach(function() {
    workerService = jasmine.createSpyObj('workerService', ['getFreeHealthWorker']);
  //  workerService.getFreeHealthWorker.and.returnValue('Tim');

    module('ebolaCallCenterApp', function ($provide) {
      $provide.value('workerService', workerService);
    });

    inject(['caseService', function(_caseService_) {
      caseService = _caseService_;
    }])
  });

  it('should increment id generation by 1', function () {
    var firstNewCase = caseService.generateNewCase();
    var secondNewCase = caseService.generateNewCase();

    expect(firstNewCase.id).toEqual(100);
    expect(secondNewCase.id).toEqual(101);
  });


  it('should assign an available manager in the appropriate region', function () {
    var firstNewCase = caseService.generateNewCase();
    var secondNewCase = caseService.generateNewCase();

    expect(firstNewCase.manager).toBe();
    expect(secondNewCase.manager).toBe();
  });
});
