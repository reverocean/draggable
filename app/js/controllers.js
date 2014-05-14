'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('TodoItemsController', ['$scope', 'TodoItemService', function ($scope, TodoItemService) {
        $scope.todoItems = TodoItemService.getAllTodoItems();
    }])
    .controller('MyCtrl1', ['$scope', function ($scope) {

    }])
    .controller('MyCtrl2', ['$scope', function ($scope) {

    }]);
