'use strict';

angular.module('ebolaCallCenterApp')
    .controller('CaseCtrl', function ($scope, cases) {
        $scope.cases = cases;
    });