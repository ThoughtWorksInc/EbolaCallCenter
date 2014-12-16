'use strict';

angular.module('ebolaCallCenterApp')
    .controller('NewCaseCtrl', function ($scope, $http, $location) {
        $scope.addCase = function(hwCase) {
            if ($scope.myForm.$valid) {
                $http.post('/api/cases/', angular.copy(hwCase)).then(function() {
                    $location.url('/cases/');
                });
            }
        };
    });