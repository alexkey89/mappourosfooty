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

  vm.pitches = [{"name":"Dimos Strovolou", "img":"dimos_strovolou.png", "location":"nicosia", "adress":"Korytsas, Strovolos", "description":"Gipeda dimou" },
  				{"name":"Nuevo Campo", "img": "nuevo.png", "location": "nicosia", "adress":"Odos Didymoteichou, 2052 Strovolos", "description":"Nuevo campo"},
  				{"name":"PAEEK", "img": "PAEEK.png", "location": "nicosia", "adress":"Odos Kifea, 2330 Lakatamia", "description":"PAEEK FC futsal"},
  				{"name":"City Gipeda", "img":"city.png", "location": "nicosia", "adress":"2034 Nicosia", "description":"Gipeda City"}]
  
  vm.whichpitch = $routeParams.pitchId;
  
  //add a pitch
  vm.handleSubmit = function(){
  	vm.pitches.push(vm.pitch)
  	console.log(vm.pitches)
  }


}]);


//game controller
mainAppController.controller('GameController', ['$routeParams', function($routeParams){
	var vm = this;

	//add game
	vm.handleSubmit = function(){
	  console.log(vm.newgame)
	}

}])


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



