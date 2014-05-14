var Person = function (name, $log) {
    this.eat = function (food) {
        $log.info(name + " is eating delicious " + food)
    }

    this.beHungry = function (reason) {
        $log.warn(name + " is hungry because: " + reason);
    }
};


describe('$q', function(){
    var $q, $log, $rootScope;
    var person;

    beforeEach(inject(function (_$q_, _$log_, _$rootScope_) {
        $q = _$q_;
        $log = _$log_;
        $rootScope = _$rootScope_;
        person = new Person('Pawel', $log);
    }));

    it('should', function(){
        var pizzaOrderFulfillment = $q.defer();

        var promise = pizzaOrderFulfillment.promise;
        promise.then(person.eat, person.beHungry);
        pizzaOrderFulfillment.resolve('Margherita');
        $rootScope.$digest();
        expect($log.info.logs).toContain(['Pawel is eating delicious Margherita']);
    })
})