'use strict';
$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("active");
});
/**
 * @ngdoc overview
 * @name aatravelApp
 * @description
 * # aatravelApp
 *
 * Main module of the application.
 */
angular.module('aatravelApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'footer'
  ]);

angular.module('aatravelApp').config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});

angular.module('aatravelApp').controller('CarouselDemoCtrl', function ($scope) {
    $scope.myInterval = 100;
    var slides = $scope.slides = [
        {
            image: 'images/nz3.jpg',
            text: "New Zealand"
        },
        {
            image: 'images/nz2.jpg',
            text: "New Zealand"
        },
        {
            image: 'images/nz4.jpg',
            text: "New Zealand"
        }
  ];
});