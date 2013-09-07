describe('TodoCtrl', function() {
    var $scope, Todos;

    beforeEach(module('todoApp'));
    beforeEach(inject(function($rootScope, $controller){
        $scope = $rootScope.$new();
        $controller('TodoCtrl', {
            $scope: $scope,
            Todos: Todos,
        });
        $scope.todoItems = [
            { title: 'Learn Angular', done: true },
            { title: 'Build Angular App', done: false },
            { title: 'Master Angular', done: false },
        ];

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

        it('should not add empty item into todo list', function() {
            $scope.newItem = '';
            $scope.addNewItem();
            expect($scope.todoItems.length).toEqual(3);
        });
    }); // addNewItem

    describe('removeItem', function() {
        it('should be able to remove the first item in the list', function() {
            var firstItem = $scope.todoItems[0];
            $scope.removeItem(firstItem);
            expect($scope.todoItems.length).toEqual(2);
        });

        it('should be able to remove the last item in the list', function() {
            var lastItem = $scope.todoItems[2];
            $scope.removeItem(lastItem);
            expect($scope.todoItems.length).toEqual(2);
        });

        it('should do nothing when the given item is not in the list', function() {
            var itemToRemove = {
                item: 'This is not in list',
                done: false,
            };
            $scope.removeItem(itemToRemove);
            expect($scope.todoItems.length).toEqual(3);
        });
    }); // removeItem
});

