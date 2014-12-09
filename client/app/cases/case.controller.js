'use strict';

angular.module('ebolaCallCenterApp')
    .controller('CaseCtrl', function ($scope, $http, $location) {
        var resetForm = function() {
            $scope.hwCase = {}
        }
        $scope.addCase = function(hwCase) {
            $http.post('/api/cases/', angular.copy(hwCase));
            resetForm();
            $scope.myForm.$setPristine();
        }

        // Todo: Replace this with a resolve
        $http.get('/api/cases').then(function(response) {
          $scope.cases =  response.data
        });
    });
