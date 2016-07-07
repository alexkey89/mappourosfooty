'use strict';

var mainAppController = angular.module('mainAppController', ['ngProgress']);

//Main controller
mainAppController.controller('mainCtrl', ['$http', 'rData', 'ngProgressFactory', function ($http, rData, ngProgressFactory) {

var vm = this;

 vm.pitches = rData;
 vm.progressbar = ngProgressFactory.createInstance();
 vm.progressbar.start();
 vm.progressbar.complete(); 


}]);

//Details controller
mainAppController.controller('DetailsController', ['$routeParams','rData', function ($routeParams,rData) {

var vm = this;
  	vm.pitches = rData;

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

	vm.notification = 'You are the admin of this game';

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

mainAppController.directive('gameNotifications', function(){
	var tmp = ['<div class="notifications animated fadeInUp" ng-show="showme">', 
			   '<p>','<i class="fa fa-bell" aria-hidden="true"></i> {{notifications}}',
			   '</p>','<span class="x_btn" ng-click="hidenots()"><i class="fa fa-times-circle" aria-hidden="true"></i></span>',
			   '</div>'].join('');
	return {
		restrict: 'E',
		template: tmp,
		scope: {
			notifications: '@notifications'
		},
		link: function(scope){
			scope.showme = true;
			scope.hidenots = function(){
				scope.showme = false;
			}
		}
	}
})

//factories
mainAppController.factory('rData', function(){


  var rData = [{"name":"Dimos Strovolou", "img":"dimos_strovolou.png", "location":"nicosia", "adress":"Korytsas, Strovolos", "description":"Gipeda dimou" },
  				{"name":"Nuevo Campo", "img": "nuevo.png", "location": "nicosia", "adress":"Odos Didymoteichou, 2052 Strovolos", "description":"Nuevo campo"},
  				{"name":"PAEEK", "img": "PAEEK.png", "location": "nicosia", "adress":"Odos Kifea, 2330 Lakatamia", "description":"PAEEK FC futsal"},
  				{"name":"City Gipeda", "img":"city.png", "location": "nicosia", "adress":"2034 Nicosia", "description":"Gipeda City"}]

  return rData;

});
