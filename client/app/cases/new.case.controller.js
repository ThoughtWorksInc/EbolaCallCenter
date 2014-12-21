'use strict';

angular.module('ebolaCallCenterApp')
    .controller('NewCaseCtrl', function ($scope, $http, $location) {
        $scope.addCase = function(hwCase) {
            if ($scope.myForm.$valid) {
                console.log(angular.copy(hwCase));
                $http.post('/api/cases/', angular.copy(hwCase)).then(function() {
                    $location.url('/cases/');
                });
            }
        };
    });