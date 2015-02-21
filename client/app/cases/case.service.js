
angular.module('ebolaCallCenterApp')
  .service('caseService', function() {
    var startingIDNumber = 100;
    this.generateNewCase = function (workerService){
      return {
        id: generateId(),
        heathWorker: workerService.getFreeHealthWorker()
      }
    }  
    var generateID = function() {
      // should have state
       // Maths pick a number bet 100-999
       // "CASE-" + randomid 
       // CASE-\d\d\d
       return "this is a very unique id";
    };
 });
