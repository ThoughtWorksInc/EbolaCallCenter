'use strict';

angular.module('ebolaCallCenterApp')
    .controller('CaseCtrl', function ($scope, $http) {
        console.log("here!");
        $scope.hwCase = {}
        $scope.addCase = function(hwCase) {
            console.log(hwCase)
            $http.post('/api/things', hwCase);
        }
    });