
angular.module('ebolaCallCenterApp')
  .service('caseService', function(workerService) {
    var workingIDNumber = 100;

    this.generateNewCase = function (){
      return {
        id: generateId(),
        healthWorker: workerService.getFreeHealthWorker()
      }
    }  
    
    var generateId = function() {
      var generatedCaseID = "CASE-" + workingIDNumber
      workingIDNumber = workingIDNumber + 1;
      return generatedCaseID;
    };
  });
