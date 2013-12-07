function GreetingController($scope) {
    // ng-model
    $scope.nickName = 'May';

    $scope.getName = function() {
        return $scope.nickName;
    };
}; 
