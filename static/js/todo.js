var todoApp, plugins, injections;
plugins = ['ngResource'];
todoApp = angular.module('TodoApp', plugins);
todoApp.value('itemURL', 'https://juacompe-todo-app.firebaseio.com/todos.json');
todoApp.factory('TodoService', TodoService);
injections = ['$scope', 'TodoService', TodoController];
todoApp.controller('TodoController', injections);

function TodoController($scope, TodoService) {
    $scope.newItemName = '';
    $scope.todos = [];

    $scope.init = function() {
        TodoService.query($scope.loadJson);
    };

    $scope.loadJson = function(itemsInJson) {
        $scope.todos = [];
        itemsInJson.forEach(function(itemInJson) {
            var item;
            item = new TodoItem(itemInJson.title, itemInJson.done);
            $scope.todos.push(item);
        });
    };

    $scope.add = function(name) {
        if(name!="")
            $scope.todos.push(new TodoItem(name,false)); 
    };

    $scope.addButtonClicked = function() {
        $scope.add($scope.newItemName);
        $scope.newItemName = '';
    };
};

function TodoItem(name, done) {
    this.name = name;
    this.done = done;

    this.css = function() {
        return this.done? 'done': 'undone';
    };
};

function TodoService($resource, itemURL) {
    return $resource(itemURL);
};
