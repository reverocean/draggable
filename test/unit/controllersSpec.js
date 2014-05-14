'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function () {
    beforeEach(module('myApp.controllers'));

    describe('TodoItemsController', function () {
        var scope, mockService;

        beforeEach(inject(function($rootScope, $controller){
            scope = $rootScope.$new();
            mockService = {
              getAllTodoItems: function(){
                  return [
                      {description: 'haha1'},
                      {description: 'haha2'}
                  ];
              }
            };
            $controller('TodoItemsController', {
                $scope: scope,
                TodoItemService: mockService
            });
        }));

        it('should contain all todo items', function(){
            var filename = scope.todoItems;
            expect(filename).toBeDefined();
            expect(filename.length).toEqual(2);
            expect(filename[0].description).toEqual('haha1');
            expect(filename[1].description).toEqual('haha2');
        })
    });
});
