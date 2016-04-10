'use strict';

/**
 * @ngdoc function
 * @name bootstrapExApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bootstrapExApp
 */
angular.module('bootstrapExApp')
  .controller('MainCtrl', function ($scope) {
    $scope.archives = [
      'March 2014',
      'February 2014',
      'January 2014',
      'December 2013',
      'November 2013',
      'October 2013',
      'September 2013',
      'August 2013',
      'July 2013',
      'June 2013',
      'May 2013',
      'April 2013'
    ];

    $scope.elsewhere = [
      'GitHub',
      'Twitter',
      'Facebook'
    ];
  });
