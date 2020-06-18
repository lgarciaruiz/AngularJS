//for routing module add 'ngRoute' to dependencies so you can use the services provided by ngRoute
var myApp = angular.module('myApp', ['ngRoute']);

//$routeProvider service is now avialble because of ngRoute and is used in the config method
myApp.config(function ($routeProvider){

    //$routeProvider allows us to specify routes
    $routeProvider
    //when takes in a string and an object
    //the string is to specify what it should look for in the hash
    //the object is a collection of things, we are more concerned with templateUrl and controller properties

    //when i see / in the hash; / is home
    .when('/', {
        //physcal location of a template; use this tempalte found at path page/main.html
        templateUrl: 'pages/main.html',
        //and the controller should be connected to
        controller: 'mainController'
    })

    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
    //passing in params to the hash
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
})

myApp.controller('mainController', ['$scope', '$location', '$log', function($scope, $location, $log) {
    
    //this is the location of the hash 
    //$log.info($location.path());
    $scope.name = 'main';
    
}]);

myApp.controller('secondController', ['$scope', '$location', '$log', '$routeParams', function($scope, $location, $log, $routeParams) {
    
    //this is the location of the hash 
    //$log.info($location.path());
    $scope.name = 'second';
    //params can be passed in to the hash to have things such as ids after the page and location name
    //the code here sets the default to 1 if no prams have been passed in
    $scope.num = $routeParams.num || 1
}]);
