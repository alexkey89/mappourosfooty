"use strict";

var mainAppController = angular.module('mainAppController', []);


//Details controller
mainAppController.controller('mainCtrl', ['$scope', function ($scope) {


	$scope.msg = "Mappouros";
	  
	  $scope.geolocation = function(){
	   
	  }

	$scope.pitches = ["dimos", "nuevo campo", "paeek"]


}]);