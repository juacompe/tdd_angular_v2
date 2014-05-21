describe('HelloController', function() {
    var $test;

    beforeEach(inject(createController));

    it('should have default name as empty string', function() {
        expect('').toEqual($test.name);
    });

    it('should have default getName as Hogwarts', function() {
        expect('Hogwarts').toEqual($test.getName());
    });

    it('should have getName as Jua when name is Jua', function() {
        $test.name = 'Jua';
        expect('Jua').toEqual($test.getName());
    });

    function createController($rootScope, $controller) {
        $test = $rootScope.$new();
        $controller('HelloController', {$scope: $test});
    };
});

