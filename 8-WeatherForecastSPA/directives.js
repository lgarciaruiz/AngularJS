weatherApp.directive('queryResult', function () {
    return {
        restrict: 'E',
        templateUrl: 'directive/queryResult.html',
        scope: {
            wqResult: "=",
            cvrtToFarh: "&",
            cvrtDate: "&"
        }
    };
    
})