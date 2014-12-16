'use strict';

describe('Controller: CaseCtrl', function () {

  // load the controller's module
  beforeEach(module('ebolaCallCenterApp'));

  var CaseCtrl,
      scope;
      // $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    // $httpBackend = _$httpBackend_;
    // $httpBackend.expectGET('/api/cases')
    //   .respond(['Case 1', 'Casse 2', 'Case 3', 'Case 4']);

    scope = $rootScope.$new();
    CaseCtrl = $controller('CaseCtrl', {
      $scope: scope,
      cases: ['Case 1', 'Casse 2', 'Case 3', 'Case 4']
    });
  }));

  it('should attach a list of things to the scope', function () {
    // $httpBackend.flush();
    expect(scope.cases.length).toBe(4);
  });
});
