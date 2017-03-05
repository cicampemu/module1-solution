(function () {
'use strict';

angular.module('lunchChecker', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$window'];

function LunchCheckController($scope, $window) {
  
  $scope.listAssessor = function () {
  	
  	var stringToSplit = $scope.list;
  	var warning = "Please enter data first.";

  	if(stringToSplit == null || stringToSplit.trim() == ""){
  		$window.alert(warning);
  	} else {
  		var splittedArray = stringToSplit.split(',');
  		if(splittedArray.length <= 3) {
  			$scope.message = "Enjoy!";
  		} else {
  			$scope.message = "Too much!";
  		}
  	}
  	
  };
  
}

})();
