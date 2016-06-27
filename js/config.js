'use strict';

//routes
var mappourosApp = angular.module('mappourosApp', ['ngRoute', 'mainAppController']);
    mappourosApp.config(function($routeProvider){
    	$routeProvider
    		.when('/view1',{
    			controller: 'mainCtrl as main',
    			templateUrl: 'Partials/login.html'
    		})
    		.when('/view2',{
    			controller: 'mainCtrl as main',
    			templateUrl:'Partials/register.html'
    		})
            .when('/view3', {
                controller: 'mainCtrl as main',
                templateUrl: 'Partials/pitches.html'
            })
            .when('/view4/:pitchId', {
                controller: 'DetailsController as details',
                templateUrl: 'Partials/pitchDetails.html'
            })
    		.otherwise({redirectTo: '/view1'})
    });