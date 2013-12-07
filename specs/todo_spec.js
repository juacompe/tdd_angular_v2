describe('TodoController', function() {
    var $scope;

    beforeEach(inject(function($rootScope, $controller) {
        var configuration;
        $scope = $rootScope.$new();
        configuration = {
            $scope: $scope,
            TodoService: null,
        };
        $controller('TodoController', configuration);
        mockItemsFromTodoService();
    }));

    function mockItemsFromTodoService() {
        $scope.items = [
            new Item('เรียน Angular', true),
            new Item('เรียน TDD', true),
            new Item('กลับบ้าน', false),
        ];
    }

    it('should starts with 3 items', function() {
        expect($scope.getItemLength()).toEqual(3);
    });

    it('should have first item as เรียน Angular', function() {
        expectItemDescription(1, 'เรียน Angular');
    });

    it('should have first item done', function() {
        expectItemIsDone(1);
    });

    it('should have second item as เรียน TDD', function() {
        expectItemDescription(2, 'เรียน TDD');
    });

    it('should have second item done', function() {
        expectItemIsDone(2);
    });

    it('should have third item as เรียน TDD', function() {
        expectItemDescription(3,'กลับบ้าน');
    });

    it('should have third item done', function() {
        expectItemIsNotDone(3);
    });

    it('should have 4 items after added', function() {
        $scope.addItem('อันใหม่');
        expect($scope.getItemLength()).toEqual(4);
    });

    it('should have 4th item with correct description', function() {
        $scope.addItem('อันใหม่');
        expectItemDescription(4, 'อันใหม่');
    });

    it('should add new item as undone', function() {
        $scope.addItem('อันใหม่');
        expectItemIsNotDone(4);
    });

    it('should be able to add done item for loading', function() {
        $scope.addItem('loaded item', true);
        expectItemIsDone(4);
    });

    it('should add new item when form is submitted', function() {
        $scope.newDescription = 'อันใหม่';
        $scope.formSubmitted();
        expectItemDescription(4, 'อันใหม่');
        expectItemIsNotDone(4);
    });

    it('should clear textbox after submitted', function() {
        $scope.newDescription = 'อันใหม่';
        $scope.formSubmitted();
        expect($scope.newDescription).toEqual('');
    });

    function expectItemDescription(order, expectedDescription) {
        var item = $scope.getItem(order);
        expect(item.description).toEqual(expectedDescription);
    }

    function expectItemIsDone(order) {
        var item = $scope.getItem(order);
        expect(item.done).toEqual(true);
    }

    function expectItemIsNotDone(order) {
        var item = $scope.getItem(order);
        expect(item.done).toEqual(false);
    }
});

describe('TodoController', function() {
    it('should return CSS class as done if done', function() {
        var item = new Item('description', true);
        expect(item.css()).toEqual('done');
    });

    it('should return CSS class as empty if not done', function() {
        var item = new Item('description', false);
        expect(item.css()).toEqual('');
    });
});
