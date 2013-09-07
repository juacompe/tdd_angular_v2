describe('TodoCtrl', function() {
    var $scope;
    beforeEach(inject(function($rootScope, $controller){
        $scope = $rootScope.$new();
        $controller('TodoCtrl', {
            $scope: $scope,
        });
    }));

    describe('initialization', function() {
        it('should have newItem as empty string', function() {
            expect($scope.newItem).toEqual("");
        }); // newItem

        it('should have 3 items todo', function() {
            expect($scope.todoItems.length).toEqual(3);
            describe('first item', function() {
                var firstItem = $scope.todoItems[0];
                expect(firstItem.title).toEqual('Learn Angular');
                expect(firstItem.done).toEqual(true);
            });

            describe('second item', function() {
                var secondItem = $scope.todoItems[1];
                expect(secondItem.title).toEqual('Build Angular App');
                expect(secondItem.done).toEqual(false);
            });

            describe('third item', function() {
                var thirdItem = $scope.todoItems[2];
                expect(thirdItem.title).toEqual('Master Angular');
                expect(thirdItem.done).toEqual(false);
            });
        }); // 3 items todo
    }); // initialization

    describe('addNewItem', function() {
        it('should add new item into todo list', function() {
            $scope.newItem = 'Eat Lunch!!';
            $scope.addNewItem();
            expect($scope.newItem).toEqual(''); // clear textbox after added
            expect($scope.todoItems.length).toEqual(4);
            var newlyAddedItem = $scope.todoItems[3];
            expect(newlyAddedItem.title).toEqual('Eat Lunch!!');
            expect(newlyAddedItem.done).toEqual(false);
        });
    }); // addNewItem
});

