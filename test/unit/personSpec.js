var Person = function (name, $log) {
    this.eat = function (food) {
        $log.info(name + " is eating delicious " + food)
    }

    this.beHungry = function (reason) {
        $log.warn(name + " is hungry because: " + reason);
    }
};


var Restaurant = function($q, $rootScope) {
    var currentOrder;

    this.takeOrder = function(orderItems){
        currentOrder = {
            deferred: $q.defer(),
            items: orderItems
        }
        return currentOrder.deferred.promise;
    }

    this.deliverOrder = function(){
        currentOrder.deferred.resolve(currentOrder.items);
        $rootScope.$digest();
    }

    this.problemWithOrder = function(){
        currentOrder.deferred.reject('abc');
        $rootScope.$digest();
    }
};


describe('$q', function(){
    var $q, $log, $rootScope;
    var person, restaurant;

    beforeEach(inject(function (_$q_, _$log_, _$rootScope_) {
        $q = _$q_;
        $log = _$log_;
        $rootScope = _$rootScope_;
        person = new Person('Pawel', $log);
        restaurant = new Restaurant($q, $rootScope);
    }));

    it('should', function(){
        var pizzaOrderFulfillment = $q.defer();

        var promise = pizzaOrderFulfillment.promise;
        promise.then(person.eat, person.beHungry);
        pizzaOrderFulfillment.resolve('Margherita');
        $rootScope.$digest();
        expect($log.info.logs).toContain(['Pawel is eating delicious Margherita']);
    })

    it('should restaurant', function(){
        var takeOrder = restaurant.takeOrder(['a', 'b']);
        takeOrder.then(function(items){
            expect(items).toEqual(['a', 'b']);
        }, function(reason){
            expect(reason).toEqual('abc');
        })

//        restaurant.deliverOrder();
        restaurant.problemWithOrder();
    })
})