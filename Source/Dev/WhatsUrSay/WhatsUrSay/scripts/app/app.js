﻿/*
Component :                             An AngularJS module definition that is used to define the angular js application used in the application and the different routes
                                        identified in the application.
Author:                                 Abhinav Bhandaram
Use of the component in system design:  Angular JS application definition and routes defined in the application.
Written and revised:                    11/5/2016
Reason for component existence:         Angular JS application definition..
*/
(function () {
    'use strict';
    //Defining the agularjs application 'app' and the required dependencies for the application.
    var app = angular.module('app', ['ngRoute', 'ngMaterial']);
    //Defining the routes identified in the application.
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'WhatsUrSay/features/Login/Login.html',
            controller:'LoginController'
        }).when('/join', {
            templateUrl:'WhatsUrSay/features/Login/Register.html'
        }).when('/error', {
            templateUrl:'WhatsUrSay/features/Error/Error.html',
        })
        .otherwise({
            templateUrl: 'WhatsUrSay/features/Home/Home.html',
            controller:'HomeController'
        })

    }]);

})();