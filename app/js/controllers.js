'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services'])
  .controller('TodoItemsController', ['$scope', 'TodoItemService', '_', '$location',  function($scope, TodoItemService, _, $location) {
        var allTodoItems = TodoItemService.getAllTodoItems();
        $scope.todoItems = allTodoItems;
        $scope.getNeedTodoItemsTotal = function(){
            return _.filter(allTodoItems, function(item){
                return item.status == 'NEW';
            }).length;
        };

        $scope.newTodoItem = function(){

            $location.url = '/new';
        }

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
