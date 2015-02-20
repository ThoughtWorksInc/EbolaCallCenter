
angular.module('ebolaCallCenterApp')
  .service('managersService', function() {

    this.getAvailable = function() {
      var i = Math.floor( Math.random() * ( 1 + 3 - 0 ) ) + 0;
      return managers[i];
    }

    var managers = [
      "Chelsea", 
      "Tim", 
      "Jim", 
      "Michael"
    ];
  });
