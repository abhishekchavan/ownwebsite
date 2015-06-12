'use strict';

/**
 * @ngdoc overview
 * @name abhishekchavanApp
 * @description
 * # abhishekchavanApp
 *
 * Main module of the application.
 */
angular
  .module('abhishekchavanApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
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
      }).when('/cv', {
        templateUrl: 'views/cv.html',
        controller: 'CVCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
