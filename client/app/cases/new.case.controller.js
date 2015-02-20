'use strict';

angular.module('ebolaCallCenterApp')
    .controller('NewCaseCtrl', function ($scope, $http, $location, caseService) {
        $scope.addCase = function(hwCase) {
            if ($scope.myForm.$valid) {
                hwCase.id = caseService.generateUniqueID();
                hwCase.manager = caseService.assignManager(hwcase.region);
                $http.post('/api/cases/', angular.copy(hwCase)).then(function() {
                    $location.url('/cases/');
                });
            }
        };
    });
