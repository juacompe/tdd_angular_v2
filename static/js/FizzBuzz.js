function FizzBuzzController($scope) {

    $scope.getResult = function() {
        if($scope.input % 15 == 0){
            return "fizzbuzz";
        }
        if($scope.input % 3 == 0){
            return "fizz";
        }
        if($scope.input % 5 == 0) {
            return "buzz";
        }
        return "" + $scope.input;
    };
}
