describe('FizzBuzzController', function() {
   var $scope;
   beforeEach(inject(createController));
   
   it('should be 1 when input is 1', function() {
        $scope.input = 1;
        expect("1").toEqual($scope.getResult());
    });
    
    it('should be 2 when input is 2', function(){
        $scope.input = 2;      
        expect("2").toEqual($scope.getResult());
    });

    it('should be fizz when input is 3', function() {
        $scope.input = 3;
        expect("fizz").toEqual($scope.getResult());
    });

    it('should be buzz when input is 5', function() {
        $scope.input = 5;
        expect("buzz").toEqual($scope.getResult());
    });

    it('should be fizz when input is 6', function() {
        $scope.input = 6;
        expect("fizz").toEqual($scope.getResult());
    });

    it('should be buzz when input is 10', function(){
        $scope.input = 10;
        expect("buzz").toEqual($scope.getResult());
    });

    it('should be fizzbuzz when input is 15', function() {
        $scope.input = 15;
        expect("fizzbuzz").toEqual($scope.getResult());
    });

    it('should be buffalo when has no input', function(){
        $scope.input = '';
        expect("buffalo").toEqual($scope.getResult());
    });

    function createController($rootScope, $controller){
        $scope = $rootScope.$new();
        $controller('FizzBuzzController',{$scope: $scope});
    }


});

