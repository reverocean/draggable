'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
    service('TodoItemService', function(){
        return {
            getAllTodoItems : function(){
                return [
                    {description: 'haha1'},
                    {description: 'haha2'}
                ];
            }
        }
    }).
    service('ProjectService', ['$http', function($http){
        return {
            getProjects : function(){
                return $http.get('/application/projects');
            }
        }
    }])
    .value('version', '0.1');
