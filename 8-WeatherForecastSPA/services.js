//Custom service for city name tracking and sharing
weatherApp.service('cityService', function(){
    this.cityName = '';
});

weatherApp.service('weatherService', ['$resource', function($resource){
    this.GetWeather = function(cityName){
        //@ngResource
        var weatherAPI = $resource("https://api.openweathermap.org/data/2.5/weather", 
        { callback:"JSON_CALLBACK" },
        { get:
            { method: "JSONP" }
        }); 
    
         return weatherAPI.get({
            APPID: "a623e653e9344a802a04bd3903b80008",
            q: cityName 
        });
    }
}]);