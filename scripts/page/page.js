(function() {
	'use strict';
	angular.module('app').directive('weather', function() {
		return {
			restrict: 'E',
			transclude: false,
			templateUrl: 'scripts/page/page.html',
			scope: {},
			required: ['$scope', '$http', '$element'],
			controllerAs: 'vm',
			bindToController: true,
			controller: function($scope, $http, $element) {
				var vm = this;
				var myToken = '30ba7757914543d690710f667c834dfa';
				var baseUri = 'http://api.heweather.com/x3/';
				var conditionList = {};

				vm.cityType = 'allchina';
				vm.weatherTitle = 'zz';
				vm.formData = {};
				vm.searchTerm = '';

				vm.clearSearchTerm = function() {
					vm.searchTerm = '';
				};

				vm.getCityWeather = function() {
					getCityWeather(vm.selectedCityId, myToken).success(function(data, status) {
						var weatherinfo 		    = data['HeWeather data service 3.0'][0];
						vm.formData.currentCity     = weatherinfo.basic.city;
						vm.formData.currentCountry  = weatherinfo.basic.cnty;
						vm.formData.currentCond     = weatherinfo.now.cond.code;
						vm.formData.currentCondText	= weatherinfo.now.cond.txt;
						console.log(conditionList);
						for(var i=0; i<conditionList.length; i++) {
							if (vm.formData.currentCond == conditionList[i].code) {
								console.log("1");
								vm.formData.currentCondTextEn = conditionList[i].txt_en;
								vm.formData.currentCondIcon	  = conditionList[i].icon;
								console.log(i);
							}
						}
					});
				};

				angular.element(document).ready(function() {
					getAllCities(vm.cityType, myToken).success(function(data, status) {
						vm.cityList = data.city_info;
					});
					getWeatherCondition(myToken).success(function(data, status) {
						conditionList = data.cond_info;
					});
				});


				$element.find('input').on('keydown', function(ev) {
					ev.stopPropagation();
				});

				function getAllCities(cityType, token) {
					return $http.get(baseUri + 'citylist?search=' + cityType + '&key=' + token);
				}

				function getCityWeather(cityId, token) {
					return $http.get(baseUri + 'weather?cityid=' + cityId + '&key=' + token);
				}

				function getWeatherCondition(token) {
					return $http.get(baseUri + 'condition?search=allcond&key=' + token);
				}
			}
		};
	});
})();