function HelloController($scope) {
    $scope.name = '';

    $scope.getName = function() {
        if($scope.name)
            return $scope.name;
        else
            return 'Hogwarts';
    };
};
