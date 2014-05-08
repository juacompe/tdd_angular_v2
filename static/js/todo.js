var todoApp, plugins, injections;
plugins = [];
todoApp = angular.module('TodoApp', plugins);
todoApp.service('TodoService', TodoService);
injections = ['$scope', 'TodoService', TodoController];
todoApp.controller('TodoController', injections);

function TodoController($scope, TodoService) {
    $scope.newItemName = '';
    $scope.todos = [];

    $scope.init = function() {
        var itemsInJson;
        itemsInJson = TodoService.query();
        $scope.loadJson(itemsInJson);
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

function TodoService() {
    this.query = function() {
        return [
            { title:'Learn Angular JS', done:true },
            { title:'Write Angular JS application', done:true },
            { title:'Write TODO application', done:false }
        ];
    };
};
