function TodoCtrl($scope) {
    $scope.newItem = '';
    $scope.todoItems = [
        { title: 'Learn Angular', done: true },
        { title: 'Build Angular App', done: false },
        { title: 'Master Angular', done: false },
    ];
    
    $scope.addNewItem = function() {
        if($scope.newItem) {
            $scope.todoItems.push({
                title: $scope.newItem,
                done: false,
            });
            $scope.newItem = '';
        }
    }

    $scope.removeItem = function(item) {
        $scope.todoItems = _.reject($scope.todoItems, function(x) {
            return x == item;
        });
    }
};
