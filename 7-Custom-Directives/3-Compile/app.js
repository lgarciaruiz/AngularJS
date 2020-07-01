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
    
    $scope.people = [
        {
        name: 'John Doe',
        address: '555 Main St.',
        city: 'New York',
        state: 'NY',
        zip: '11111'
        },
        {
        name: 'Jane Doe',
        address: '333 Second St.',
        city: 'Buffalo',
        state: 'NY',
        zip: '22222'
        },
        {
        name: 'George Doe',
        address: '111 Third St.',
        city: 'Miami',
        state: 'FL',
        zip: '33333'
        }
    ]
    
    $scope.formattedAddress = function(person) {
      
        return person.address + ', ' + person.city + ', ' + person.state + ' ' + person.zip;
        
    };
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    
    
}]);

myApp.directive("searchResult", function() {
   return {
       restrict: 'AECM',
       templateUrl: 'directives/searchresult.html',
       replace: true,
       scope: {
           personObject: "=",
           formattedAddressFunction: "&"
       },
    //    compile: function(element, attributes){
    //        //can have any code you want in here
    //        //you can make edits to the html that is associated with this directive here in the compile function; but it will apply to all versions of the newly created directive in the html compile runs only once for all versions of the custom directive
    //        console.log('Compiling...');
    //        console.log(element.html());
    //        console.log(element);
    //        //element.removeAttr('class');
           
    //        //compile func returns an object with two properties, linking properties
    //        return {
    //            //both of these are functions
    //            //avoid using pre
    //         //    pre: function(scope, elements, attributes){
    //         //        console.log('Pre-Linking...');
    //         //        console.log(elements);                 
    //         //    },

    //            post: function(scope, elements, attributes){
    //             console.log('Post-Linking...');
    //             console.log(elements);
    //             console.log(scope);

    //             //you can modify things in the post function once the code has been compiled; this is safer than modifying in the pre link functon
    //             //you can select info in the html that is about to be posted to the 
    //             if(scope.personObject.name === "Jane Doe"){
    //                 elements.removeAttr('class');
    //             }
                
    //            }
    //        }
           
    //    }

    //USE LINK INSTEAD WHEN COMPILE SHOULD BE EMPTY
    // link: function(scope, elements, attribute){
    //     if (scope.personObject.name === 'Jane Doe'){
    //         elements.removeAttr('class');
    //     }
    // }
   }
});
