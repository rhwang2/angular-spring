(function() {
	'use strict';

	angular
		.module('pptApp')
		.service('PPTservice', PPTservice);

	PPTservice.$inject = ['$http'];
	function PPTservice($http) {

		var service = {};

		return service;
	}
	
})();