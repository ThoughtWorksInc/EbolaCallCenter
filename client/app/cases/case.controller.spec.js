'use strict';

describe('Controller: CaseCtrl', function () {

  beforeEach(module('ebolaCallCenterApp'));

  var CaseCtrl,
      scope;

  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    scope = $rootScope.$new();
    CaseCtrl = $controller('CaseCtrl', {
      $scope: scope,
      cases: ['Case 1', 'Casse 2', 'Case 3', 'Case 4']
    });
  }));

  it('should attach a list of things to the scope', function () {
    expect(scope.cases.length).toBe(4);
  });
});
