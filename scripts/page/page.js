(function() {
    'use strict';
    angular.module('app').directive('weather', function() {
        return {
            restrict: 'E',
            transclude: false,
            templateUrl: 'scripts/page/page.html',
            scope: {},
            required: ['$scope', '$http'],
            controllerAs: 'vm',
            bindToController: true,
            controller: function($scope, $http) {
                var vm = this;
                var myToken = '30ba7757914543d690710f667c834dfa';
                var cityList = {};
                var baseUri = 'http://api.heweather.com/x3/';
                vm.cityType = 'allchina';
                vm.weatherTitle = 'zz';
                vm.formData = {};
                vm.getCityWeather = function() {
                    getCityWeather(vm.selectedCityId, myToken)
                        .success(function(data, status) {
                            var key = "HeWeather data service 3.0";
                            vm.formData = data;
                    });
                }

                angular.element(document).ready(function() {
                    getAllCities(vm.cityType, myToken).success(function(data, status) {
                        vm.cityList = data.city_info;
                    });
                });

                function getAllCities(cityType, token) {
                    return $http.get(baseUri + 'citylist?search=' + cityType + '&key=' + token);
                }

                function getCityWeather(cityId, token) {
                    return $http.get(baseUri + 'weather?cityid=' + cityId + '&key=' + token);
                }
            }
        };
    });
})();