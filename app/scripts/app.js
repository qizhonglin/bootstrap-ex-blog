'use strict';

/**
 * @ngdoc overview
 * @name bootstrapExApp
 * @description
 * # bootstrapExApp
 *
 * Main module of the application.
 */
angular
  .module('bootstrapExApp', [
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
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/features', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/press', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/hires', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

angular.module('bootstrapExApp')
  .directive('bsActiveLink', ['$location', function ($location) {
    return {
      restrict: 'A', //use as attribute
      replace: false,
      link: function (scope, elem) {
        //after the route has changed
        scope.$on("$routeChangeSuccess", function () {
          var hrefs = ['/#' + $location.path(),
            '#' + $location.path(), //html5: false
            $location.path()]; //html5: true
          angular.forEach(elem.find('a'), function (a) {
            a = angular.element(a);
            if (-1 !== hrefs.indexOf(a.attr('href'))) {
              a.addClass('active');
            } else {
              a.removeClass('active');
            };
          });
        });
      }
    }
  }]);
