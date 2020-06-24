var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $scope.person = {
        name: 'John Doe',
        address: 'some address 12345'
    }
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    
    
}]);

//@customDirective
myApp.directive('searchResults', function() {
    return {
        restrict: 'AE',
        //template to show in the directive
        // template: '<a href="#" class="list-group-item list-group-item-action"><div class="d-flex w-100 justify-content-between"><h5 class="mb-1">Doe, John</h5></div><p class="mb-1">555 Some St., Some City, Some State 12345</p></a>',
        //use templateUrl property for html contents that are large and in a different folder
        templateUrl: 'directives/searchResulst.html',
        //replace is asking should you replace completely the directive with the string above
        replace: true,
        //isolate the scope by adding scope property defined to an empty string @isolating scope
        // scope: {

        // }
        //poke a hole so that you can use a specific variable from the scope that you want access to
        scope: {
            //when doing this remember to normalize the attibute to camelcase in js; @ symbol means text
            personName: '@', //using same property name as directive's attribute allows us to use @ symbol only
            //personNameOther: '@personName', will be the same as above but with a different property name
            personAddress: '@',
            //the equal sign means this is a two way binding and it binds the personObject in the directive with the person object in the controller; whatever happens in the directive will pass over to the model so you have to be careful
            //like before the name of the property does not have to match the html norlmalized version you could use a different name as long as the property is assigned using the =symbol
            //personObjectVar: "=personObject"
            personObject: "="
        }
    }
});