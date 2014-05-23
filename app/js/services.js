'use strict';

/* Services */


var todoItems = [
    new TodoItem('Haha1'),
    new TodoItem('Haha2'),
    new TodoItem('Haha3')
]

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', ['ngResource'])
    .service('TodoItemService', function () {
        this.getAllTodoItems = function () {
            return todoItems;
        }
    })
    .factory('_', function () {
        return window._;
    })
    .factory('TodoItem', ['$resource', function ($resource) {
        return $resource("/todoItems/:id", {id: '@id'});
    }])
    .factory("TodoItemsQuery", ['TodoItem', '$http','$q', function (TodoItem, $http, $q) {
        var delay = $q.defer();
        TodoItem.query(function (todoItems) {
            delay.resolve(todoItems);
        }, function () {
            delay.reject('Unable reach server error');
        });
        return delay.promise;
//        return function(){
//            return $http.get("/todoItems");};
    }])
    .factory("TodoItemQuery", ['TodoItem', '$q', function (TodoItem, $q) {
        return {
            query: function (id) {
                var delay = $q.defer();
                TodoItem.get({id: id}, function (todoItem) {
                    delay.resolve(todoItem);
                }, function () {
                    delay.reject('Unable reach server error');
                });
                return delay.promise;
            }
        }
    }])
    .service("TestService", ["$http", function($http){
        return {
            get : function(){
                return $http.get("/test");
            }
        }
    }])
    .value('version', '0.1');
