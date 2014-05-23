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

    describe('ProjectService', function () {
        var service, $httpBackend;

        beforeEach(inject(function (_$httpBackend_, ProjectService) {
            service = ProjectService;
            $httpBackend = _$httpBackend_;
        }));

        it('should return all projects', function () {
            $httpBackend.expectGET('/application/projects').respond([1, 2]);
            service.getProjects().then(function(reponse) {
                expect(reponse.data).toEqual([1, 2]);
            })
            $httpBackend.flush();

        });
    });
});
