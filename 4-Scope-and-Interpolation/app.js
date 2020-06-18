
var myApp = angular.module('myApp', []);

// myApp.controller('mainController', ['$scope', '$timeout', '$filter', function($scope, $timeout, $filter){

//     //String interpolation 
//     //$scope.name = 'Leo';

//     // $timeout(function(){
//     //     $scope.name = 'Everybody';
//     // }, 3000);

//     //@Data Binding
//     // $scope.handle = ' ';

//     // //@data binding with function
//     // $scope.lowercasehandle = function() {
//     //     return $filter('lowercase')($scope.handle);
//     // };

//     // //@watcher this code is wathcing the handle variable
//     // $scope.$watch('handle', function(newValue, oldValue) {
//     //     console.info('CHanged!');
//     //     console.log('old ' + oldValue);
//     //     console.log('new ' + newValue);
        
//     // });

//     // //this code is outside of the angular js context so the setTimout will not kick off the digest cycle
//     // setTimeout(function(){
//     //     $scope.$apply(function(){
//     //         $scope.handle = 'newtwitterhandle';
//     //         console.log('scope changed');
//     //     })   
//     // });

//     //@Common Directives
//     $scope.handle = ' ';

//     $scope.lowercasehandle = function() {
//         return $filter('lowercase')($scope.handle);
//     };

//     //demonstrating ng-if
//     $scope.characters = 5;


//     // $scope.rules = [
//     //     { rulename : 'Must be 5 characters' }, 
//     //     { rulename : 'Must be unique' },
//     //     { rulename : 'Must be cool' }
//     // ];

//     // console.log($scope.rules);
    

// }]);

myApp.controller('mainController', ['$scope', '$filter', '$http', function ($scope, $filter, $http){

    $scope.handle = '';

    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };

    //GET data
    $http.get('http:url.com')
        //the param passed in to the function is the data you get back, can be called whatever
        .success(function(result){
            $scope.newVariable = result;
        })
        //returns data and the status for the error
        .error(function (errordata, status){
            console.log(errordata);
            
        });



        $scope.newRule = '';

        //creating a post using $http
        //1 http.post(url to send to , json object to send)
        //2 if the post method also returns back some info you can use .success(function(response){
            //do something with response
        //})
        //3 remember to handle errors
        $scope.addRule = function () {
            $http.post('http://url.com', { propertyName: $scope.newRule }) //$scope.newRule is the value
            .success(function (result) {
                $scope.rules = result;
                $scope.newrule = '';
            })
            .error(function (data, status){
                console.log(data);
                
            })
        }

}]);