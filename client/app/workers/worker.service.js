
angular.module('ebolaCallCenterApp')
  .service('workerService', function() {

    this.getFreeHealthWorker = function() {
      var i = Math.floor( Math.random() * ( 1 + 3 - 0 ) ) + 0;
      return managers[i];
    }

    var workers = [
      "Chelsea", 
      "Tim", 
      "Jim", 
      "Michael"
    ];
  });
