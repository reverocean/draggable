'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function () {
    beforeEach(module('myApp.controllers'));

    describe('TodoItemsController', function () {
        var scope, mockService;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            mockService = {
                getAllTodoItems: function () {
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

        it('should contain all todo items', function () {
            var filename = scope.todoItems;
            expect(filename).toBeDefined();
            expect(filename.length).toEqual(2);
            expect(filename[0].description).toEqual('haha1');
            expect(filename[1].description).toEqual('haha2');
        })
    });


    describe('MyCtrl1', function () {
        var scope;
        var deferred;

        beforeEach(inject(function ($rootScope, $controller, $q) {
            scope = $rootScope.$new();
            var service = {

                getProjects: function () {
                    deferred = $q.defer();
                    return deferred.promise;
                }
            };
            $controller('MyCtrl1', {
                $scope: scope,
                ProjectService: service
            })
        }));

        it('should', function () {
            deferred.resolve({
                data: [1, 2]
            });
            scope.$digest();
            expect(scope.projects.length).toEqual(2);
        });
    })
});
