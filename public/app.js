var textbox = document.getElementById('name');

//console.log(textbox);

textbox.addEventListener('click', function(event){

	console.log('click on the input box');

});

// MODULE
var angularApp = angular.module('testApp', []);
//second param: array of dependencies (STRING list of modules that app uses)
// CONTROLLERS
angularApp.controller('mainController', function ($scope,$log,$filter) {
    
    
     //angular services
     
     
    
    $scope.name = "Farid";
    $scope.formattedName = $filter('uppercase')($scope.name); //type of filter => thing to filter
    $log.info($scope.formattedName);
    $log.debug("Use at the app"); //browser console
    console.log($scope);
    console.log($log);
    //someFunction();
    
    
});

angularApp.controller('twitterController', ['$scope', '$filter', '$timeout', function(scope, filter, timeout) { //angular JS Services
    
    scope.handle = '';
    
    scope.lowercasehandle = function() {
        return filter('lowercase')(scope.handle);
    };
    
    scope.$watch('handle', function(newValue, oldValue) {
        
        console.info('Changed!');
        console.log('Old:' + oldValue);
        console.log('New:' + newValue);
        
    });
    
    timeout(function() {
       
        scope.handle = 'newtwitterhandle';
        console.log('Scope changed!');
        
    }, 3000);
    
}]);


