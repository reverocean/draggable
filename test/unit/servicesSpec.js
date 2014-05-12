'use strict';

/* jasmine specs for services go here */

describe('service', function () {
    beforeEach(module('myApp.services'));

    describe('TodoItemService', function () {
        var service;
        var mockHttp;

        beforeEach(inject(function (TodoItemService, _$httpBackend_) {
            service = TodoItemService;
            mockHttp = _$httpBackend_
        }));

        it('should return all todo items', function () {
            var allTodoItems = service.getAllTodoItems();
            expect(allTodoItems.length).toEqual(3);
            var todoItem = allTodoItems[0];
            expect(todoItem).toEqual(jasmine.any(TodoItem));
            expect(todoItem.description).toEqual('Haha1');
        });

        it('should save the new todo Item', function () {
//            mockHttp.expectPOST('/todoItems').response('')
        });

    });


    describe('TodoItem Resource', function () {
        var todoItem;
        var mockHttpBackend;

        beforeEach(inject(function (_$httpBackend_, TodoItem) {
            todoItem = TodoItem;
            mockHttpBackend = _$httpBackend_;
        }))

        it("should have get save and update method", function () {
            expect(todoItem.get).toBeDefined();
            expect(todoItem.save).toBeDefined();
            expect(todoItem.delete).toBeDefined();
            expect(todoItem.query).toBeDefined();
        });
    });

    describe('TodoItemsQuery', function () {
        var todoItemsQuery;
        var mockHttpBackend;

        beforeEach(inject(function (_$httpBackend_, TodoItemsQuery) {
            todoItemsQuery = TodoItemsQuery;
            mockHttpBackend = _$httpBackend_;

            this.addMatchers({
                toEqualData: function (expected) {
                    return angular.equals(this.actual, expected);
                }
            });

        }));

        it('should return all todo items', function () {
            var todoItemsPromise = todoItemsQuery;
            var todoItems;
            mockHttpBackend.expectGET('/todoItems').respond([
                {id: 1},
                {id: 2}
            ]);
            todoItemsPromise.then(function (items) {
                todoItems = items;
            });

            expect(todoItems).toBeUndefined();
            mockHttpBackend.flush();
            expect(todoItems).toEqualData([{id: 1}, {id: 2}]);
        });
    })

    describe('TodoItemQuery', function () {
        var todoItemQuery;
        var mockHttpBackend;

        beforeEach(inject(function(_$httpBackend_, TodoItemQuery) {
            mockHttpBackend = _$httpBackend_;
            todoItemQuery = TodoItemQuery;
        }));

        it('should get todoItem by id', function(){
            var todoItemPromise = todoItemQuery.query(1);

            var todoItem;
            todoItemPromise.then(function(item){
                todoItem = item;
            });

            mockHttpBackend.expectGET('/todoItems/1').respond({id: 1, description: 'haha'});

            expect(todoItem).toBeUndefined();

            mockHttpBackend.flush();
            expect(todoItem.description).toEqual('haha');

        })
    });

//  describe('version', function() {
//    it('should return current version', inject(function(version) {
//      expect(version).toEqual('0.1');
//    }));
//  });
});
