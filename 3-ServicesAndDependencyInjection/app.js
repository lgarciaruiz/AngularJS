//angualr module takes in the name of the app and an array of dependencies, dependencies are modules available in angular; angular.module is an app
var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

//always declare a controller; the first param is the name of the controller then a callback function for what this controller will do
myApp.controller('mainController', ['$scope', '$log', '$filter', '$resource', function($scope, $log, $filter, $resource){

    //Lesson demonstrating the $scope service
    // $scope.name = 'leo garcia';
    // $scope.occupation = 'learner';

    // $scope.getname = function () {
    //     return 'leo Garcia';
    // }

    // console.log($scope);

    // console.log($log);

    // //this is the same as console.log
    // $log.log("hi");

    // //
    // $log.info('Some info about this');
    // $log.warn('warning there is a warning');
    // $log.debug('Some debug info');
    // $log.error('Error was found');
    

    // $scope.name = 'john';
    // $scope.formattedname = $filter('uppercase')($scope.name);

    // $log.info($scope.name);
    // $log.info($scope.formattedname);

    //console.log($resource);

    console.log($scope);
    

}]);
//DEPENDENCY INJECTION EXAMPLE
// var Person = function(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// function logPerson(person) {
//     //var john is a dependency for this function and having it inside the function is bad practice; this should be donw with dependecy injection which means to pass in the object instead
//     // var john = new Person("John", "Doe");
//     console.log(john);
    
// }
// let john = new Person('John','Doe');
// logPerson(john);

// //Demonstarting strings and functions
// //functions can be converted to strings
// var searchPeople = function ( firstName, lastName, height, age, occupation) {
//     return 'Jane Doe';
// }

// var searchPeopleString = searchPeople.toString();
// //this would print out the same things as lines 35-37; so you could parse this string and see what the expected parameters are to a function
// console.log(searchPeopleString);

//Angular and Dependency Injection
//console.log(angular.injector().annotate(searchPeople));
//annotate is a method for the injector() in the angular object; it shows you the parameters to a function in an array