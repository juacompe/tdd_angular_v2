var allApp;
allApp = angular.module('AllApp', ['ngRoute']);
allApp.config(function($routeProvider) {
  var home, fizzbuzz, redirectToHome;
  home = {
      templateUrl:'_home.html'
  };
  fizzbuzz = { 
      controller:'FizzBuzzController',
      templateUrl:'_fizzbuzz.html'
  };
  redirectToHome = {
      redirectTo:'/'
  };
  $routeProvider.when('/', home);
  $routeProvider.when('/fizzbuzz', fizzbuzz);
  $routeProvider.otherwise(redirectToHome);
});

