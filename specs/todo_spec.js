describe('TodoController', function() {
    var $scope;

    beforeEach(inject(function($rootScope, $controller) {
        createController($rootScope, $controller);
        mockItems();
    }));

    function createController($rootScope, $controller) {
        var configuration;
        $scope = $rootScope.$new();
        configuration = {
            $scope: $scope,
            TodoService: null,
        };
        $controller('TodoController', configuration);
    }

    function mockItems() {
        $scope.items = [
            new Item('เรียน Angular', true),
            new Item('เรียน TDD', true),
            new Item('กลับบ้าน', false),
        ];
    };

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

    it('should not allow empty todo to be added', function() {
        $scope.newDescription = '';
        $scope.formSubmitted();
        expect($scope.getItemLength()).toEqual(3);
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

describe('Item', function() {
    it('should return CSS class as done if done', function() {
        var item = new Item('description', true);
        expect(item.css()).toEqual('done');
    });

    it('should return CSS class as empty if not done', function() {
        var item = new Item('description', false);
        expect(item.css()).toEqual('');
    });
});

describe('TodoService', function() {
    var service;

    beforeEach(function() {
        module('todoApp');
        inject(function(TodoService) {
            service = TodoService;
        });
    });

    it('should be able to load items from given JSON (1 item)', function() {
        var result = {
            0: {
                done: false,
                title: "ยะฮู้"
            }
        };
        items = service.jsonToItems(result);
        expect(items.length).toEqual(1);
        expectItemDescription(items, 1, 'ยะฮู้');
        expectItemIsNotDone(items, 1);
    });

    it('should be able to load items from given JSON (2 items)', function() {
        var result, items;
        result = {
            0: {
                done: true,
                title: "Learn Angular"
            },
            1: {
                done: true,
                title: "Try Angular"
            }
        };
        items = service.jsonToItems(result);
        expect(items.length).toEqual(2);
        expectItemDescription(items, 1, 'Learn Angular');
        expectItemIsDone(items, 1);
        expectItemDescription(items, 2, 'Try Angular');
        expectItemIsDone(items, 2);
    });

    function expectItemDescription(items, order, expectedDescription) {
        var item = items[order-1];
        expect(item.description).toEqual(expectedDescription);
    };

    function expectItemIsDone(items, order) {
        var item = items[order-1];
        expect(item.done).toEqual(true);
    };

    function expectItemIsNotDone(items, order) {
        var item = items[order-1];
        expect(item.done).toEqual(false);
    };
});
