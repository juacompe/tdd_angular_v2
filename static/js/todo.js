var todoApp;
todoApp = angular.module('todoApp', []);
wireTodoApplication(todoApp);

function wireTodoApplication(app) {
    app.service('TodoService', TodoService);
    app.controller('TodoController', ['$scope', 'TodoService', TodoController]);
}

function TodoController($scope, TodoService) {
    $scope.items = [];

    $scope.init = function() {
        TodoService.get().then($scope.setItems);
    };

    $scope.setItems = function(items) {
        $scope.items = items;
    };

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

function TodoService($http, $q) {
    this.get = function(setItems) {
        return $http.get('https://juacompe-todo-app.firebaseio.com/todos.json')
                    .then(this.jsonToItems)
    };

    this.jsonToItems = function(result) {
        var key, json, items, deferred;
        result = result.data;
        items = [];
        for(key in result) {
            json = result[key];
            items.push(new Item(json.title, json.done));
        };
        return items;
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
