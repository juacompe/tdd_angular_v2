function GreetingController($scope) {
    // ng-model
    $scope.name = 'May';

    $scope.getName = function() {
        return $scope.name;
    };
};
