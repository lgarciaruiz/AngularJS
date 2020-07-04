//Forecast page controller
weatherApp.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService', function($scope, $routeParams, cityService, weatherService){
    
    $scope.cityName = cityService.cityName || $routeParams.location;

    $scope.weatherResult = weatherService.GetWeather($scope.cityName);

    $scope.convertToFahrenheit = function(degK) {
        return Math.round((1.8 * (degK - 273)) + 32);
    };

    $scope.convertDate = function(date){
        return new Date(date * 1000);
    };

    //console.log($scope.weatherResult);
}]);


//Home page controller
weatherApp.controller('homeController', ['$scope', 'cityService', '$location', function($scope, cityService, $location){

    $scope.cityName = cityService.cityName;

    $scope.$watch('cityName', function(){
        cityService.cityName = $scope.cityName;
    });

    $scope.submit = function () {
        $location.path("/forecast")
    }

}]);