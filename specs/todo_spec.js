describe('TodoController', function() {
    var $scope;

    beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        // $controller('name', configuration);
        $controller('TodoController', {
            $scope: $scope,
        });
    }));

    it('should have 2 items after initialized', function() {
        expect($scope.items.length).toEqual(2);
    });
});

