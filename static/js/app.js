var allApp;
allApp = angular.module('AllApp', ['ngRoute']);
allApp.service('TodoService', TodoService);
allApp.controller('TodoController', ['$scope', 'TodoService', TodoController]);
allApp.config(function($routeProvider) {
  var home, fizzbuzz, redirectToHome, greeting;
  home = {
      templateUrl:'_home.html'
  };
  fizzbuzz = { 
      controller:'FizzBuzzController',
      templateUrl:'_fizzbuzz.html'
  };
  greeting = {
      controller:'GreetingController',
      templateUrl:'_greeting.html'
  };
  todo = {
      controller:'TodoController',
      templateUrl:'_todo.html'
  };
  redirectToHome = {
      redirectTo:'/'
  };
  $routeProvider.when('/', home);
  $routeProvider.when('/fizzbuzz', fizzbuzz);
  $routeProvider.when('/todo', todo);
  $routeProvider.when('/greeting', greeting);
  $routeProvider.otherwise(redirectToHome);
});

