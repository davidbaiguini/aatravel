'use strict';

angular.module('sidebar', []);

angular.module('sidebar').directive('sidebar', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/sidebar.html'
    };
});