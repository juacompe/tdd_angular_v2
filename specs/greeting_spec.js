describe('GreetingController', function() {
    var $scope;

    beforeEach(inject(function($rootScope, $controller) {
        var configuration;
        $scope = $rootScope.$new();
        configuration = { $scope: $scope };
        $controller('GreetingController', configuration);
    }));

    it('should has default name as May', function() {
        expect($scope.getName()).toEqual('May');
    });

    it('should return Jua when name is Jua', function() {
        $scope.name = 'Jua';
        expect($scope.getName()).toEqual('Jua');
    });
});
