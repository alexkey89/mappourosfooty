"use strict";

//routes
var mappourosApp = angular.module("mappourosApp", ['ngRoute', 'mainAppController']);

    mappourosApp.config(function($routeProvider){
    	$routeProvider
    		.when('/view1',{
    			controller: 'mainCtrl',
    			templateUrl: 'Partials/login.html'
    		})
    		.when('/view2',{
    			controller: 'mainCtrl',
    			templateUrl:'Partials/register.html'
    		})
            .when('/view3', {
                controller: 'mainCtrl',
                templateUrl: 'Partials/pitches.html'
            })
            .when('/view4:pitchId', {
                controller: 'mainCtrl',
                templateUrl: 'Partials/pitchDetails.html'
            })
    		.otherwise({redirectTo: '/view1'})
    	
    });
