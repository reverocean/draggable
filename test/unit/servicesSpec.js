'use strict';

/* jasmine specs for services go here */

describe('service', function () {
    beforeEach(module('myApp.services'));


    describe('version', function () {
        it('should return current version', inject(function (version) {
            expect(version).toEqual('0.1');
        }));
    });


    describe('TodoItemService', function () {
        var service;

        beforeEach(inject(function(TodoItemService){
            service = TodoItemService;
        }));

        it('should return all todo items', function () {
            expect(service.getAllTodoItems).toBeDefined();
            var allTodoItems = service.getAllTodoItems();
            expect(allTodoItems.length).toEqual(2);
            expect(allTodoItems[0].description).toEqual('haha1');
            expect(allTodoItems[1].description).toEqual('haha2');
        });


    });

});
