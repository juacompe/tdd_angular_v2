describe('TodoController', function() {
    var $scope;

    beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        // $controller('name', configuration);
        $controller('TodoController', {
            $scope: $scope,
            TodoService: null,
        });
    }));

    it('should have 2 items after initialized', function() {
        expect($scope.items.length).toEqual(2);
    });

    it('should have Learn Angular as first item', function() {
        var firstItem = $scope.items[0];
        expect(firstItem.name).toEqual('Learn Angular');
    });

    it('should have Build Angular as second item', function() {
        var secondItem = $scope.items[1];
        expect(secondItem.name).toEqual('Build Angular');
    });

    describe('add', function() {
        it('should have 3 items after added', function() {
            $scope.add('Eat lunch');
            expect($scope.items.length).toEqual(3);
        });
        it('should clear new item box after added', function() {
            $scope.newItem = 'Eat lunch';
            $scope.add('Eat lunch');
            expect($scope.newItem).toEqual('');
        });
    });
});

