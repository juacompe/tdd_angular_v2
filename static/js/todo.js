var todoApp, plugins, injections;
plugins = ['ngResource'];
todoApp = angular.module('TodoApp', plugins);
todoApp.value('fbURL', 'https://juacompe-todo-app.firebaseio.com/todos.json');
todoApp.factory('TodoService', TodoService);
injections = ['$scope', 'TodoService', TodoController];
todoApp.controller('TodoController', injections);

function TodoController($scope, TodoService) {
    $scope.items = [];

    $scope.init = function() {
        var items, params;
        params = {};
        items = TodoService.query(params, $scope.loadItems); 
    };

    $scope.loadItems = function(items) {
        items.forEach(function(json) {
            $scope.addItem(json.title, json.done);
        });
    };

    $scope.getItemLength = function() {
        return $scope.items.length;
    };
    
    $scope.getItem = function(order) {
        var index = order - 1;
        return $scope.items[index];
    };

    $scope.addItem = function(description, done) {
        var newItem;
        if(done == undefined)
            done = false;
        newItem = new Item(description, done);
        $scope.items.push(newItem);
    }

    $scope.formSubmitted = function() {
        $scope.addItem($scope.newDescription);
        $scope.newDescription = '';
    }
};

function Item(description, done) {
    this.description = description;
    this.done = done;

    this.css = function() {
        if(this.done)
            return 'done';
        else
            return '';
    }
}

function TodoService($resource, fbURL) {
    var defaultParams, actions;
    defaultParams = {};
    actions = {};
    return $resource(fbURL, defaultParams, actions);
}
