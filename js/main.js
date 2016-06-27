'use strict';

var mainAppController = angular.module('mainAppController', []);

//Details controller
mainAppController.controller('mainCtrl', ['$http', function ($http) {

var vm = this;

vm.pitches = [{"name":"Dimos Strovolou", "img":"dimos_strovolou.png"},{"name":"Nuevo Campo"},{"name":"PAEEK"},{"name":"City Gipeda"}, {"name":"Keravnos"},{"name":"parko akropolis"}]

vm.getGeoLocation = function(){

    $http.get('http://ipinfo.io')
    .then(function(response) {
    	vm.city = response.data.city;
    	vm.region = response.data.region;
    });

  }

}]);

//Details controller
mainAppController.controller('DetailsController', ['$routeParams', function ($routeParams) {

var vm = this;

vm.pitches = [{"name":"Dimos Strovolou", "img":"dimos_strovolou.png"},{"name":"Nuevo Campo"},{"name":"PAEEK"},{"name":"City Gipeda"}, {"name":"Keravnos"},{"name":"parko akropolis"}]
  
  vm.whichpitch = $routeParams.pitchId;

}]);