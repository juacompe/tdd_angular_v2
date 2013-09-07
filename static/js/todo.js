angular.module('todoApp', ['ngResource']).
    value('fbURL', 'https://juacompe-todo-app.firebaseio.com/todos.json').
    factory('Todos', function($resource, fbURL) {
        var defaultParams, actions;
        defaultParams = {};
        actions = {
            save: { method: 'PUT', isArray: true }
        };
        return $resource(fbURL, defaultParams, actions);
    }).
    controller('TodoCtrl', ['$scope', 'Todos', TodoCtrl]
    );

function TodoCtrl($scope, Todos) {
    $scope.newItem = '';
    $scope.todoItems = [];

    $scope.loadTodoItems = function() {
        $scope.todoItems = Todos.query();
    };
    
    $scope.addNewItem = function() {
        if($scope.newItem) {
            $scope.todoItems.push({
                title: $scope.newItem,
                done: false,
            });
            $scope.newItem = '';
        }
    };

    $scope.removeItem = function(item) {
        $scope.todoItems = _.reject($scope.todoItems, function(x) {
            return x == item;
        });
    };

    $scope.save = function() {
        Todos.save($scope.todoItems);
    };
};
