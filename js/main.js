'use strict';

var mainAppController = angular.module('mainAppController', ['ngProgress']);

//Main controller
mainAppController.controller('mainCtrl', ['$http', 'rData', 'ngProgressFactory', function ($http, rData, ngProgressFactory) {

var vm = this;

 rData.get().then(function(response){
    var data = response.data;
    vm.pitches = data;
});


 vm.progressbar = ngProgressFactory.createInstance();
 vm.progressbar.start();
 vm.progressbar.complete(); 


}]);

//Details controller
mainAppController.controller('DetailsController', ['$routeParams','rData', function ($routeParams,rData) {

var vm = this;

 rData.get().then(function(response){
    var data = response.data;
    vm.pitches = data;
});

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

	vm.numOfPlayers = [5,7,8,9,10,11];
	vm.currency = [{"name":"EUR", "symbol": "&euro;"},
				   {"name":"GBP", "symbol": "&pound;"},
				   {"name":"USD", "symbol": "&#x24"}];

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
mainAppController.factory('rData', function($http){

var url = "js/db.json";

return {
    get: function(method){
         return $http({
         	method: 'GET',
         	url: url
         }).then(function(response){
         	return response;
         })
    }
}

});


//filters
mainAppController.filter('trusted', ['$sce', function($sce) {
    var div = document.createElement('div');
    return function(text) {
        div.innerHTML = text;
        return $sce.trustAsHtml(div.textContent);
    };
}]);
