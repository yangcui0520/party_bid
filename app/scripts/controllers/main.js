'use strict';

/**
 * @ngdoc function
 * @name studyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the studyApp
 */
angular.module('partyBidApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
