//Starting angluar app
var weatherApp = angular.module('weatherApp', ['ngRoute','ngResource']);

//Routing parameters
weatherApp.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    .when('/forecast', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
    .when('/forecast/:location', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
});

//Custom service for city name tracking and sharing
weatherApp.service('cityService', function(){
    this.cityName = '';
});

//Home page controller
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService){

    $scope.cityName = cityService.cityName;

    $scope.$watch('cityName', function(){
        cityService.cityName = $scope.cityName;
    });

}]);


//Forecast page controller
weatherApp.controller('forecastController', ['$scope','$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService){
    
    $scope.cityName = cityService.cityName || $routeParams.location;
  
    //@ngResource
    $scope.weatherAPI = $resource("https://api.openweathermap.org/data/2.5/weather", 
    { callback:"JSON_CALLBACK" },
    { get:
        { method: "JSONP" }
    }); 

    $scope.weatherResult = $scope.weatherAPI.get({
        APPID: "a623e653e9344a802a04bd3903b80008",q: $scope.cityName 
    });

    $scope.convertToFahrenheit = function(degK) {
        return Math.round((1.8 * (degK - 273)) + 32);
    };

    $scope.convertDate = function(date){
        return new Date(date * 1000);
    };

    //console.log($scope.weatherResult);
}]);