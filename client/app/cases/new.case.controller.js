'use strict';

angular.module('ebolaCallCenterApp')
    .controller('NewCaseCtrl', function ($scope, $http, $location, caseService) {
        $scope.addCase = function(hwCase) {
            if ($scope.myForm.$valid) {
                var newCase = caseService.generateNewCase();
                newCase = angular.extend(newCase, hwCase);
                $http.post('/api/cases/', angular.copy(newCase)).then(function() {
                    $location.url('/cases/');
                });
            }
        };
    });
