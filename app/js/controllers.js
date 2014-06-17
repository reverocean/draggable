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
            elements: [1, 2, 3 ,4 ,5 , 6]
        };

        $scope.isNotFirstPage = function(){
            return $scope.pageObject.currentPage != 0;
        };

        $scope.isNotLastPage = function(){
            return $scope.pageObject.currentPage != $scope.pageObject.totalPage - 1;
        }

        $scope.nextPage = function(){
            if($scope.pageObject.currentPage <= ($scope.pageObject.totalPage -1)) {
                $scope.pageObject.currentPage += 1;
                $scope.pageObject.elements = []
                for(var i = 1;i<= 6;i++){
                    $scope.pageObject.elements.push(i + 6 * $scope.pageObject.currentPage);
                }

            }
        }

        $scope.previousPage = function(){
            if($scope.pageObject.currentPage >= 0) {
                $scope.pageObject.currentPage -= 1;
                var elements = $scope.pageObject.elements;
                $scope.pageObject.elements = [];
                for(var i = 1;i<= 6;i++){
                    $scope.pageObject.elements.push(elements[i-1] - 6);
                }
            }
        }
    }]);
