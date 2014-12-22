'use strict';

angular.module('footer', []);

angular.module('footer').directive('footer', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/footer.html',
    };
});