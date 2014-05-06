describe('TodoController', function() {
    var $scope;

    beforeEach(inject(function($rootScope, $controller) {
        var configuration;
        $scope = $rootScope.$new();
        configuration = { $scope: $scope };
        $controller('TodoController', configuration);
        mockTodoItems();
    }));

    function mockTodoItems() {
        $scope.todos = [
            new TodoItem('Learn Angular JS',true),
            new TodoItem('Write Angular JS application',true),
            new TodoItem('Write TODO application',false)
        ];
    };

    it('should have newItemName as empty string by default', function() {
        expect($scope.newItemName).toEqual('');
    });
   
    it('should have 3 items by default', function() {
        expect($scope.todos.length).toEqual(3);
    });


    describe('first item', function() {
        var firstItem;

        beforeEach(function() {
            firstItem = $scope.todos[0];
        });

        it('should have Learn Angular JS as first item', function() {
            expect(firstItem.name).toEqual('Learn Angular JS');
        });

        it('should have first item done', function() {
            expect(firstItem.done).toEqual(true);
        });
    });

    describe('second item', function() {
        var secondItem;

        beforeEach(function() {
            secondItem = $scope.todos[1];
        });

        it('should have Write Angular JS application as second item', function() {
            expect(secondItem.name).toEqual('Write Angular JS application');
        });

        it('should have second item done', function() {
            expect(secondItem.done).toEqual(true);
        });
    });

    describe('third item', function() {
        var thirdItem;

        beforeEach(function() {
            thirdItem = $scope.todos[2];
        });

        it('should have Write TODO application as third item', function() {
            expect(thirdItem.name).toEqual('Write TODO application');
        });

        it('should have third item not done', function() {
            expect(thirdItem.done).toEqual(false);
        });
    });

    describe("add", function() {
        var newItemName;

        beforeEach(function() {
            newItemName = 'new item';
            $scope.add(newItemName);
        });

        it('should increase todos by 1', function() {
            expect($scope.todos.length).toEqual(4);
        });

        it('should not allow annonymous item', function() {
            newItemName = '';
            $scope.add(newItemName);
            expect($scope.todos.length).toEqual(4);
        });

        describe('new item', function() {
            var newItem;

            beforeEach(function() {
                newItem = $scope.todos[3];
            });

            it('should have correct name', function() {
                expect(newItem.name).toEqual(newItemName);
            });

            it('should not done', function() {
                expect(newItem.done).toEqual(false);
            });
        });
    });
    
    describe('addButtonClicked', function() {
        it('should have 4 items after added', function() {
            $scope.newItemName = 'new item';
            $scope.addButtonClicked();
            expect($scope.todos.length).toEqual(4);
        });

        it('should clear textbox after added', function() {
            $scope.newItemName = 'new item';
            $scope.addButtonClicked();
            expect($scope.newItemName).toEqual('');
        });
    }); // addButtonClicked
});

describe('TodoItem', function() {
    var item;
    it('has css as "done" for done item', function() {
        item = new TodoItem('done item', true);
        expect(item.css()).toEqual('done');
    });
    it('has css as "undone" for not done item', function() {
        item = new TodoItem('undone item', false);
        expect(item.css()).toEqual('undone');
    });
    it('has correct name', function() {
        item = new TodoItem('name');
        expect(item.name).toEqual('name');
    });
});
