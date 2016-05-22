"use strict";

var mainAppController = angular.module('mainAppController', []);


//Details controller
mainAppController.controller('mainCtrl', ['$scope','$http', function ($scope, $http) {


$scope.pitches = [{"name":"Dimos Strovolou", "img":"dimos_strovolou.png"},{"name":"Nuevo Campo"},{"name":"PAEEK"},{"name":"City Gipeda"}, {"name":"Keravnos"},{"name":"parko akropolis"}]

$scope.getGeoLocation = function(){

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
      $scope.$apply(function(){
        $scope.position = position;
      });
    });
  }

}

}]);


//Details controller
mainAppController.controller('DetailsController', ['$scope','$routeParams', function ($scope, $routeParams) {

$scope.pitches = [{"name":"Dimos Strovolou", "img":"dimos_strovolou.png"},{"name":"Nuevo Campo"},{"name":"PAEEK"},{"name":"City Gipeda"}, {"name":"Keravnos"},{"name":"parko akropolis"}]
  
  //determine which Recipe
  $scope.whichpitch = $routeParams.pitchId;



}]);