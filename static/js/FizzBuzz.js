var fizzbuzzApp;
fizzbuzzApp = angular.module('FizzBuzzApp', ['ngRoute']);
fizzbuzzApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller:'FizzBuzzController',
      templateUrl:'_fizzbuzz.html'
    })
    .otherwise({
      redirectTo:'/'
    });
});


function FizzBuzzController($scope) {

    $scope.getResult = function() {
        if($scope.input % 15 == 0){
            return "fizzbuzz";
        }
        if($scope.input % 3 == 0){
            return "fizz";
        }
        if($scope.input % 5 == 0) {
            return "buzz";
        }
        return "" + $scope.input;
    };
}
