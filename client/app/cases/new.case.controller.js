'use strict';

angular.module('ebolaCallCenterApp')
    .controller('NewCaseCtrl', function ($scope, $http) {
        var resetForm = function() {
            $scope.hwCase = {};
        };
        $scope.addCase = function(hwCase) {
            if ($scope.myForm.$valid) {
                $http.post('/api/cases/', angular.copy(hwCase));
                resetForm();
                $scope.myForm.$setPristine(); 
            }
        };
    });