(function () {
    'use strict';
    
    angular.module('app').directive('weather', function () {
    	return {
    		restrict : 'E',
    		transclude : false,
    		templateUrl : 'scripts/page/page.html',
    		scope : {

    		},
    		required : ['$scope', '$http'],
    		controllerAs : 'vm',
    		bindToController : true,
    		controller : function ($scope, $http) {
    			var vm = this;
    			vm.weatherTitle = 'zz';
    		}
    	}
    });
        

})();