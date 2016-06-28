'use strict';

var mainAppController = angular.module('mainAppController', []);

//Main controller
mainAppController.controller('mainCtrl', ['$http', function ($http) {

var vm = this;

vm.pitches = [{"name":"Dimos Strovolou", "img":"dimos_strovolou.png"},{"name":"Nuevo Campo"},{"name":"PAEEK"},{"name":"City Gipeda"}, {"name":"Keravnos"},{"name":"parko akropolis"}]




}]);

//Details controller
mainAppController.controller('DetailsController', ['$routeParams', function ($routeParams) {

var vm = this;

vm.pitches = [{"name":"Dimos Strovolou", "img":"dimos_strovolou.png"},{"name":"Nuevo Campo"},{"name":"PAEEK"},{"name":"City Gipeda"}, {"name":"Keravnos"},{"name":"parko akropolis"}]
  
  vm.whichpitch = $routeParams.pitchId;

}]);


//directives
mainAppController.directive('searchBox', function(){
	var tmp = ['<div>','<input type="text" placeholder="{{placeholder}}" name="postcode" maxlength="{{maxlength}}" ng-model="query" />','</div>'].join('');
	return {
		maxlength: '@maxlength',
		placeholder: '@placeholder',
		restrict: 'AE',
		template: tmp,
		link: function(scope){
			scope.placeholder = 'Enter postcode';
		}
	}
});



