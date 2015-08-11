'use strict';

var pptControllers = angular.module('pptControllers', []);

pptControllers.controller('PPTcontroller', ['$scope', '$http', 
	function($scope, $http) {
		$scope.formData = {};
		$scope.projects = [];
		
		var columnDefs = [
			{headerName: "Row ID", field: "rowId", hide: 'true'},
	        {headerName: "Organization Code", field: "org_code", headerGroup: 'Organization'},
	        {headerName: "Organization Name", field: "org_name", headerGroup: 'Organization'},
	        {headerName: "Program Code", field: "prog_code", headerGroup: 'Program'},
	        {headerName: "Program Name", field: "prog_name", headerGroup: 'Program'},
	        {headerName: "Project Code", field: "proj_code", headerGroup: 'Project'},
	        {headerName: "Project Name", field: "proj_name", headerGroup: 'Project'},
	        {headerName: "Activity Code", field: "act_code", headerGroup: 'Activity'},
	        {headerName: "Activity Name", field: "act_name", headerGroup: 'Activity'},
	        {headerName: "Task Description", field: "task", hide: 'true'}
	    ];
	
	    var rowData = [
	        {rowId: 1, org_code: "USPTO WIDE", org_name: "UNIVERSAL PTO", prog_code: "ANTIME", prog_name: "NON-CLASSIFIED TIME", proj_code: "0000 (09/30/2007 - Indefinite)", proj_name: "NO PROJECT", act_code: "003300", act_name: "LEAVE - FFLA", task: "Leave taken as authorized by the Family Friendly Leave Act."}
	        , {rowId: 2, org_code: "USPTO WIDE", org_name: "UNIVERSAL PTO", prog_code: "ANTIME", prog_name: "NON-CLASSIFIED TIME", proj_code: "0000 (09/30/2007 - Indefinite)", proj_name: "NO PROJECT", act_code: "003300", act_name: "LEAVE - FFLA", task: "Leave taken as authorized by the Family Friendly Leave Act."}
	        , {rowId: 3, org_code: "USPTO WIDE", org_name: "UNIVERSAL PTO", prog_code: "ANTIME", prog_name: "NON-CLASSIFIED TIME", proj_code: "0000 (09/30/2007 - Indefinite)", proj_name: "NO PROJECT", act_code: "003300", act_name: "LEAVE - FFLA", task: "Leave taken as authorized by the Family Friendly Leave Act."}
	        , {rowId: 4, org_code: "USPTO WIDE", org_name: "UNIVERSAL PTO", prog_code: "ANTIME", prog_name: "NON-CLASSIFIED TIME", proj_code: "0000 (09/30/2007 - Indefinite)", proj_name: "NO PROJECT", act_code: "003300", act_name: "LEAVE - FFLA", task: "Leave taken as authorized by the Family Friendly Leave Act."}
	        , {rowId: 5, org_code: "USPTO WIDE", org_name: "UNIVERSAL PTO", prog_code: "ANTIME", prog_name: "NON-CLASSIFIED TIME", proj_code: "0000 (09/30/2007 - Indefinite)", proj_name: "NO PROJECT", act_code: "003300", act_name: "LEAVE - FFLA", task: "Leave taken as authorized by the Family Friendly Leave Act."}
	        , {rowId: 6, org_code: "USPTO WIDE", org_name: "UNIVERSAL PTO", prog_code: "ANTIME", prog_name: "NON-CLASSIFIED TIME", proj_code: "0000 (09/30/2007 - Indefinite)", proj_name: "NO PROJECT", act_code: "003300", act_name: "LEAVE - FFLA", task: "Leave taken as authorized by the Family Friendly Leave Act."}
	        , {rowId: 7, org_code: "USPTO WIDE", org_name: "UNIVERSAL PTO", prog_code: "ANTIME", prog_name: "NON-CLASSIFIED TIME", proj_code: "0000 (09/30/2007 - Indefinite)", proj_name: "NO PROJECT", act_code: "003300", act_name: "LEAVE - FFLA", task: "Leave taken as authorized by the Family Friendly Leave Act."}
	        , {rowId: 8, org_code: "USPTO WIDE", org_name: "UNIVERSAL PTO", prog_code: "ANTIME", prog_name: "NON-CLASSIFIED TIME", proj_code: "0000 (09/30/2007 - Indefinite)", proj_name: "NO PROJECT", act_code: "003300", act_name: "LEAVE - FFLA", task: "Leave taken as authorized by the Family Friendly Leave Act."}
	        , {rowId: 9, org_code: "USPTO WIDE", org_name: "UNIVERSAL PTO", prog_code: "ANTIME", prog_name: "NON-CLASSIFIED TIME", proj_code: "0000 (09/30/2007 - Indefinite)", proj_name: "NO PROJECT", act_code: "003300", act_name: "LEAVE - FFLA", task: "Leave taken as authorized by the Family Friendly Leave Act."}
	        , {rowId: 10, org_code: "USPTO WIDE", org_name: "UNIVERSAL PTO", prog_code: "ANTIME", prog_name: "NON-CLASSIFIED TIME", proj_code: "0000 (09/30/2007 - Indefinite)", proj_name: "NO PROJECT", act_code: "003300", act_name: "LEAVE - FFLA", task: "Leave taken as authorized by the Family Friendly Leave Act."}
	        , {rowId: 11, org_code: "USPTO WIDE", org_name: "UNIVERSAL PTO", prog_code: "ANTIME", prog_name: "NON-CLASSIFIED TIME", proj_code: "0000 (09/30/2007 - Indefinite)", proj_name: "NO PROJECT", act_code: "003300", act_name: "LEAVE - FFLA", task: "Leave taken as authorized by the Family Friendly Leave Act."}
	        , {rowId: 12, org_code: "USPTO WIDE", org_name: "UNIVERSAL PTO", prog_code: "ANTIME", prog_name: "NON-CLASSIFIED TIME", proj_code: "0000 (09/30/2007 - Indefinite)", proj_name: "NO PROJECT", act_code: "003300", act_name: "LEAVE - FFLA", task: "Leave taken as authorized by the Family Friendly Leave Act."}
	        , {rowId: 13, org_code: "USPTO WIDE", org_name: "UNIVERSAL PTO", prog_code: "ANTIME", prog_name: "NON-CLASSIFIED TIME", proj_code: "0000 (09/30/2007 - Indefinite)", proj_name: "NO PROJECT", act_code: "003300", act_name: "LEAVE - FFLA", task: "Leave taken as authorized by the Family Friendly Leave Act."}
	        , {rowId: 14, org_code: "USPTO WIDE", org_name: "UNIVERSAL PTO", prog_code: "ANTIME", prog_name: "NON-CLASSIFIED TIME", proj_code: "0000 (09/30/2007 - Indefinite)", proj_name: "NO PROJECT", act_code: "003300", act_name: "LEAVE - FFLA", task: "Leave taken as authorized by the Family Friendly Leave Act."}
	        , {rowId: 15, org_code: "USPTO WIDE", org_name: "UNIVERSAL PTO", prog_code: "ANTIME", prog_name: "NON-CLASSIFIED TIME", proj_code: "0000 (09/30/2007 - Indefinite)", proj_name: "NO PROJECT", act_code: "003300", act_name: "LEAVE - FFLA", task: "Leave taken as authorized by the Family Friendly Leave Act."}
	        , {rowId: 16, org_code: "USPTO WIDE", org_name: "UNIVERSAL PTO", prog_code: "ANTIME", prog_name: "NON-CLASSIFIED TIME", proj_code: "0000 (09/30/2007 - Indefinite)", proj_name: "NO PROJECT", act_code: "003300", act_name: "LEAVE - FFLA", task: "Leave taken as authorized by the Family Friendly Leave Act."}
	        , {rowId: 17, org_code: "USPTO WIDE", org_name: "UNIVERSAL PTO", prog_code: "ANTIME", prog_name: "NON-CLASSIFIED TIME", proj_code: "0000 (09/30/2007 - Indefinite)", proj_name: "NO PROJECT", act_code: "003300", act_name: "LEAVE - FFLA", task: "Leave taken as authorized by the Family Friendly Leave Act."}
	        
		];

		$scope.gridOptions = {
	        columnDefs: columnDefs,
	        rowData: rowData,
	        groupHeaders: true,
	        enableColResize: true,
	        groupRowHeader: true,
	        groupKeys: ['rowId'],
	        groupDefaultExpanded: true,
	        groupUseEntireRow: true,
	        groupAggFunction: groupAggFunction,
	        groupRowInnerRenderer: groupRowInnerRendererFunc,
	        rowHeight: 20
	    };
	    
	    /*
	    	hacking of ag-grid to display the task description in the group footer
	    */
		    // re-format the footer so that it only displays what the groupAggFunction function sets
		    function groupRowInnerRendererFunc(params) {
		        return params.data;
		    }
	
			// set the value for the "totals" footer
		    function groupAggFunction(rows) {
		        return rows[0].data.task;
		    }
		/*
			end hack
		*/

		$scope.init = function() {
			$http.get('/angular-spring-demo/ppt/searchForm')
        		.success(function(data) {
            		$scope.formData = data.searchForm;
            		$scope.projects = data.projects;
	        	});
		};
		
		$scope.applyFilter = function() {
			$(".ag-row-group-expanded").hide();
		};
	}
]);
