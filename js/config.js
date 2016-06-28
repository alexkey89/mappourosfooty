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
            .when('/view5', {
                controller: 'GameController as game',
                templateUrl: 'Partials/games.html'
            })
            .when('/view6', {
                controller: 'GameController as game',
                templateUrl: 'Partials/creategame.html'
            })
            .when('/view7', {
                controller: 'DetailsController as details',
                templateUrl: 'Partials/addpitch.html'
            })
            .when('/view8', {
                controller: 'mainCtrl as main',
                templateUrl: 'Partials/teams.html'
            })
            .when('/view9', {
                controller: 'mainCtrl as main',
                templateUrl: 'Partials/userprofile.html'
            })
    		.otherwise({redirectTo: '/view1'})
    });
