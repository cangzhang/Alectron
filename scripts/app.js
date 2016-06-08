(function () {
    'use strict';
    
    var _templateBase = './scripts';
    
    angular.module('app', ['ngMaterial', 'ngAnimate'])
        .controller('myController', myController);
        
    myController.$inject = ['$scope', '$http','$mdDialog'];
    
    function myController($scope, $http, $mdDialog) {
        $scope.title = "HELLO";
    }
})();