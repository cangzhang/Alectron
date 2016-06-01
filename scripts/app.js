(function () {
    'use strict';
    
    var _templateBase = './scripts';
    
    angular.module('app', [
        'ngRoute',
        'ngMaterial',
        'ngAnimate'
    ])
    // .config(['$routeProvider', function ($routeProvider) {
    //         $routeProvider.when('/', {
    //             templateUrl: _templateBase + '/page/page.html',
    //             controller: 'myController',
    //             controllerAs: 'vm'
    //         });
    //         $routeProvider.otherwise({ redirectTo: '/' });
    //     }])
        .controller('myController', myController);
        
    myController.$inject = ['$scope', '$http','$mdDialog'];
    
    function myController($scope, $http, $mdDialog) {
        $scope.title = "HELLO";
    }
        
})();