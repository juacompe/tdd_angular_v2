function TodoController($scope) {
    $scope.newItemName = '';
    $scope.todos = [
        new TodoItem('Learn Angular JS',true),
        new TodoItem('Write Angular JS application',true),
        new TodoItem('Write TODO application',false)
    ];

    $scope.add = function(name) {
        if(name!="")
            $scope.todos.push(new TodoItem(name,false)); 
    }

    $scope.addButtonClicked = function() {
        $scope.add($scope.newItemName);
        $scope.newItemName = '';
    }
};

function TodoItem(name, done) {
    this.name = name;
    this.done = done;

    this.css = function() {
        return this.done? 'done': 'undone';
    }
};
