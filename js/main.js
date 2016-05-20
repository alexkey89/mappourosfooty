"use strict";

var mainAppController = angular.module('mainAppController', []);


//Details controller
mainAppController.controller('mainCtrl', ['$scope','$http', function ($scope, $http) {


$scope.pitches = ["Dimos Strovolou", "Nuevo Campo", "PAEEK", "City Gipeda", "Keravnos"]

$scope.getGeoLocation = function(){

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
      $scope.$apply(function(){
        $scope.position = position;
        //console.log($scope.position)
      });
    });
  }

  $http.get('http://maps.google.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&sensor=false').success(function(mapData) {
      angular.extend($scope, mapData);
      $scope.mapData = mapData
      console.log($scope.mapData.results[0].formatted_address)
    });

}

}]);


//Details controller
mainAppController.controller('DetailsController', ['$scope','$routeParams', function ($scope, $routeParams) {


  //determine which Recipe
  $scope.whichpitch = $routeParams.pitchId;



}]);