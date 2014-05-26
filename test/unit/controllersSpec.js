'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function () {
    beforeEach(module('myApp'));
    beforeEach(module('myApp.controllers'));
    beforeEach(module('myApp.services'));

    describe('TodoItemsController', function () {
        var todoItemsController, scope;
        var todoItem = new TodoItem("haha1");
        todoItem.status = "DOING";
        var allTodoItems = [ todoItem, new TodoItem("haha2")];
        var location;

        beforeEach(inject(function ($rootScope, $controller, $location) {
            scope = $rootScope.$new();
            location = $location;
            var todoItemService = {
                getAllTodoItems: function () {
                    return  allTodoItems;
                }
            }

            todoItemsController = $controller('TodoItemsController',
                {
                    $scope: scope,
                    TodoItemService: todoItemService,
                    $location: $location
                });
            location.url = '/test';
        }));


        it('should return all todo items', function () {
            var todoItems = scope.todoItems;
            expect(todoItems).toEqual(allTodoItems)
        });

        it('should return all todo items which status is NEW', function () {
            var needTodoItemsTotal = scope.getNeedTodoItemsTotal();
            expect(needTodoItemsTotal).toEqual(1);
        });

        it('should change the url to new todo when the newTodoItem is called', function () {
            expect(scope.newTodoItem).toBeDefined();
            expect(location.url).toEqual('/test');
            scope.newTodoItem();
            expect(location.url).toEqual('/new');
        });
    });

//    describe('MyCtrl2', function(){
//        var scope;
//
//        beforeEach(inject(function (_$rootScope_, $controller) {
//            scope = _$rootScope_.$new();
//            var service = {
//                get: function(){
//                    return {};
//                }
//            }
//            $controller('MyCtrl2', {
//                $scope : scope,
//                TestService: service
//            })
//        }));
//
//        it('a', function(){
//
//        })
//    })
});
