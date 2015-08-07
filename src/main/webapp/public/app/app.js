var pptApp = angular.module('pptApp', [
  'ngRoute',
  'pptControllers'
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