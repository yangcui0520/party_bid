'use strict';

/**
 * @ngdoc function
 * @name studyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the studyApp
 */
angular.module('partyBidApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
