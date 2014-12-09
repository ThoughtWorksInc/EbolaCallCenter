'use strict';

angular.module('ebolaCallCenterApp')
    .controller('CaseCtrl', function ($scope, $http, $location, cases) {
        $scope.cases = cases;

        var resetForm = function() {
            $scope.hwCase = {}
        }
        $scope.addCase = function(hwCase) {
            $http.post('/api/cases/', angular.copy(hwCase));
            resetForm();
            $scope.myForm.$setPristine();
        }
    });
