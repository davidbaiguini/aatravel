'use strict';

angular.module('header', []);

angular.module('header').directive('footer', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/header.html'
    };
});