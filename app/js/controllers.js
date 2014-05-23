'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services'])
  .controller('TodoItemsController', ['$scope', 'TodoItemService', '_', '$location', '$timeout',  function($scope, TodoItemService, _, $location, $timeout) {
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

        $scope.name = $timeout(function () {
            console.log("abc")
            return 'haha';

        }, 2000);

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
