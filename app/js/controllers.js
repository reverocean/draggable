'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('TodoItemsController', ['$scope', 'TodoItemService', function ($scope, TodoItemService) {
        $scope.todoItems = TodoItemService.getAllTodoItems();
    }])
    .controller('MyCtrl1', ['$scope','ProjectService', function ($scope, ProjectService) {
//        ProjectService.getProjects().then(function (response) {
//            $scope.projects = response.data;
//        });
        $scope.name = 'World';
    }])
    .controller('MyCtrl2', ['$scope', function ($scope) {

    }]);
