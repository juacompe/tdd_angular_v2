var todoApp;
todoApp = angular.module('todoApp', []);
todoApp.service('TodoService', TodoService);
todoApp.controller('TodoController', ['$scope', 'TodoService', TodoController]);

function TodoController($scope, TodoService) {
    $scope.items = [];

    $scope.init = function() {
        TodoService.get($scope.jsonToItems);
    };

    $scope.jsonToItems = function(result) {
        var key, json;
        $scope.items = [];
        for(key in result) {
            json = result[key];
            $scope.items.push(new Item(json.title, json.done));
        }
    }

    $scope.getItemLength = function() {
        return $scope.items.length;
    };
    
    $scope.getItem = function(order) {
        var index = order - 1;
        return $scope.items[index];
    };

    $scope.addItem = function(description) {
        var newItem = new Item(description, false);
        $scope.items.push(newItem);
    }

    $scope.formSubmitted = function() {
        if($scope.newDescription) {
            $scope.addItem($scope.newDescription);
            $scope.newDescription = '';
        }
    }
};

function TodoService($http) {
    this.get = function(callback) {
        $http.get('https://juacompe-todo-app.firebaseio.com/todos.json').success(callback);
    };
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
