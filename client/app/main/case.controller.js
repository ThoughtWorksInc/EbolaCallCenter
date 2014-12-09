'use strict';

angular.module('ebolaCallCenterApp')
    .controller('CaseCtrl', function ($scope, $http) {
        console.log("here!");

        var resetForm = function() {
            $scope.hwCase = {}
        }
        $scope.addCase = function(hwCase) {
            $http.post('/api/things', angular.copy(hwCase));
            resetForm();
            $scope.myForm.$setPristine(); 
        }
    });