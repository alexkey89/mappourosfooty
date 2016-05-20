"use strict";

var mainAppController = angular.module('mainAppController', []);


//Details controller
mainAppController.controller('mainCtrl', ['$scope', function ($scope, $location, $rootScope, filterSettings, db, $http) {


$scope.pitches = ["Dimos Strovolou", "Nuevo Campo", "PAEEK", "City Gipeda", "Keravnos"]


}]);