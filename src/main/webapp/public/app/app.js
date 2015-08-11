var pptApp = angular.module('pptApp', [
  'ngRoute',
  'pptControllers',
  'angularGrid'
]);

pptApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: '/index.html',
      controller: 'PPTcontroller'
    }).
    otherwise({
      redirectTo: '/'
    });
  }
]);