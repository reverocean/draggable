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
        $scope.pageObject = {
            totalPage: 5,
            currentPage: 0,
            elements: []
        };

        $scope.isNotFirstPage = function(){
            return $scope.pageObject.currentPage != 0;
        }

        $scope.isNotLastPage = function(){
            return $scope.pageObject.currentPage != $scope.totalPage - 1;
        }

        $scope.nextPage = function(){

        }

        $scope.previousPage = function(){

        }
    }]);
