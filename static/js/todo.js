var todoApp, plugins, injections;
plugins = [];
todoApp = angular.module('TodoApp', plugins);
todoApp.service('TodoService', TodoService);
injections = ['$scope', 'TodoService', TodoController];
todoApp.controller('TodoController', injections);

function TodoController($scope, TodoService) {
    $scope.items = [];

    $scope.loadItems = function() {
        items = TodoService.query();
        items.forEach(function(itemJson) {
            var item;
            item = new Item(itemJson.title, itemJson.done);
            $scope.items.push(item);
        });
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

function TodoService() {
    this.query = function() {
        return [
            { title: 'เรียน Angular', done: true },
            { title: 'เรียน TDD', done: true },
            { title: 'กลับบ้าน', done: false },
        ];
    }
}
