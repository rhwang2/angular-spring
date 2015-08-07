'use strict';

var pptControllers = angular.module('pptControllers', []);

pptControllers.controller('PPTcontroller', ['$scope', '$http', 
	function($scope, $http) {
		$scope.formData = {};
		$scope.projects = [];
		
		// Create or update Category
		$scope.init = function() {
			$http.get('/angular-spring-demo/ppt/searchForm')
        		.success(function(data) {
            		$scope.formData = data.searchForm;
            		$scope.projects = data.projects;
	        	});
		};
	}
]);
