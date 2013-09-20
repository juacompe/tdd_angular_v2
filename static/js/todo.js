todoApp = angular.module('TodoApp', ['ngResource']);
todoApp.factory('TodoService', TodoService);
injectList = [
    '$scope', // first arg to inject
    'TodoService', // second arg to inject
    TodoController, // last item -- the real controller class
];
todoApp.controller('TodoController', injectList);

function TodoController($scope, TodoService) {
    $scope.items = [
        {name: 'Learn Angular'},
        {name: 'Build Angular'},
    ]; 

    $scope.add = function(newItem) {
        var item = {name: newItem};
        $scope.items.push(item);
        $scope.newItem = '';
    }

    $scope.load = function() {
        $scope.items = TodoService.query();
    }

    $scope.save = function() {
        TodoService.save($scope.items);
    }
};

function TodoService($resource) {
    var url, defaultParams, actions;
    url = 'https://juacompe-todo-app.firebaseio.com/todos2.json';
    defaultParams = {};
    actions = {
        save: { method: 'PUT', isArray: true }
    };
    return $resource(url, defaultParams, actions);
};

