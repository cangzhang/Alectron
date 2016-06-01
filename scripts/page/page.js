(function () {
    'use strict';
    
    angular.module('app')
        .controller('myController', ['myController', '$q', '$mdDialog', myController]);
    
    function myController(customerService, $q, $mdDialog) {
        var self = this;
        $scope.title = "hello";
    }

})();