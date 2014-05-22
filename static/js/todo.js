function TodoController($scope) {
    $scope.items = [
        new Item('เรียน Angular', true),
        new Item('เรียน TDD', true),
        new Item('กลับบ้าน', false),
    ];

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
