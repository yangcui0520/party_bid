'use strict';

/**
 * @ngdoc overview
 * @name studyApp
 * @description
 * # studyApp
 *
 * Main module of the application.
 */
angular
  .module('partyBidApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
        .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
        .when('/create', {
            templateUrl: 'views/create_newactivity.html'
            //controller: 'AboutCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
